<?php

namespace App\Http\Controllers;
use App\DeliveryAddress;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Country;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function userLoginRegister(){
        return view('users.login_register');
    }
    public function account(Request $request){
        $countries  = Country::get();
        $user_id = Auth::user()->id;
        $userDetails  = User::find($user_id);

        if($request->isMethod('post'))
        {
            $data  = $request->all();
            if(empty($data['name'])){
                return redirect()->back()->with('flash_message_error','Please enter your Name to update your account details!');
            }
            if(empty($data['address'])){
                $data['address']='';
            }
            if(empty($data['city'])){
                $data['city']='';
            }
            if(empty($data['state'])){
                $data['state']='';
            }
            if(empty($data['country'])){
                $data['country']='';
            }
            if(empty($data['pincode'])){
                $data['pincode']='';
            }
            if(empty($data['mobile'])){
                $data['mobile']='';
            }
            $user  = User::find($user_id);
            $user->name = $data['name'];
            $user->address = $data['address'];
            $user->city = $data['city'];
            $user->state = $data['state'];
            $user->country = $data['country'];
            $user->pincode = $data['pincode'];
            $user->mobile = $data['mobile'];
            $user->save();
            return redirect()->back()->with('flash_message_success','Your account details has been successfully updated!');
        }
        return view('users.accountDetail')->with(compact('countries','userDetails'));
    }
    public function register(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();

            $usersCount = User::where('email',$data['email'])->count();
            if($usersCount>0){
                return redirect()->back()->with('flash_message_error','Email already exists!');
            }else{
                $user = new User();
                $user->name = $data['name'];
                $user->email = $data['email'];
                $user->password = bcrypt($data['password']);
                $user->save();
                if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
                    Session::put('frontSession',$data['email']);
                    if(!empty(Session::get('session_id' ))){
                        $session_id = Session::get('session_id');
                        DB::table('cart')->where('session_id',$session_id)->update(['user_email'=>$data['email']]);
                    }
                }

                //Send Confirmation Email
                $email = $data['email'];
                $messageData = ['email'=>$data['email'],'name'=>$data['name'],'code'=>base64_encode($data['email'])];
                Mail::send('email.confirmation',$messageData,function($message) use ($email){
                    $message->to($email)->subject('Confirm your E-com Account');
                });
                return redirect()->back()->with('flash_message_error','Please  confirm your email to active your account!');

                if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
                    Session::put('frontSession', $data['email']);
                    return redirect('/cart');
                }
            }
        }
        return view('users.login_register');
    }
    public function checkEmail(Request $request)
    {
        $data  = $request->all();
        $usersCount = User::where('email', $data['email'])->count();
        if ($usersCount > 0) {
            echo "false";
        }else{
            echo "true"; die;
        }
    }
    public function logout(){
        Auth::logout();
        Session::forget('frontSession');
        Session::forget('session_id');
        return redirect('/')->with('flash_message_success','Log out successfully');
    }
    public function login(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();
            if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password'],'status'=>'1'])){
                $userStatus = User::where('email',$data['email'])->first();
                if($userStatus->status==0){
                    return redirect()->back()->with('flash_message_error','Your account is not activated! Please confirm your email to activated.');
                }
                Session::put('frontSession', $data['email']);
                if(!empty(Session::get('session_id'))){
                    $session_id = Session::get('session_id');
                    DB::table('cart')->where('session_id',$session_id)->update(['user_email'=>$data['email']]);
                }
                return redirect('/cart');
            }else{

                return redirect()->back()->with('flash_message_error','Invalid Username or Password!');
            }
        }
    }
    public function chkUserPassword(Request $request){
        $data  = $request->all();
        $current_password = $data['current_pwd'];
        $user_id = Auth::User()->id;
        $check_password = User::where('id',$user_id)->first();
        if(Hash::check($current_password,$check_password)){
            echo "true";die;
        }else{
            echo "false";die;
        }
    }
    public function updatePassword(Request $request){
        if($request->isMethod('post')){
            $data  = $request->all();
            $old_pwd = User::where('id',Auth::user()->id)->first();
            $current_pwd = $data['current_pwd'];
            if(Hash::check($current_pwd,$old_pwd->password)){
                //Update password
                $new_pwd = bcrypt($data['new_pwd']);
                User::where('id',Auth::User()->id)->update(['password'=>$new_pwd]);
                return redirect()->back()->with('flash_message_success','Password updated successfully!');
            }else{
                return redirect()->back()->with('flash_message_error','Current Password is incorrect!');
            }
        }
    }
    public function confirmAccount($email){
        $email = base64_decode($email);
        $usersCount = User::where('email',$email)->count();
        if($usersCount>0){
            $userDetails = User::where('email',$email)->first();
            if($userDetails->status ==1){
                return redirect('login-register')->with('flash_message_success','Your email account is already activated. You can login now');
            }else{
                User::where('email',$email)->update(['status'=>1]);
                //Send Register Email
                $messageData = ['email'=>$email,'name'=>$userDetails->name];
                Mail::send('email.welcome',$messageData,function($message) use ($email){
                    $message->to($email)->subject('Welcome to E-com Website');
                });
                return redirect('login-register')->with('flash_message_success','Your email account is activated. You can login now.');
            }
        }else{
            abort(404);
        }
    }
    public function viewUsers(){
        $users = User::get();
        return view('admin.user.view_users')->with(compact('users'));
    }
}
