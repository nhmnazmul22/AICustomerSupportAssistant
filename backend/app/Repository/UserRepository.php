<?php

namespace App\Repository;

use App\Models\User;

class UserRepository
{
    public function __construct(protected User $user)
    {
    }

    /**
     * @param array{name: string, email: string, password: string, phone?: string|null} $attributes
     */
    public function create(array $attributes): User
    {
        return $this->user->create($attributes);
    }

    public function findByEmail(string $email): ?User
    {
        return $this->user->where('email', $email)->first();
    }

    public function createToken(User $user, string $tokenName): string
    {
        return $user->createToken($tokenName)->plainTextToken;
    }

    public function deleteCurrentAccessToken(User $user): void
    {
        $user->currentAccessToken()?->delete();
    }
}
