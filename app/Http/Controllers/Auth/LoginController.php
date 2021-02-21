<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends ApiController
{
    public function store(Request $request)
    {
        $validator = $this->validateEmail();
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()]);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        if (Hash::check($request->password, $user->password)) {
            return $this->successResponse($user);
        }
        return response()->json(['error' => 'Password is wrong']);
    }

    public function validateEmail()
    {
        return Validator::make(request()->all(), [
            'email' => 'required|string|email|max:255',
        ]);
    }

}
