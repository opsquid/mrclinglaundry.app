<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function showAll()
    {
        return response()->json(Customer::all());
    }

    public function showOne($id)
    {
        return response()->json(Customer::find($id));
    }
}
