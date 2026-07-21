<?php

namespace App\Services\External;

class EmbeddingService
{
    public function embedding(array $chunks): array
    {
        return collect($chunks)->map(fn($chunk) => [
            'content' => $chunk,
            'embedding' => str($chunks)->toEmbeddings()
        ])->all();
    }
}
