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
@endsection
@extends('frontLayout.front_design')

@section('content')
    <div class="side-breadcrumb text-center ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="page-title">
                        <h1>Successfull Order</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url('/')}}">Home</a></li>
                        <li>My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="main" class="wrapper ">
        <div class="content-primary		">
            <div id="primary" class="content-area">
                <article class=" page type-page status-publish hentry">
                    <div class="entry-content">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1456910551708">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="woocommerce" style="margin-bottom:100px;">
                                                <div class=" my_account woocommerce-MyAccount-content">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h3 class="cart-title text-center">YOUR ORDER HAS BEEN
                                                                PLACED</h3>
                                                            <h5 class="card-title text-center"
                                                                style="padding-top: 1rem">. Your order number
                                                                is {{\Illuminate\Support\Facades\Session::get('order_id')}}
                                                                and
                                                                total payable about is
                                                                $ {{\Illuminate\Support\Facades\Session::get('grand_total')}}</h5>
                                                            <h5 class="card-title text-center"
                                                                style="padding-top: 1rem">
                                                                Please make payment by clicking below Payment Button
                                                            </h5>
                                                            <?php
                                                            $orderDetails = \App\Order::getOrderDetails(\Illuminate\Support\Facades\Session::get('order_id'));
                                                            $nameArr = explode(' ',$orderDetails->name);
                                                            $getCountryCode = \App\Order::getCountryCode($orderDetails->country);
                                                            ?>
                                                            <div
                                                                style="text-align: center!important; padding-top: 1rem">
                                                                <form action="https://www.sandbox.paypal.com/cgi-bin/webscr"
                                                                      method="post">
                                                                {{ csrf_field() }}
                                                                <!-- Saved buttons use the "secure click" command -->
                                                                    <input type="hidden" name="cmd" value="_xclick">
                                                                    <!-- Saved buttons are identified by their button IDs -->
                                                                    <input type="hidden" name="business"
                                                                           value="hmaiknight@gmail.com">
                                                                    <input type="hidden" name="item_name"
                                                                           value="{{\Illuminate\Support\Facades\Session::get('order_id')}}">
                                                                    <input type="hidden" name="currency_code"
                                                                           value="USD">
                                                                    <input type="hidden" name="amount"
                                                                           value="{{round(\Illuminate\Support\Facades\Session::get('grand_total'),2)}}">
                                                                    <input type="hidden" name="first_name" value="{{$nameArr[0]}}">
                                                                    <input type="hidden" name="last_name" value="{{$nameArr[1]}}">
                                                                    <input type="hidden" name="address1"
                                                                           value="{{$orderDetails->address}}">
                                                                    <input type="hidden" name="address2" value="">
                                                                    <input type="hidden" name="city" value="{{$orderDetails->city}}">
                                                                    <input type="hidden" name="state" value="{{$orderDetails->state}}">
                                                                    <input type="hidden" name="zip" value="{{$orderDetails->pincode}}">
                                                                    <input type="hidden" name="night_phone_a" value="{{$orderDetails->mobile}}">
                                                                    <input type="hidden" name="email"
                                                                           value="{{$orderDetails->user_email}}">
                                                                    <input type="hidden" name="currency_code"
                                                                           value="USD">
                                                                    <input type="hidden" name="country" id="" value="{{$getCountryCode->country_code}}">
                                                                    <input type="hidden" name="return" value="{{url('paypal/thanks')}}">

                                                                    <!-- Saved buttons display an appropriate button image. -->
                                                                    <input type="image" name="submit"
                                                                           src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif"
                                                                           alt="PayPal - The safer, easier way to pay online">
                                                                    <img alt="" width="1" height="1"
                                                                         src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif">
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
                    </div>
                </article>
            </div>
        </div>
    </div>
    <?php
    \Illuminate\Support\Facades\Session::forget('grand_total');
    \Illuminate\Support\Facades\Session::forget('order_id');
    ?>
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
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>

    {{--  --}}
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
@endsection
