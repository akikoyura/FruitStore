
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
                        <h1>Cart</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url('/')}}">Home</a></li>
                        <li>My Cart</li>
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
                        <div class="vc_row wpb_row">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="woocommerce">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                                        <form action="#" method="post">
                                                            <table class="shop_table shop_table_responsive cart" cellspacing="0">
                                                                <thead>
                                                                <tr>
                                                                    <th class="product-name">Product</th>
                                                                    <th class="product-price">Price</th>
                                                                    <th class="product-quantity">Quantity</th>
                                                                    <th class="product-subtotal">Total</th>
                                                                    <th class="product-remove">&nbsp;</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                @foreach($userCart as $cart)
                                                                <tr class="cart_item">
                                                                    <td class="product-thumbnail">
                                                                        <div class="mobile-show">
                                                                            <span> Product </span>
                                                                        </div>
                                                                        <a href="#"><img width="300" height="300" src="{{asset('images/backend_images/products/small/'.$cart->image)}}"></a>
                                                                        <a href="#">{{$cart->product_name}} </a>
                                                                        <input type="hidden" name="" value="{{$cart->product_code}}">
                                                                    </td>
                                                                    <td class="product-price">
                                                                        <div class="mobile-show"> <span> Price </span></div><span class="amount"><span>$</span>{{$cart->price}}</span>
                                                                    </td>
                                                                    <td class="product-quantity">
                                                                        <div class="mobile-show"> <span> Quantity </span></div>
                                                                        <div class="quantity buttons_added">
                                                                            <div class="qty-number">
                                                                                @if($cart->quantity>1)
                                                                                <span><a href="{{url('/cart/update-quantity/'.$cart->id.'/-1')}}">-</a></span>
                                                                                @endif
                                                                            </div>
                                                                            <input type="number" class="input-text qty text" step="1" min="0" max="" value="{{$cart->quantity}}">
                                                                            <div class="qty-number">
                                                                                <span><a href="{{url('/cart/update-quantity/'.$cart->id.'/1')}}">+</a></span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="product-subtotal">
                                                                        <div class="mobile-show"> <span> Total </span></div> <span class="amount"><span>$</span>{{$cart->price*$cart->quantity}}</span>
                                                                    </td>
                                                                    <td class="product-remove"> <a href="{{url('/cart/delete-product/'.$cart->id)}}" class="remove"><i class="fa fa-close"></i></a></td>
                                                                </tr>
                                                                @endforeach
                                                                <tr>
                                                                    <td colspan="6" class="actions">
                                                                        <div class="row">
                                                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                                                                                <div class="coupon">
                                                                                    <input type="text" class="input-text" placeholder="Coupon code">
                                                                                    <input type="submit" class="button btn btn-default" value="Apply"></div>
                                                                            </div>
                                                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 btn-update-cart text-right">
                                                                                <input type="submit" class="button btn btn-default display-inline" value="Update">
                                                                                <div class="wc-proceed-to-checkout display-inline">
                                                                                    <a href="{{url('/checkout')}}" class="checkout-button button alt wc-forward btn btn-default">Proceed
                                                                                        to Checkout</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cart-collaterals">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <div class="cart_totals calculated_shipping">
                                                                <div class="entry-title title-icon">
                                                                    <h3 class="cart-title">Cart Totals</h3>
                                                                </div>
                                                                <table cellspacing="0" class="shop_table shop_table_responsive cart_totals_table">
                                                                    <tbody>
                                                                    <tr class="cart-subtotal">
                                                                        <th>Sub Total</th>
                                                                        <td><span class="amount"><span>$</span>10.00</span></td>
                                                                    </tr>
                                                                    <tr class="order-total">
                                                                        <th>Total</th>
                                                                        <td><strong><span class="amount"><span>$</span>10.00</span></strong></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-sm-6 col-xs-12 shipping-total">
                                                            <form class="woocommerce-shipping-calculator" action="Cart.html" method="post">
                                                                <div class="entry-title title-icon">
                                                                    <h3 class="cart-title"><a href="#">Calculate Shipping</a></h3>
                                                                </div>
                                                            </form>Free Shipping: <span class="amount"><span>$</span>0.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container">
                                                <div class="row">
                                                    <div class=" prd-cross">
                                                        <div class="cross-sells">
                                                            <div class="entry-title title-icon text-center">
                                                                <h2>Related<span> Products</span></h2>
                                                            </div>
                                                            <div class="product-grid">
                                                                <div class="product">
                                                                    @foreach($randomProducts as $product)
                                                                    <div class="col-md-3 col-sm-6 col-xs-12 item">
                                                                        <div class="product-content">
                                                                            <div class="product-img">
                                                                                <div class="product-label hot-label"><span class="onhot">Hot</span><span class="onsale">Sale</span></div>
                                                                                <a href="#"> <img width="300" height="300" src="{{asset('images/backend_images/products/medium/'.$product->image)}}"> </a>
                                                                                <div class="quick-view"><a href="{{url('$/product/'.$product->id)}}" class="yith-wcqv-button add_to_wishlist"><i class="fa fa-plus"></i></a></div>
                                                                            </div>
                                                                            <div class="product-desc">
                                                                                <div class="product-action">
                                                                                    <div class="add-to">
                                                                                        <div class="add-to-wishlist yith-wcwl-add-to-wishlist ">
                                                                                            <div class="yith-wcwl-add-button show" style="display:block">
																								<span class="ajax-loading" style="visibility:hidden">
																								</span>
                                                                                                <a class="add_to_wishlist">
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                                                                                <span class="feedback">Product added to wishlist</span>
                                                                                                <a><i class="fa fa-heart"></i> </a></div>
                                                                                            <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                                                                                <span class="feedback"></span> <a> <i class="fa fa-heart"></i> </a></div>
                                                                                            <div style="clear:both"></div>
                                                                                            <div class=""></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="add-to-cart"><a class="button add_to_cart_button"><span><i class="fa fa-shopping-basket"></i></span></a></div>
                                                                                    <div class="add-to"><a class="add_to_compare compare button"><i class="fa fa-random"></i></a></div>
                                                                                </div>
                                                                                <h3><a href="#" class="product-name">{{$product->product_name}}</a></h3>
                                                                                <div class="star-rating" title="Not yet rated"><span style="width:0%"><strong class="rating">0</strong>
																						out of 5</span></div>
                                                                                <div class="price">
                                                                                    <ins><span class="amount"><span>$</span>{{$product->price}}</span></ins></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                        @endforeach
                                                                </div>
                                                                <!-- just-above-enough -->
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
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
    @endsection
