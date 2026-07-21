<?php

namespace App\Jobs;

use App\Models\AIKnowledge;
use App\Services\External\KnowledgeProcessingServices;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\SerializesModels;

class ProcessKnowledgeFileJob implements ShouldQueue
{
    use Queueable, Dispatchable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public AIKnowledge $knowledge)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(KnowledgeProcessingServices $knowledgeProcessingServices): void
    {
        $knowledgeProcessingServices->process($this->knowledge);
    }
}
