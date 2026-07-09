<?php

namespace Tests\Feature;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BaseTest extends TestCase
{

    protected function authUser(?User $user = null, $abilities = ["*"]): void
    {
        Sanctum::actingAs(
            $user ?? User::factory()->create(),
            $abilities
        );
    }
}
