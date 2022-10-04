<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    /**
     * @param Request $request
     */
    public function updateProfile(Request $request)
    {
        $user = auth('api')->user();
        $request->validate([
            'name'  => 'required|max:191',
            'email' => 'required|max:191|unique:users,email,' . $user->id,
            'phone' => 'nullable|max:191|unique:users,phone,' . $user->id,
            'photo' => 'nullable|base64mimes:jpg,jpeg,png|base64max:1024',
        ]);

        $in = $request->except(['photo']);

        if ($request->photo) {
            $ext = explode('/', substr($request->photo, 0, strpos($request->photo, ';')))[1];
            $name = time() . '.' . $ext;
            Image::make($request->photo)->resize(60, 60)->save(public_path('storage/users/') . $name);
            $in['photo'] = $name;
            File::delete(public_path("storage/users/") . $user->getRawOriginal('photo'));
        }
        $user->update($in);

        return response()->json(['user' => $user], 200);
    }

    /**
     * @param Request $request
     */
    public function updatePassword(Request $request)
    {
        $user = auth('api')->user();

        $request->validate([
            'current_password' => 'required',
            'password'         => 'required|confirmed|min:6',
        ]);

        $c_password = $user->password;

        if (Hash::check($request->current_password, $c_password)) {
            $password = Hash::make($request->password);
            $user->password = $password;
            $user->save();

            return response()->json(['message' => 'Password Changes Successfully.'], 200);
        } else {
            return response()->json(['message' => 'Current Password Not Match'], 400);
        }
    }
}
