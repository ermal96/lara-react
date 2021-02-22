<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function store(Request $request)
    {

        $rules = [
            'email' => 'required|email',
        ];

        $messages = [
            'required' => 'The :attribute is required',
            'email.email' => 'Email should be type email',
        ];

        $validator = Validator::make(request()->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $user = User::where('email', $request->email);

        if (!$user) {
            return response()->json(['status' => 'failed', 'message' => 'Email does not exist'], 400);
        }

        if (Hash::check($request->password, $user->password)) {
            return response()->json(['status' => 'success', 'message' => 'Login succesfull', 'data' => $user]);
        } else {
            return response()->json(['error' => ['password' => 'Password is wrong']]);
        }

    }

}
