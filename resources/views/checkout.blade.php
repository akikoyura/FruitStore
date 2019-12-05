
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
    @endsection

@extends('frontLayout.front_design')

@section('content')
    <div class="side-breadcrumb text-center ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="page-title">
                        <h1>Checkout</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="index.html">Home</a></li>
                        <li>Checkout</li>
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
                                                <form name="checkout" method="post" class="checkout woocommerce-checkout form" action="{{url('/checkout')}}" >
                                                    {{@csrf_field()}}
                                                    <div class="row">
                                                        <div class="order-review col-md-6 col-sm-12 col-xs-12">
                                                            <div class="woocommerce-billing-fields">
                                                                <h3>Billing Details</h3>
                                                                    <p class="form-row form-row-wide">
                                                                        <span><input id="billing_name" name="billing_name" value="{{$userDetails->name}}" type="text" class="form-control-plaintext" placeholder="Billing Name *" ></span></p>
                                                                <p class="form-row" >
                                                                    <span ><input type="text" value="{{$userDetails->address}}" class="input-text" placeholder="Billing Address *" id="billing_address" name="billing_address"></span></p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" name="billing_city" id="billing_city" class="input-text" placeholder="Billing City" value="{{$userDetails->city}}"></span>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" class="input-text" id="billing_state" name="billing_state" placeholder="Billing State"  value="{{$userDetails->state}}" ></span>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <select id="billing_countrycountry" name="billing_country" style="border-radius: 3px">
                                                                        <option value="">Select Country</option>
                                                                        @foreach($countries as $country)
                                                                            <option  value="{{$country->country_name}}"    @if($country->country_name == $userDetails->country) selected @endif >{{$country->country_name}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <span ><input type="text" class="input-text" placeholder="Billing Pincode*" name="billing_pincode" id="billing_pincode"value="{{$userDetails->pincode}}" ></span></p>
                                                                <p class="form-row">
                                                                    <span ><input type="text" class="input-text " placeholder="Billing Phone *" name="billing_mobile" id="billing_mobile" value="{{$userDetails->mobile}}"></span></p>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="copyAddress" name="copyAddress" data-value="{{$userDetails->name}}">
                                                                    <label class="form-check-label" for="billtoship">Shipping Address same as Billing Address
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--Shipping Place-->
                                                        <div class="col-md-6 col-sm-12 col-xs-12 customer-details">
                                                            <div class="woocommerce-billing-fields">
                                                                <h3>Shipping Details</h3>
                                                                <p class="form-row"><label>Shipping Name:&nbsp;*</label>
                                                                    <span><input id="shipping_name" name="shipping_name" value="{{$userDetails->name}}" type="text" class="input-text " placeholder="Shipping Name *" ></span></p>
                                                                <p class="form-row" >
                                                                    <label>Shipping Address&nbsp;*</label>
                                                                    <span ><input type="text" value="{{$userDetails->address}}" class="input-text" placeholder="Shipping Address *" id="shipping_address" name="shipping_address"></span></p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" name="shipping_city" id="shipping_city" class="input-text" placeholder="Shipping City" value=""></span>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" class="input-text" id="shipping_state" name="shipping_state" placeholder="Shipping State"  ></span>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <select id="shipping_country" name="shipping_country" style="border-radius: 3px">
                                                                        <option value="">Select Country</option>
                                                                        @foreach($countries as $country)
                                                                            <option value="{{$country->country_name}}">{{$country->country_name}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <span ><input type="text" class="input-text" placeholder="Shipping Pincode*" name="shipping_pincode" id="shipping_pincode" ></span>
                                                                </p>
                                                                <p class="form-row">
                                                                    <span ><input type="text" class="input-text " placeholder="Shipping Phone *" name="shipping_mobile" id="shipping_mobile" ></span>
                                                                </p>
                                                            </div>

                                                        </div>
                                                        <div class="form-row mobile-hide">
                                                            <input type="submit" class="button btn btn-default " value="Order now" style="margin-top: 30px;">
                                                        </div>
                                                    </div>
                                                </form>
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
    <script src="{{asset('/js/backend_js/jquery.validate.js')}}"></script>
    <script src="{{asset('js/frontend_js/main.js')}}"></script>
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
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
    @endsection
