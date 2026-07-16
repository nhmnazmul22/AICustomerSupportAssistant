<?php

namespace App\Services;


class StoreKnowledgeService
{
    public function __construct()
    {
    }

    /*
     * if attributes don't have files then send all data to repository
     * if attributes have any files like PDF, docs or txt  then send to the processFiles method and
     * send the response of that method to the repository.
     */
    public function storeKnowledge(array $attributes): array
    {
        if (count($attributes['files']) > 0) {
            $filesResponse = $this->processFiles($attributes['files']);
        }


        return [];
    }


    public function processFiles(array $files): array
    {

        return [];
    }
}
