<?php

namespace App\Repository;

use App\Models\AIKnowledge;

class StoreKnowledgeRepository
{
    public function __construct(protected AIKnowledge $AIKnowledge)
    {
    }

    public function createKnowledge(array $attributes): array
    {
        return $this->AIKnowledge->create($attributes);
    }
}
