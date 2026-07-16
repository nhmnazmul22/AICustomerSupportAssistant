<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AIKnowledge extends Model
{
    protected $table = 'ai_knowledge';
    protected $fillable = [
        'type',
        'title',
        'content',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo('users', 'user_id', 'id');
    }

}
