<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function AuthRouteAPI(Request $request){
        return $request->user();
     }
}
