<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;

abstract class Controller
{
    protected function sendSuccessResponse(
        string $message = 'Successfully operation done',
        mixed $data = [],
        int $status = Response::HTTP_OK
    )
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }
}
