<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KnowledgeChunk extends Model
{
    protected $table = 'knowledge_chunks';

    protected $fillable = [
        'ai_knowledge_id',
        'content',
        'embedding',
        'chunk_index'
    ];

    public function aiKnowledge(): BelongsTo
    {
        return $this->belongsTo(AIKnowledge::class, 'ai_knowledge_id', 'id');
    }
}
