<?php

namespace App\Services;

use App\Models\User;
use App\Repository\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

readonly class AuthService
{
    public function __construct(
        private UserRepository $userRepository
    )
    {
    }

    /**
     * @param array{name: string, email: string, password: string, phone?: string|null} $payload
     * @return User
     */
    public function register(array $payload): User
    {
        return $this->userRepository->create([
            ...$payload,
            'password' => Hash::make($payload['password']),
        ]);
    }

    /**
     * @param array{email: string, password: string} $credentials
     */
    public function login(array $credentials): string
    {
        $user = $this->userRepository->findByEmail($credentials['email']);

        if ($user === null || !Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $this->userRepository->createToken($user, $credentials['email']);
    }

    public function logout(User $user): void
    {
        $this->userRepository->deleteCurrentAccessToken($user);
    }
}
