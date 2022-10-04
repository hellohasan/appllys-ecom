<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Rules\Recaptcha;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;

class ResetPasswordController extends Controller
{
    /**
     * @param Request $request
     */
    public function reset(Request $request)
    {
        $request->validate([
            'token'     => 'required',
            'email'     => 'required|email',
            'password'  => ['required', 'confirmed', RulesPassword::defaults()],
            'recaptcha' => ['required', new Recaptcha]
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password)
                ])->save();
                $user->tokens()->delete();
                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response()->json(['message' => 'Password reset successfully.'], 200);
        }

        if ($status == Password::INVALID_USER) {
            return response()->json(['message' => 'Reset Token & Email Mismatch.'], 401);
        }

        if ($status == Password::INVALID_TOKEN) {
            return response()->json(['message' => 'Password Reset Token Invalid.'], 401);
        }
    }
}
