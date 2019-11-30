
@section('header')
    <title>Fruit Store</title>
    <script type="application/x-javascript">
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="{{asset('/css/frontend_css/bootstrap.css')}}" rel="stylesheet" type="text/css" media="all"/>
    <link href="{{asset('css/frontend_css/style.css')}}" rel="stylesheet" type="text/css" media="all"/>
    <link href="{{asset('css/frontend_css/style-1.css')}}" rel="stylesheet" type="text/css" media="all"/>
    <!-- font-awesome icons -->
    <link href="{{asset('/css/frontend_css/font-awesome.css')}}" rel="stylesheet" type="text/css" media="all"/>
    <!-- //font-awesome icons -->
    <!-- js -->
    <script src="{{asset('js/frontend_js/jquery-1.11.1.min.js')}}"></script>

    <!-- //js -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Courgette&amp;subset=latin-ext" rel="stylesheet">
    <!-- start-smoth-scrolling -->
    <script type="text/javascript" src="{{asset('js/frontend_js/move-top.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/frontend_js/easing.js')}}"></script>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            $(".scroll").click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <style type="text/css">
        .help-inline{
            color: red;
        }
    </style>

@endsection
@extends('frontLayout.front_design')

@section('content')
    <div class="side-breadcrumb text-center ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="page-title">
                        <h1>Account Detail</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url("/")}}">Home</a></li>
                        <li>My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    @if(Session::has('flash_message_success'))
        <script>
            $(document).ready(function(){
                $.notify({
                    message: "<strong >{!!session('flash_message_success')!!}</strong>"
                }, {
                    type: 'success',
                    placement: {
                        from: "top",
                        align: "center"
                    },
                });
            })
        </script>
    @endif
    @if(Session::has('flash_message_error'))
        <script>
            $(document).ready(function () {
                $.notify({
                    message: "<strong >{!!session('flash_message_error')!!}</strong>"
                }, {
                    type: 'danger',
                    placement: {
                        from: "top",
                        align: "center"
                    },
                });
            })
        </script>
    @endif
    <div id="main" class="wrapper ">
        <div class="content-primary		">
            <div id="primary" class="content-area">
                <article>
                    <div class="entry-content">
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="woocommerce">
                                                <div class="col2-set" id="customer_login">
                                                    <div class="row">
                                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                                            <div class="entry-title title-icon">
                                                                <h3 class="cart-title">Update Account</h3>
                                                            </div>
                                                            <form method="post" class="login" id="accountForm" name="accountForm" action="{{url('/account')}}">
                                                                {{csrf_field()}}
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text" value="{{$userDetails->name}}" placeholder="Name" name="name" ></p>
                                                                <p class="form-row form-row-wide">
                                                                    <input class="input-text" type="text" placeholder="Address"  name="address" value="{{$userDetails->address}}"></p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text" type="text" placeholder="City" name="city" value="{{$userDetails->city}}">
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text"  type="text" placeholder="State" name="state" value="{{$userDetails->state}}">
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <select id="country" name="country" style="border-radius: 3px">
                                                                        <option value="">Select Country</option>
                                                                        @foreach($countries as $country)
                                                                            <option  value="{{$country->country_name}}"    @if($country->country_name == $userDetails->country) selected @endif >{{$country->country_name}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text" type="text" placeholder="Pincode" name="pincode" value="{{$userDetails->pincode}}" >
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text"  type="text" placeholder="Mobile" name="mobile" value="{{$userDetails->mobile}}">
                                                                </p>
                                                                <p class="form-row">
                                                                    <input type="hidden">
                                                                    <input type="hidden">
                                                                    <input type="submit" class="button btn btn-default" value="Update">
                                                                   </p>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                                            <div class="entry-title title-icon">
                                                                <h3 class="cart-title">Update Password</h3>
                                                            </div>
                                                            <form method="post" class="register" name="passwordForm" id="passwordForm" action="{{url('/update-user-pwd')}}">
                                                                {{csrf_field()}}
                                                                <p class="form-row form-row-wide">
                                                                    <input type="password" class="input-text" placeholder="Current Password" name="current_pwd" id="current_pwd"></p>
                                                                <span id="chkPwd"></span>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="password" class="input-text" placeholder="New Password" name="new_pwd" id="new_pwd"></p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="password" class="input-text" placeholder="Confirm Password" id="confirm_pwd" name="confirm_pwd"></p>
                                                                <p class="form-row">
                                                                    <input type="hidden">
                                                                    <input type="hidden">
                                                                    <input type="submit" class="button btn btn-default" value="Update"></p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    @endsection
@section('footer')
    <script type="text/javascript">
        function toggleFilter(e) {
            jQuery(e).parent().find(".content-filter").hasClass("active") ? jQuery(e).parent().find(".content-filter").removeClass(
                "active") : (jQuery(".content-filter").removeClass("active"), jQuery(e).parent().find(".content-filter").addClass(
                "active"))
        }
    </script>
    <!-- //footer -->
    <!-- Bootstrap Core JavaScript -->
    <script src="{{asset('js/frontend_js/bootstrap.min.js')}}"></script>
    <script>
        $(document).ready(function () {
            $(".dropdown").hover(
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                    $(this).toggleClass('open');
                },
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                    $(this).toggleClass('open');
                }
            );
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart'
            });
        });
    </script>
    <script src="{{asset('js/frontend_js/custom_form_validation.js')}}"></script>
    <script src="{{asset('/js/frontend_js/jquery.passtrength.js')}}"></script>
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
    @endsection
