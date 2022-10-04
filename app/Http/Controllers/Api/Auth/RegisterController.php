<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * @param Request $request
     */
    public function register(Request $request)
    {
        $request->validate([
            'name'      => 'required|string|max:255',
            'email'     => 'required|email|unique:users|max:191',
            'password'  => 'required|confirmed|min:6',
            'agree'     => 'accepted',
            'recaptcha' => ['required', new Recaptcha]
        ]);

        $newUser = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $token = $newUser->createToken('auth_token')->plainTextToken;
        Auth::login($newUser, true);

        return response()->json([
            'user'        => $newUser->only(['id', 'name', 'email', 'photo', 'created_at']),
            'token'       => $token,
            'roles'       => $newUser->roles->pluck('name')->toArray(),
            'permissions' => $newUser->getAllPermissions()->pluck('name')->toArray()
        ], Response::HTTP_OK);
    }
}
