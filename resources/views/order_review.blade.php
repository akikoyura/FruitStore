
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
    @endsection
@extends('frontLayout.front_design')
@section('content')
    <div class="side-breadcrumb text-center ">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="page-title">
                        <h1>Order Review</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url('/')}}">Home</a></li>
                        <li>Order Review</li>
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
                                                <form name="checkout" method="post" class="checkout woocommerce-checkout" action="{{url('/')}}" >
                                                    {{@csrf_field()}}
                                                    <div class="row">
                                                        <div class="order-review col-md-8 col-sm-12 col-xs-12">
                                                            <h3 >Payment Options</h3>
                                                            <div id="order_review" class="woocommerce-checkout-review-order">
                                                                <table class="shop_table woocommerce-checkout-review-order-table">
                                                                    <thead>
                                                                    <tr>
                                                                        <th class="product-name">Product</th>
                                                                        <th class="product-total">Total</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <?php $total_amount=0 ?>
                                                                    @foreach($userCart as $item)
                                                                    <tr class="cart_item">
                                                                        <td class="product-name">
                                                                            <img src="{{asset('images/backend_images/products/small/'.$item->image)}}" class="img-thumbnail" width="10%" height="10%" alt="">
                                                                       &nbsp;&nbsp;&nbsp; {{$item->product_name}}&nbsp; <strong class="product-quantity">x {{$item->quantity}}</strong> </td>
                                                                        <td class="product-total">
                                                                            <span class="amount"><span >$</span>{{$item->price*$item->quantity}}</span>
                                                                        </td>
                                                                    </tr>
                                                                        <?php
                                                                        $total_amount+=$item->price*$item->quantity;
                                                                        ?>
                                                                        @endforeach
                                                                    </tbody>
                                                                    <tfoot>
                                                                    <tr class="cart-subtotal">
                                                                        <th>Cart Subtotal</th>
                                                                        <td><span class="amount"><span>$</span>{{$total_amount}}</span></td>
                                                                    </tr>
                                                                    <tr class="shipping">
                                                                        <td data-title="Shipping">
                                                                            Free Shipping: <span class="amount">
                                                                        <td>
                                                                            <span class="amount">$</span>0.00</span>
                                                                        </td>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="order-total">
                                                                        <th>Order Total</th>
                                                                        <td><strong><span class="amount"><span >$</span>{{$total_amount}}</span></strong>
                                                                        </td>
                                                                    </tr>
                                                                    </tfoot>
                                                                </table>
                                                                <div id="payment" class="woocommerce-checkout-payment">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <h3 style="margin-bottom:15px;font-weight: 700">Select Payment Method:</h3>
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <div class=" form-check form-check-inline" >
                                                                                <input type="radio" class="form-check-input" name="payment-method" id="COD" value="COD">
                                                                                <label class="form-check-label" for="COD">COD</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <div class="form-check form-check-inline">
                                                                                <input type="radio"
                                                                                       name="Paypal" id="Paypal" class="form-check-input" value="Paypal">
                                                                                <label for="Paypal" class="form-check-label">Paypal</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-sm-12 col-xs-12 customer-details">
                                                            <div class="woocommerce-billing-fields">
                                                                <h3>Shipping Details</h3>
                                                                <p class="form-row"><label>Shipping Name:&nbsp;*</label>
                                                                    <span><input id="shipping_name" name="shipping_name" value="{{$shippingDetails->name}}" type="text" class="input-text " placeholder="Shipping Name *" disabled></span></p>
                                                                <p class="form-row" >
                                                                    <label>Shipping Address&nbsp;*</label>
                                                                    <span ><input type="text" value="{{$shippingDetails->address}}" class="input-text" placeholder="Shipping Address *" id="shipping_address" name="shipping_address" disabled></span></p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" name="shipping_city" id="shipping_city" class="input-text" placeholder="Shipping City" value="{{$shippingDetails->city}}" disabled></span>
                                                                </p>
                                                                <p class="form-row form-row-wide">
                                                                    <span><input type="text" class="input-text" id="shipping_state" name="shipping_state" placeholder="Shipping State" value="{{$shippingDetails->state}}"  disabled></span>
                                                                </p>
                                                                <p class="form-row"><label>Shipping Country&nbsp;*</label><span><input type="text" class="input-text" placeholder="Shipping Country" id="shipping_coutry" name="shipping_country" value="{{$shippingDetails->country}}" disabled></span></p>
                                                                <p class="form-row form-row-wide"><label>Shipping Pincode&nbsp;</label><span ><input type="text" class="input-text" placeholder="Shipping Pincode*" name="shipping_pincode" id="shipping_pincode" value="{{$shippingDetails->pincode}}" disabled></span></p>
                                                                <p class="form-row"><label>Shipping Mobile&nbsp;*</label><span ><input type="text" class="input-text " placeholder="Shipping Phone *" name="shipping_mobile" id="shipping_mobile" value="{{$shippingDetails->mobile}}" disabled></span></p>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mobile-hide">
                                                            <input type="submit" class="button btn btn-default" value="Place Order" style="margin-top: 30px; margin-left: 20px;">
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
    @endsection
