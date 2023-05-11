<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // return User::create([
        //     'Customers_fname' => $request->input('fname'),
        //     'Customers_lname' => $request->input('lname'),
        //     'Customers_email' => $request->input('email'),
        //     'Customers_phone_no' => $request->input('phone'),
        //     'Customers_gender' => $request->input('gender'),
        //     'Customers_password' => Hash::make($request->input('password'))
        // ]);

        $validator = Validator::make($request->all(), [
            'fname' => 'required|string|max:45',
            'lname' => 'required|string|max:45',
            'email' => 'required|string|email|max:30|unique:Customers,Customers_email',
            'phone' => 'required|string|min:10',
            'gender' => 'required|string',
            'password' => [
                'required',
                RulesPassword::min(6)
                    ->letters()
                    ->numbers()
            ]
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return User::create([
            'Customers_fname' => $request->input('fname'),
            'Customers_lname' => $request->input('lname'),
            'Customers_email' => $request->input('email'),
            'Customers_phone_no' => $request->input('phone'),
            'Customers_gender' => $request->input('gender'),
            'Customers_password' => Hash::make($request->input('password'))
        ]);
    }

    // public function login(Request $request)
    // {
    //     if (!Auth::attempt($request->only('Customers_email', 'Customers_password'))) {
    //         return response([
    //             'message' => 'Invalid Credentials'
    //         ], Response::HTTP_UNAUTHORIZED);
    //     }

    //     $user = Auth::user();

    //     $token = $user->createToken('token')->plainTextToken;

    //     $cookie = cookie('jwt', $token, 60*12);

    //     return response([
    //         'message ' => 'Success'
    //     ])->withCookie($cookie);
    // }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $user = User::where('Customers_email', $request->email)->first();
        if ($user) {
            if ($user && Hash::check($request->password, $user->Customers_password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $cookie = cookie('jwt', $token, 60 * 12);
                return response([
                    'message' => 'Success',
                    'user' => $user,
                ])->withCookie($cookie);
            } else {
                $response = ["errors" => ["Password mismatch"]];
                return response($response, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        } else {
            $response = ["errors" => ['User does not exist']];
            return response($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function user(Request $request)
    {
        // $user = Auth::user();

        return response()->json([
            'user' => $request->user()
        ]);
    }

    public function logout()
    {

        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
