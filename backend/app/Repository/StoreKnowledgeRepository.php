<?php

namespace App\Repository;

use App\Models\AIKnowledge;

class StoreKnowledgeRepository
{
    public function __construct(protected AIKnowledge $AIKnowledge)
    {
    }

    public function createKnowledge(array $attributes): AIKnowledge
    {
        $knowledge = $this->AIKnowledge->create($attributes);

        $knowledge->load('user');

        return $knowledge;
    }
}
