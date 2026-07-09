<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

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
        return $this->sendSuccessResponse(
            'User creation successful',
            new UserResource($result),
            Response::HTTP_CREATED
        );
    }

    /**
     * Login the user
     */
    public function login(LoginRequest $request)
    {
        // Validated request
        $credentials = $request->validated();

        // find the user exist or not
        $user = User::where('email', $credentials['email'])->first();

        // password checking and if password wrong and no user found then give error
        if (empty($user) || !Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // issue a token and return
        $token = $user->createToken($request['email'])->plainTextToken;

        return $this->sendSuccessResponse('User login successfully', ['token' => $token]);
    }


    public function me()
    {
        return $this->sendSuccessResponse('User Retrieve successful', new UserResource(auth()->user()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return $this->sendSuccessResponse('User logout successfully');
    }
}
