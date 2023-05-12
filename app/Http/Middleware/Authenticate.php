<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    // protected function redirectTo(Request $request): ?string
    // {
    //     return $request->expectsJson() ? null : route('login');
    // }

    public function handle($request, Closure $next, ...$guards)
    {
        if ($this->auth->guard(...$guards)->guest()) {            
            $cookie = Cookie::forget('jwt');
            return response([
                'message' => 'Success'
            ], Response::HTTP_OK)->withCookie($cookie);
        }
    
        return $next($request);
    }
}
