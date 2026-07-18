<?php

namespace App\Enums;

enum AIKnowledgeStatus: string
{
    case UPLOADED = 'uploaded';
    case PROCESSING = 'processing';
    case COMPLETED = 'completed';
    case FAILED = 'failed';

}
