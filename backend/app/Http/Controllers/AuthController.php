<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService
    ) {}

    /**
     * Create a new user
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = $this->authService->register($request->validated());

        return $this->sendSuccessResponse(
            'User creation successful',
            new UserResource($user),
            Response::HTTP_CREATED
        );
    }

    /**
     * Login the user
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $token = $this->authService->login($request->validated());

        return $this->sendSuccessResponse('User login successfully', ['token' => $token]);
    }

    public function me(Request $request): JsonResponse
    {
        return $this->sendSuccessResponse('User Retrieve successful', new UserResource($request->user()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function logout(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $request->user();

        $this->authService->logout($user);

        return $this->sendSuccessResponse('User logout successfully');
    }
}
