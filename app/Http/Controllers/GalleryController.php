<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function gallery(){
        $ProductsAll = Product::get();
//        dd($ProductsAll);
        return view('gallery')->with(compact('ProductsAll'));
    }
    public function showVegetables()
    {
        $ProductsAll = Product::where(['category_id' => 1])->orderBy('created_at','desc')->get();
        return view('gallery')->with(compact('ProductsAll'));
    }
    public function showFruits(){
        $ProductsAll = Product::where(['category_id'=>3])->orderBy('created_at','desc')->get();
        return view('gallery')->with(compact('ProductsAll'));
    }
    public function showDried(){
        $ProductsAll = Product::where(['category_id'=>2])->orderBy('created_at','desc')->get();
        return view('gallery')->with(compact('ProductsAll'));
    }


}
