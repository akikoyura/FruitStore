<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        $vegetables = Product::where(['category_id' => 1])->orderBy('created_at','desc')->get();
        $fruits = Product::where(['category_id'=>3])->orderBy('created_at','desc')->get();
        return view('index')->with(compact('vegetables','fruits'));
    }
}
