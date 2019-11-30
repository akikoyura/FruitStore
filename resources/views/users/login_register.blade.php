@section('header')
    <title>Gallery</title>
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
    <link rel="stylesheet" href="{{asset('/css/frontend_css/passtrength.css')}}">
    <!-- //font-awesome icons -->
    <!-- js -->
    <script src="{{asset('js/frontend_js/jquery-1.11.1.min.js')}}"></script>
    <script src="{{asset('js/frontend_js/owl.carousel.js')}}"></script>
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
        .error{
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
                        <h1>Login/Register</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url('/')}}">Home</a></li>
                        <li>Login/Register</li>
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
        <div class="content-primary">
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
                                                                <h3 class="cart-title">Login</h3>
                                                            </div>

                                                            <form method="post" class="login" name="loginForm" id="loginForm" action="{{url('/user-login')}}">
                                                                {{csrf_field()}}
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text" placeholder="Username or email address" name="email">
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input class="input-text" type="password" placeholder="Password" name="password" ></p>
                                                                <p class="form-row">
                                                                    <input type="hidden">
                                                                    <input type="hidden">
                                                                    <input type="submit" class="button btn btn-default" value="Login">
                                                                    <label class="inline">
                                                                        <input name="rememberme" type="checkbox" id="rememberme"> Remember me </label></p>
                                                                <p class="lost_password"><a>Lost your password?</a></p>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                                            <div class="entry-title title-icon">
                                                                <h3 class="cart-title">Register</h3>
                                                            </div>
                                                            <form method="post" class="register" id="registerForm" name="registerForm" action="{{url('/user-register')}}" >
                                                                {{csrf_field()}}
                                                                <p class="form-row form-row-wide">
                                                                    <input type="text" class="input-text" name="name" name="name" placeholder="Username">
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="email" class="input-text" placeholder="Email address" name="email" >
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <input type="password" name="password" class="input-text form-control form-control-lg" placeholder="Password" id="myPassword">
                                                                </p>
                                                                <p class="form-row">
                                                                    <input type="hidden">
                                                                    <input type="hidden">
                                                                    <input type="submit" class="button btn btn-default" value="Register" id="btnSubmit"></p>
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
    <br>
    <br>
    <br>
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
    <script src="{{asset('/js/backend_js/jquery.validate.js')}}"></script>
    <script src="{{asset('/js/frontend_js/jquery.passtrength.js')}}"></script>
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
    <!-- //here ends scrolling icon -->
@endsection
