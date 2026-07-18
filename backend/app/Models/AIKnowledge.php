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
        'file_path',
        'file_name',
        'mime_type',
        'user_id'
    ];

    protected $with = [
        'user'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id')
            ->select(['id', 'name', 'email']);
    }

}
