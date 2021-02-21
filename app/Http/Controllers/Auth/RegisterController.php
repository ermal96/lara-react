<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:8|confirmed',
            'password_confirmation' => 'required',
        ];

        $messages = [
            'required' => 'The :attribute is required',
            'email.email' => 'Email should be type email',
            'email.unique' => 'This is email is taken',
            'password.min' => 'Password should be more than 8 chars',
            'password.confirmed' => 'Password does not match',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['status' => 'success', 'message' => 'User stored', 'data' => [
            'name' => $user->name,
            'email' => $user->name,
            'id' => $user->id,
        ]], 201);

    }
}
