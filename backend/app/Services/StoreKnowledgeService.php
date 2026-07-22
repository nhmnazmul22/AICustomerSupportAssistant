<?php

namespace App\Services;


use App\DTOs\AIKnowledgeData;
use App\Enums\AIKnowledgeStatus;
use App\Enums\KnowledgeType;
use App\Jobs\ProcessKnowledgeFileJob;
use App\Models\AIKnowledge;
use App\Repository\StoreKnowledgeRepository;

readonly class StoreKnowledgeService
{
    public function __construct(private StoreKnowledgeRepository $storeKnowledgeRepository)
    {
    }

    /*
     * if attributes don't have files then send all data to repository
     * if attributes have any files like PDF, docs or txt  then send to the processFiles method and
     * send the response of that method to the repository.
     */
    public function storeKnowledge(AIKnowledgeData $attributes): AIKnowledge
    {
        if ($attributes->type === KnowledgeType::FILE && count($attributes->files) > 0) {
            return $this->processFiles($attributes->files);
        }

        $payload = [
            'type' => $attributes->type->value,
            'title' => $attributes->title,
            'content' => $attributes->textContent,
            'status' => AIKnowledgeStatus::COMPLETED->value,
            'user_id' => auth()->id()
        ];

        return $this->storeKnowledgeRepository->createKnowledge($payload);
    }


    public function processFiles(array $files): ?AIKnowledge
    {
        $uploadedKnowledge = null;
        foreach ($files as $file) {
            $path = $file->store('knowledge', 'public');

            $uploadedKnowledge = $this->storeKnowledgeRepository->createKnowledge([
                'type' => KnowledgeType::FILE->value,
                'title' => "A files {$file->getMimeType()} uploaded named: {$file->getClientOriginalName()}",
                'content' => '',
                'file_name' => $file->getClientOriginalName(),
                'file_path' => $path,
                'mime_type' => $file->getMimeType(),
                'status' => AIKnowledgeStatus::UPLOADED->value,
                'user_id' => auth()->id()
            ]);

            ProcessKnowledgeFileJob::dispatch($uploadedKnowledge);
        }

        return $uploadedKnowledge;
    }
}
