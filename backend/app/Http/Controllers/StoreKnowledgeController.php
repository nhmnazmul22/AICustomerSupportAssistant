<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreKnowledgeRequest;
use App\Services\StoreKnowledgeService;

class StoreKnowledgeController extends Controller
{

    public function __construct(protected StoreKnowledgeService $storeKnowledgeService)
    {

    }

    public function store(StoreKnowledgeRequest $request)
    {
        $result = $this->storeKnowledgeService->storeKnowledge($request->validated());

        return $this->sendSuccessResponse('Knowledge updated with new data', $result);
    }
}
