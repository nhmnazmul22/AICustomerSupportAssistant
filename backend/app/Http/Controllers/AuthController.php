<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    /**
     * Create a new user
     */
    public function register(RegisterRequest $request)
    {
        $payload = $request->validated();
        $result = User::create([
            ...$payload,
            'password' => Hash::make($payload['password'])
        ]);
        return $this->sendSuccessResponse('User creation successful', new UserResource($result));
    }

    /**
     * Login the user
     */
    public function login()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function logout(Request $request)
    {
        //
    }
}
