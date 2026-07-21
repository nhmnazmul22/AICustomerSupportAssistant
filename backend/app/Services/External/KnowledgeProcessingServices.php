<?php

namespace App\Services\External;

use App\Enums\AIKnowledgeStatus;
use App\Models\AIKnowledge;
use App\Models\KnowledgeChunk;

class KnowledgeProcessingServices
{
    public function __construct(
        protected DocumentParserService $documentParserService,
        protected EmbeddingService      $embeddingService,
        protected TextChunkerService    $textChunkerService,
        protected TextCleanerService    $textCleanerService,
    )
    {
    }

    public function process(AIKnowledge $knowledge): void
    {
        $knowledge->update([
            'status' => AIKnowledgeStatus::PROCESSING->value,
        ]);

        $cleanText = $this->textCleanerService->clean($knowledge->content);

        $chunks = $this->textChunkerService->chunk($cleanText);

        $embedding = $this->embeddingService->embedding($chunks);

        foreach ($embedding as $index => $embed) {
            KnowledgeChunk::created([
                'knowledge_id' => $knowledge->id,
                'content' => $embed['content'],
                'embedding' => $embed['embedding'],
                'chunk_index' => $index,
            ]);
        }

        $knowledge->update([
            'status' => AIKnowledgeStatus::COMPLETED->value,
        ]);
    }
}
