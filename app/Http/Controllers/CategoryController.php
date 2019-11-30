<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //Add Category
    public function addCategory(Request $request){
        if($request->isMethod('post')){
            $data =$request->all();
            $category = new Category();
            $category->name = $data['category_name'];
            $category->parent_id = $data['parent_id'];
            $category->description = $data['description'];
            $category->url = $data['url'];
            $category->save();
            return redirect('/admin/view-category')->with('flash_message_success','Category added Successfully!');
        }
        $levels = Category::where(['parent_id'=>0])->get();
        return view('admin.categories.add_category')->with(compact('levels'));
    }

    //Edit Category
    public function editCategory(Request $request,$id=null)
    {
        $categoryDetails = Category::where(['id'=>$id])->first();
        if($request->isMethod('post'))
        {
            $data = $request->all();
            Category::where(['id'=>$id])->update(['name'=>$data['category_name'], 'parent_id'=>$data['parent_id'],'description'=>$data['description'],'url'=>$data['url']]);
            return redirect('/admin/view-category')->with('flash_message_success','Category updated successfully');
        }
        $levels = Category::where(['parent_id'=>0])->get();
        return view('admin.categories.edit_category')->with(compact('categoryDetails','levels'));
    }

    //Delete Category
    public function deleteCategory($id=null){
        if(!empty($id))
        {
            Category::where(['id'=>$id])->delete();
            return redirect()->back()->with('flash_message_success','Category deleted Successfully!');
        }
    }


    //View All Categories
    public function viewCategories(){
        //get all records from database
        $categories = Category::get();
        return view('admin.categories.view_categories')->with(compact('categories'));
    }
}
