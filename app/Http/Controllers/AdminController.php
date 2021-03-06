<?php

namespace App\Http\Controllers;

use App\Admin;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    //

    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->input();
            //use Auth::attempt to check if admin email , password is correct, and actually is admin
            $adminCount = Admin::where(['username' => $data['username'], 'password' => md5($data['password']), 'status' => 1])->count();
            if ($adminCount > 0) {
                Session::put('adminSession', $data['username']);
                return redirect('/admin/dashboard');
            } else {
                return redirect('/admin')->with('flash_message_error', 'Invalid Username or Password');
            }
        }

        return view('admin.admin_login');
    }

//return admin dashboard
    public function dashboard()
    {
        return view('admin.dashboard');
    }

//handle logout action
    public function logout()
    {
        Session::flush();
        return redirect('/admin')->with('flash_message_success', 'Logged out Successfully');
    }

    public function settings()
    {
        $adminDetails = Admin::where(['username'=> Session::get('adminSession' )])->first();
        return view('admin.settings')->with(compact('adminDetails'));
    }

    public function chkPassword(Request $request)
    {
        $data = $request->all();
        $adminCount = Admin::where(['username'=> Session::get('adminSession' ),'password'=>md5($data['current_pwd'])])->count();
        if ($adminCount==1){
            echo "true";
        } else {
            echo "false";
            die;
        }
    }

    public function updatePassword(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            $adminCount = Admin::where(['username'=>Session::get('adminSession'),'password'=>md5($data['current_pwd'])])->count();

            if ($adminCount==1) {
                $password = md5($data['new_pwd']);
                Admin::where('username',Session::get('adminSession'))->update(['password' => $password]);
                return redirect('/admin/settings')->with('flash_message_success', 'Password updated Successfully!');
            } else {
                return redirect('/admin/settings')->with('flash_message_error', 'Incorrect current password');
            }
        }
    }



}
