<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test admin can log in
     * @return void
     */
    public function test_admin_can_login()
    {
        $this->test_admin_can_register_a_user();

        $payload = [
            'email' => 'admin@gmail.com',
            'password' => 'admin122'
        ];

        $response = $this->postJson(route('auth.login'), $payload);

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonPath('message', 'User login successfully')
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    'token'
                ]
            ]);
    }

    /**
     * Test admin can register
     * @return void
     */
    public function test_admin_can_register_a_user()
    {
        $payload = [
            'name' => 'Nazmul Hasan',
            'password' => 'admin122',
            'email' => 'admin@gmail.com'
        ];

        $response = $this->postJson(route('auth.register'), $payload);

        $response->assertStatus(201);
        $response->assertCreated()
            ->assertJsonPath('success', true)
            ->assertJsonPath('message', 'User creation successful')
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'update_at',
                ],
            ]);

    }

}
