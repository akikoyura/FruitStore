<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
    //

    public function login(Request $request){

        if($request->isMethod('post'))
        {
            $data  = $request->input();
            //use Auth::attempt to check if admin email , password is correct, and actually is admin
            if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password'],'admin'=>'1'])){
                //
                return redirect('/admin/dashboard');
        }else{
                return redirect('/admin')->with('flash_message_error','Invalid Username or Password');
            }
        }
        return view('admin.admin_login');
    }

    //return admin dashboard
    public function dashboard(){
        return view('admin.dashboard');
    }

    //handle logout action
    public function logout(){
        Session::flush();
        return redirect('/admin')->with('flash_message_success','Logged out Successfully');
    }

    public function settings(){
        return view('admin.settings');
    }
    public function chkPassword(Request $request){
        $data = $request->all();
        $current_password = $data['current_pwd'];
        $check_password = User::where(['admin'=>'1'])->first();
        if(Hash::check($current_password,$check_password->password)){
            echo "true";
        }else{
            echo "false";die;
        }
    }
    public function updatePassword(Request $request){
        if($request->isMethod('post')){
            $data  = $request->all();
            $user = Auth::user()->email;
            $check_password = User::where(['email'=> $user])->first();
            $current_password = $data['current_pwd'];
            if(Hash::check($current_password,$check_password->password)){
                $password = bcrypt($data['new_pwd']);
                User::where('id',$check_password->id)->update(['password'=>$password]);
                return redirect('/admin/settings')->with('flash_message_success','Password updated Successfully!');
            }else{
                return redirect('/admin/settings')->with('flash_message_error','Incorrect current password');
            }
        }
    }

}
