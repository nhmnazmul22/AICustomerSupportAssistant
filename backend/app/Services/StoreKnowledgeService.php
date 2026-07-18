<?php

namespace App\Services;


use App\DTOs\AIKnowledgeData;
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
        if (isset($attributes->files) && count($attributes->files) > 0) {
            $filesResponse = $this->processFiles($attributes->files);
        }

        $payload = [
            'type' => $attributes->type->value,
            'title' => $attributes->title,
            'content' => $attributes->textContent,
            'user_id' => auth()->id()
        ];

        return $this->storeKnowledgeRepository->createKnowledge($payload);
    }


    public function processFiles(array $files): array
    {
        
        return [];
    }
}
