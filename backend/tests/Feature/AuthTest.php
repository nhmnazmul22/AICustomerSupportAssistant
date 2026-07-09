<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends BaseTest
{
    use RefreshDatabase;

    /**
     * Test admin can get profile info
     */
    public function test_admin_can_get_profile_info()
    {
        $this->authUser();
        $response = $this->getJson(route('auth.me'));

        $response->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonPath('message', 'User Retrieve successful')
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

    public function test_admin_can_logout()
    {
        $user = User::factory()->create();

        $token = $user->createToken('test-token');

        $response = $this
            ->withToken($token->plainTextToken)
            ->postJson(route('auth.logout'));

        $response->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonPath('message', 'User logout successfully');

        $this->assertDatabaseMissing('personal_access_tokens', [
            'id' => $token->accessToken->id,
        ]);

        $this->assertCount(0, $user->tokens()->get());
    }

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


    /*
     * Test admin can log out
     */

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
