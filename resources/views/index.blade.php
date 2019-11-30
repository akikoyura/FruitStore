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
    <div id="main" class="wrapper">
        <div class="content-primary">
            <div id="primary">
                <article>
                    <div class="entry-content">
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="vc_row wpb_row vc_inner ">
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-8">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class=" wpb_content_element">
                                                                <section class="slider">
                                                                    <div class="flexslider">
                                                                        <ul class="slides">
                                                                            <li>
                                                                                <div class="w3l_banner_nav_right_banner">
                                                                                    <h3 >Welcome to
                                                                                        <span>Our Store.</span></h3>
                                                                                    <div class="more">
                                                                                        <a href="{{url('/gallery')}}"
                                                                                           class="button--saqui button--round-l button--text-thick mr-5 "
                                                                                           data-text="Shop now">Shop
                                                                                            now</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div
                                                                                    class="w3l_banner_nav_right_banner1">
                                                                                    <h3>Welcome to
                                                                                        <span>Our Store.</span></h3>
                                                                                    <div class="more">
                                                                                        <a href="{{url('/gallery')}}"
                                                                                           class="button--saqui button--round-l button--text-thick mr-5" data-text="Shop now">Shop now</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </section>
                                                                <!-- flexSlider -->
                                                                <link rel="stylesheet"
                                                                      href="{{asset('css/frontend_css/flexslider.css')}}"
                                                                      type="text/css" media="screen" property=""/>
                                                                <script defer
                                                                        src="{{asset('/js/frontend_js/jquery.flexslider.js')}}"></script>
                                                                <script type="text/javascript">
                                                                    $(window).load(function () {
                                                                        $('.flexslider').flexslider({
                                                                            animation: "slide",
                                                                            start: function (slider) {
                                                                                $('body').removeClass('loading');
                                                                            }
                                                                        });
                                                                    });
                                                                </script>
                                                                <!-- //flexSlider -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="banner_block_store wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-4">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div
                                                                class="ult-content-box-container promo-banner promo-banner-3 has-overlay">
                                                                <div class="ult-content-box"
                                                                     style="box-shadow: #f7f7f7; -webkit-transition: all 700ms ease; -moz-transition: all 700ms ease; -o-transition: all 700ms ease; transition: all 700ms ease;"
                                                                     data-hover_box_shadow="none">
                                                                    <div
                                                                        class="wpb_single_image wpb_content_element vc_align_center">
                                                                        <figure class="wpb_wrapper vc_figure">
                                                                            <div
                                                                                class="vc_single_image-wrapper vc_box_border_grey">
                                                                                <img width="360" height="219"
                                                                                     src="{{asset('images/frontend_images/banner-product-1.png')}}">
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                    <div class="wpb_text_column wpb_content_element ">
                                                                        <div class="wpb_wrapper">
                                                                            <div
                                                                                class="text-container text-right text_block_over">
                                                                                <h4>from</h4>
                                                                                <p><span>$19,99</span></p>
                                                                                <h3><a>Yorkshire</a></h3>
                                                                                <p class="category_block">Oat flakes
                                                                                    with fig</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 30px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                            <div
                                                                class="ult-content-box-container promo-banner promo-banner-3 has-overlay">
                                                                <div class="ult-content-box"
                                                                     style="box-shadow: #f7f7f7; -webkit-transition: all 700ms ease; -moz-transition: all 700ms ease; -o-transition: all 700ms ease; transition: all 700ms ease;"
                                                                     data-hover_box_shadow="none">
                                                                    <div
                                                                        class="wpb_single_image wpb_content_element vc_align_center">
                                                                        <figure class="wpb_wrapper vc_figure">
                                                                            <div
                                                                                class="vc_single_image-wrapper vc_box_border_grey">
                                                                                <img width="361" height="219"
                                                                                     src="{{asset('images/frontend_images/banner-product-2.png')}}"/>
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                    <div class="wpb_text_column wpb_content_element ">
                                                                        <div class="wpb_wrapper">
                                                                            <div
                                                                                class="text-container text-left text_block_over text_block_over_2">
                                                                                <h4>from</h4>
                                                                                <p><span>$19,99</span></p>
                                                                                <h3><a>Kalo</a></h3>
                                                                                <p class="category_block">Organic Race
                                                                                    Cake</p>
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
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="vc_row wpb_row vc_inner ">
                                                <div class="wpb_column vc_column_container vc_col-sm-4">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class=" wpb_content_element ">
                                                                <div class="wpb_wrapper">
                                                                    <div class="ads_border_2"></div>
                                                                    <div class="ads_border_1">
                                                                        <div class="col-md-2 col-xs-2"><span
                                                                                class="pe-7s-back-2"></span></div>
                                                                        <div class="col-md-10 col-xs-10">
                                                                            <h3>Free delivery/oder over $50</h3>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="wpb_column vc_column_container vc_col-sm-4">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class=" wpb_content_element ">
                                                                <div class="wpb_wrapper">
                                                                    <div class="ads_border_2"></div>
                                                                    <div class="ads_border_1">
                                                                        <div class="col-md-2 col-xs-2"><span
                                                                                class="pe-7s-piggy"></span></div>
                                                                        <div class="col-md-10 col-xs-10">
                                                                            <h3>10% discount for first order</h3>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="wpb_column vc_column_container vc_col-sm-4">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class=" wpb_content_element ">
                                                                <div class="wpb_wrapper">
                                                                    <div class="ads_border_2"></div>
                                                                    <div class="ads_border_1">
                                                                        <div class="col-md-2 col-xs-2"><span
                                                                                class="pe-7s-gift"></span></div>
                                                                        <div class="col-md-10 col-xs-10">
                                                                            <h3>awesome gift every month</h3>
                                                                        </div>
                                                                        <div class="clearfix"></div>
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
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="categories-product style_middle">
                                                <div class="entry-title">
                                                    <h2>Fresh <span>Vegetables</span></h2>
                                                    <div class="line"></div>
                                                </div>
                                                <div class="product-grid" data-sr="wait 0.2s">
                                                    <div id="product_slide_3981145125"
                                                         class=" controls-custom product-grid owl-carousel owl-theme owl-loaded">
                                                        <div class="owl-stage-outer">
                                                            <div class="owl-stage">
                                                                @foreach($vegetables as $product)
                                                                <div class="owl-item"
                                                                     style="width: 277.5px; margin-right: 10px;">
                                                                    <div class="product">
                                                                        <div class="product-content">
                                                                            <div class="product-img">
                                                                                <div class="product-label hot-label">
                                                                                    <span class="onhot">Hot</span>
                                                                                    <span class="on">Sale</span>
                                                                                </div>
                                                                                <a href="#">
                                                                                    <img width="300" height="300"
                                                                                         src="{{asset('images/backend_images/products/small/'.$product->image)}}"></a>
                                                                                <div class="quick-view">
                                                                                    <a href="{{url('/product/'.$product->id)}}"
                                                                                       class="yith-wcqv-button add_to_wishlist"
                                                                                       data-product_id="261"
                                                                                       title="Quick View"><i
                                                                                            class="fa fa-plus"></i></a>
                                                                                </div>
                                                                            </div>
                                                                            <div class="product-desc">
                                                                                <div class="product-action">
                                                                                    <div class="add-to">
                                                                                        <div
                                                                                            class="add-to-wishlist yith-wcwl-add-to-wishlist">
                                                                                            <div
                                                                                                class="yith-wcwl-add-button show"
                                                                                                style="display:block">
                                                                                                <span
                                                                                                    class="ajax-loading"
                                                                                                    style="visibility:hidden"></span>
                                                                                                <a class="add_to_wishlist">
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistaddedbrowse hide"
                                                                                                style="display:none;">
                                                                                                <span class="feedback">Product added to wishlist</span>
                                                                                                <a>
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistexistsbrowse hide"
                                                                                                style="display:none">
                                                                                                <span
                                                                                                    class="feedback"></span>
                                                                                                <a><i class="fa fa-heart"></i></a>
                                                                                            </div>
                                                                                            <div style="clear:both">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="add-to-cart"><a
                                                                                            class="add_to_cart_button ajax_add_to_cart">
                                                                                            <span><i
                                                                                                    class="fa fa-shopping-basket"></i></span></a>
                                                                                    </div>
                                                                                    <div class="add-to">
                                                                                        <a class="compare button">
                                                                                            <i class="fa fa-random"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                                <h3><a class="product-name">{{$product->product_name}}</a></h3>
                                                                                <div class="star-rating"
                                                                                     title="Rated 5.00 out of 5"><span
                                                                                        style="width:100%"><strong
                                                                                            class="rating">5.00</strong>
																						out of 5</span></div>
                                                                                <div class="price">
                                                                                    <ins><span
                                                                                            class="amount"><span>$</span>{{number_format($product->price,2)}}</span>
                                                                                    </ins>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                @endforeach
                                                                <!-- just-above-enough -->
                                                            </div>
                                                        </div>
                                                        <div class="owl-controls">
                                                            <div class="owl-nav">
                                                                <div class="owl-prev"><i class="fa fa-angle-left"></i>
                                                                </div>
                                                                <div class="owl-next"><i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                            <div class="owl-dots" style="display: none;"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <script type="text/javascript">
                                                    jQuery(function ($) {
                                                        var owl = $("#product_slide_3981145125");
                                                        owl.owlCarousel({
                                                            dots: false,
                                                            nav: true,
                                                            loop: true,
                                                            margin: 10,
                                                            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                                                            responsive: {
                                                                0: {
                                                                    items: 1
                                                                },
                                                                375: {
                                                                    items: 2
                                                                },
                                                                728: {
                                                                    items: 4
                                                                },
                                                                992: {
                                                                    items: 4
                                                                },
                                                                1380: {
                                                                    items: 5
                                                                }
                                                            }
                                                        }); //end: owl
                                                    });
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="categories-product  style_middle">
                                                <div class="entry-title">
                                                    <h2>Fresh <span>Fruit</span></h2>
                                                    <div class="line"></div>
                                                </div>
                                                <div class="product-grid" data-sr="wait 0.2s">
                                                    <div id="product_slide_4156261137"
                                                         class="controls-custom product-grid owl-carousel owl-theme owl-loaded">
                                                        <div class="owl-stage-outer">
                                                            <div class="owl-stage">
                                                                @foreach($fruits as $product)
                                                                <div class="owl-item "
                                                                     style="width: 277.5px; margin-right: 10px;">
                                                                    <div class="product">
                                                                        <div class="product-content">
                                                                            <div class="product-img">
                                                                                <a> <img width="300" height="300"
                                                                                         src="{{asset('images/backend_images/products/small/'.$product->image)}}"></a>
                                                                                <div class="quick-view">
                                                                                    <a href="{{url('/product/'.$product->id)}}" class="yith-wcqv-button add_to_wishlist">
                                                                                        <i class="fa fa-plus"></i></a>
                                                                                </div>
                                                                            </div>
                                                                            <div class="product-desc">
                                                                                <div class="product-action">
                                                                                    <div class="add-to">
                                                                                        <div
                                                                                            class="add-to-wishlist yith-wcwl-add-to-wishlist">
                                                                                            <div
                                                                                                class="yith-wcwl-add-button show"
                                                                                                style="display:block">
                                                                                                <span
                                                                                                    class="ajax-loading"
                                                                                                    style="visibility:hidden"></span>
                                                                                                <a class="add_to_wishlist">
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistaddedbrowse hide"
                                                                                                style="display:none;">
                                                                                                <span class="feedback">Product added to wishlist</span>
                                                                                                <a>
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistexistsbrowse hide"
                                                                                                style="display:none">
                                                                                                <span
                                                                                                    class="feedback"></span>
                                                                                                <a>
                                                                                                    <i class="fa fa-heart"></i>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                style="clear:both"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="add-to-cart">
                                                                                        <a class=" ajax_add_to_cart">
                                                                                            <span>
																							<i class="fa fa-shopping-basket"></i>
																						</span></a>
                                                                                    </div>
                                                                                    <div class="add-to"><a
                                                                                            class="compare button"><i
                                                                                                class="fa fa-random"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                                <h3><a class="product-name">{{$product->product_name}}</a>
                                                                                </h3>
                                                                                <div class="star-rating"
                                                                                     title="Not yet rated"><span
                                                                                        style="width:0%"><strong
                                                                                            class="rating">0</strong>
																						out of 5</span></div>
                                                                                <div class="price"><span
                                                                                        class=" amount"><span>$</span>{{number_format($product->price,2)}}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- above-are-enough -->
                                                                    @endforeach
                                                            </div>
                                                        </div>
                                                        <div class="owl-controls">
                                                            <div class="owl-nav">
                                                                <div class="owl-prev"><i class="fa fa-angle-left"></i>
                                                                </div>
                                                                <div class="owl-next"><i class="fa fa-angle-right"></i>
                                                                </div>
                                                            </div>
                                                            <div class="owl-dots" style="display: none;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <script type="text/javascript">
                                                    jQuery(function ($) {
                                                        var owl = $("#product_slide_4156261137");
                                                        owl.owlCarousel({
                                                            dots: false,
                                                            nav: true,
                                                            loop: true,
                                                            margin: 10,
                                                            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                                                            responsive: {
                                                                0: {
                                                                    items: 1
                                                                },
                                                                375: {
                                                                    items: 2
                                                                },
                                                                728: {
                                                                    items: 4
                                                                },
                                                                992: {
                                                                    items: 4
                                                                },
                                                                1380: {
                                                                    items: 5
                                                                }
                                                            }
                                                        }); //end: owl
                                                    });
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="vc_row wpb_row vc_inner  vc_custom_1463475201314">
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                                    <div class="vc_column-inner vc_custom_1463858638896">
                                                        <div class="wpb_wrapper" style="padding: 60px 0">
                                                            <div
                                                                class="wpb_text_column wpb_content_element  animated fadeInDown"
                                                                style="opacity:1;-webkit-animation-delay:0.2s;-webkit-animation-duration:1s;-webkit-animation-iteration-count:1; -moz-animation-delay:0.2s;-moz-animation-duration:1s;-moz-animation-iteration-count:1; animation-delay:0.2s;animation-duration:1s;animation-iteration-count:1;">
                                                                <div class="wpb_wrapper">
                                                                    <div class="banner_meat">
                                                                        <h2 style="text-align: center;">Organic Mixed
                                                                            Vegetable Bundle</h2>
                                                                        <h3 style="text-align: center;">Now available
                                                                            with only £20.00</h3>
                                                                        <p style="text-align: center;"><a href="#"
                                                                                                          class="btn btn-default">Buy
                                                                                Now</a></p>
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
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="vc_row wpb_row ">
                                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class="foodfarm-container container ">
                                                                <div class="text-center  animated fadeInLeft"
                                                                     style="opacity: 1; -webkit-animation-delay: 0s; -webkit-animation-duration: 0.7s; -webkit-animation-iteration-count: 1; -moz-animation-delay: 0s; -moz-animation-duration: 0.7s; -moz-animation-iteration-count: 1; animation-delay: 0s; animation-duration: 0.7s; animation-iteration-count: 1;">
                                                                    <div class="big-title">
                                                                        <h2>What <span>In Season</span></h2>
                                                                    </div>
                                                                    <br/>
                                                                    <div
                                                                        class="vc_separator wpb_content_element custom-separator vc_separator_align_center vc_sep_width_10 vc_sep_pos_align_center vc_sep_color_custom">
                                                                        <span class="vc_sep_holder vc_sep_holder_l">
                                                                            <span class="vc_sep_line"></span>
                                                                        </span>
                                                                        <span class="vc_sep_holder vc_sep_holder_r">
                                                                            <span class="vc_sep_line"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                            <br/>
                                                            <div class="vc_row wpb_row vc_inner ">
                                                                <div
                                                                    class="promo-1 wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                                                                    <div class="vc_column-inner ">
                                                                        <div class="wpb_wrapper">
                                                                            <div
                                                                                class="ult-animation ult-animate-viewport"
                                                                                data-animate="fadeInLeft"
                                                                                data-animation-delay="0.3"
                                                                                data-animation-duration="0.7"
                                                                                data-animation-iteration="1"
                                                                                style="opacity: 1; -webkit-transition-delay: 0.3s; -moz-transition-delay: 0.3s; transition-delay: 0.3s;"
                                                                                data-opacity_start_effect="100">
                                                                                <div
                                                                                    class="ult-content-box-container promo-banner has-overlay banner-session-left animated fadeInLeft"
                                                                                    style="opacity: 1; -webkit-animation-delay: 0.3s; -webkit-animation-duration: 0.7s; -webkit-animation-iteration-count: 1; -moz-animation-delay: 0.3s; -moz-animation-duration: 0.7s; -moz-animation-iteration-count: 1; animation-delay: 0.3s; animation-duration: 0.7s; animation-iteration-count: 1;">
                                                                                    <div class="ult-content-box"
                                                                                         style="transition: all 700ms ease 0s; margin: 0px;"
                                                                                         data-hover_box_shadow="none"
                                                                                         data-normal_margins="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;">
                                                                                        <div
                                                                                            class="wpb_single_image wpb_content_element vc_align_left">
                                                                                            <figure
                                                                                                class="wpb_wrapper vc_figure">
                                                                                                <div
                                                                                                    class="vc_single_image-wrapper vc_box_border_grey">
                                                                                                    <img width="555"
                                                                                                         height="552"
                                                                                                         src="{{asset('images/frontend_images/promo-5.jpg')}}">
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div
                                                                                            class="wpb_text_column wpb_content_element ">
                                                                                            <div class="wpb_wrapper">
                                                                                                <div
                                                                                                    class="text-container text-left">
                                                                                                    <div
                                                                                                        class="text-hover">
                                                                                                        <h2>
                                                                                                            Pre-Order<span>OurProducts</span>
                                                                                                        </h2>
                                                                                                        <p>Lorem Ipsum
                                                                                                            is simply
                                                                                                            dummy text
                                                                                                            of the
                                                                                                            printing and
                                                                                                            typesetting
                                                                                                            industrydummy
                                                                                                            text ever
                                                                                                            since the
                                                                                                            1500s.</p>
                                                                                                        <div
                                                                                                            class="view-all">
                                                                                                            <a class="btn btn-default btn-icon">Pre-order<i
                                                                                                                    class="fa fa-long-arrow-right"></i></a>
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

                                                                <div
                                                                    class="promo-2 wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                                                                    <div class="vc_column-inner ">
                                                                        <div class="wpb_wrapper">
                                                                            <div
                                                                                class="ult-animation  ult-animate-viewport  "
                                                                                data-animate="fadeInRight"
                                                                                data-animation-delay="0.3"
                                                                                data-animation-duration="0.7"
                                                                                data-animation-iteration="1"
                                                                                style="opacity: 1; -webkit-transition-delay: 0.3s; -moz-transition-delay: 0.3s; transition-delay: 0.3s;"
                                                                                data-opacity_start_effect="100">
                                                                                <div
                                                                                    class="vc_row wpb_row animated fadeInRight"
                                                                                    style="opacity: 1; -webkit-animation-delay: 0.3s; -webkit-animation-duration: 0.7s; -webkit-animation-iteration-count: 1; -moz-animation-delay: 0.3s; -moz-animation-duration: 0.7s; -moz-animation-iteration-count: 1; animation-delay: 0.3s; animation-duration: 0.7s; animation-iteration-count: 1;">
                                                                                    <div
                                                                                        class="wpb_column vc_column_container vc_col-sm-6">
                                                                                        <div class="vc_column-inner ">
                                                                                            <div class="wpb_wrapper">
                                                                                                <div
                                                                                                    class="ult-content-box-container promo-banner has-overlay">
                                                                                                    <div
                                                                                                        class="ult-content-box"
                                                                                                        style="transition: all 700ms ease 0s; margin: 0px;"
                                                                                                        data-hover_box_shadow="none"
                                                                                                        data-normal_margins="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;">
                                                                                                        <div
                                                                                                            class="wpb_single_image wpb_content_element vc_align_left">
                                                                                                            <figure class="wpb_wrapper vc_figure">
                                                                                                                <a class="vc_single_image-wrapper   vc_box_border_grey"><img class=" " src="{{asset('images/frontend_images/promo-1-264x264.jpg')}}" width="264" height="264" alt="promo-1" title="promo-1"></a></figure></div><div class="wpb_text_column wpb_content_element ">
                                                                                                            <div class="wpb_wrapper"><div class="text-container text-left"><div class="text-hover"><h2><a>Spring</a></h2></div></div></div></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="wpb_column vc_column_container vc_col-sm-6">
                                                                                        <div class="vc_column-inner ">
                                                                                            <div class="wpb_wrapper">
                                                                                                <div
                                                                                                    class="ult-content-box-container promo-banner has-overlay">
                                                                                                    <div
                                                                                                        class="ult-content-box"
                                                                                                        style="transition: all 700ms ease 0s; margin: 0px;"
                                                                                                        data-hover_box_shadow="none">
                                                                                                        <div
                                                                                                            class="wpb_single_image wpb_content_element vc_align_left">
                                                                                                            <figure
                                                                                                                class="wpb_wrapper vc_figure">
                                                                                                                <a
                                                                                                                    class="vc_single_image-wrapper   vc_box_border_grey">
                                                                                                                    <img
                                                                                                                        class=" "
                                                                                                                        src="{{asset('images/frontend_images/promo-3-264x264.jpg')}}"
                                                                                                                        width="264"
                                                                                                                        height="264"
                                                                                                                        alt="promo-3"
                                                                                                                        title="promo-3"></a>
                                                                                                            </figure>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="wpb_text_column wpb_content_element "><div class="wpb_wrapper"><div class="text-container text-left"><div class="text-hover"><h2><a>Summer</a></h2></div></div></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    class="vc_row wpb_row  op-image animated fadeInRight"
                                                                                    style="opacity: 1; -webkit-animation-delay: 0.3s; -webkit-animation-duration: 0.7s; -webkit-animation-iteration-count: 1; -moz-animation-delay: 0.3s; -moz-animation-duration: 0.7s; -moz-animation-iteration-count: 1; animation-delay: 0.3s; animation-duration: 0.7s; animation-iteration-count: 1;">
                                                                                    <div
                                                                                        class="wpb_column vc_column_container vc_col-sm-6">
                                                                                        <div class="vc_column-inner ">
                                                                                            <div class="wpb_wrapper">
                                                                                                <div
                                                                                                    class="ult-content-box-container promo-banner has-overlay">
                                                                                                    <div
                                                                                                        class="ult-content-box"
                                                                                                        style="transition: all 700ms ease 0s; margin: 0px;"
                                                                                                        data-hover_box_shadow="none"
                                                                                                        data-normal_margins="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;">
                                                                                                        <div
                                                                                                            class="wpb_single_image wpb_content_element vc_align_left">
                                                                                                            <figure
                                                                                                                class="wpb_wrapper vc_figure">
                                                                                                                <a
                                                                                                                    class="vc_single_image-wrapper vc_box_border_grey">
                                                                                                                    <img
                                                                                                                        src="{{asset('images/frontend_images/promo-2-264x264.jpg')}}"
                                                                                                                        width="264"
                                                                                                                        height="264"
                                                                                                                        alt="promo-2"
                                                                                                                        title="promo-2"></a>
                                                                                                            </figure>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="wpb_text_column wpb_content_element ">
                                                                                                            <div
                                                                                                                class="wpb_wrapper">
                                                                                                                <div
                                                                                                                    class="text-container text-left">
                                                                                                                    <div
                                                                                                                        class="text-hover">
                                                                                                                        <h2>
                                                                                                                            <a>Winter</a>
                                                                                                                        </h2>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="wpb_column vc_column_container vc_col-sm-6">
                                                                                        <div class="vc_column-inner ">
                                                                                            <div class="wpb_wrapper">
                                                                                                <div
                                                                                                    class="ult-content-box-container promo-banner has-overlay">
                                                                                                    <div
                                                                                                        class="ult-content-box"
                                                                                                        style="transition: all 700ms ease 0s; margin: 0px;"
                                                                                                        data-hover_box_shadow="none"
                                                                                                        data-normal_margins="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;">
                                                                                                        <div
                                                                                                            class="wpb_single_image wpb_content_element vc_align_left">
                                                                                                            <figure
                                                                                                                class="wpb_wrapper vc_figure">
                                                                                                                <a class="vc_single_image-wrapper vc_box_border_grey"><img
                                                                                                                        class=" "
                                                                                                                        src="{{asset('images/frontend_images/promo-4-264x264.jpg')}}"
                                                                                                                        width="264"
                                                                                                                        height="264"
                                                                                                                        alt="promo-4"
                                                                                                                        title="promo-4"></a>
                                                                                                            </figure>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="wpb_text_column wpb_content_element ">
                                                                                                            <div
                                                                                                                class="wpb_wrapper">
                                                                                                                <div
                                                                                                                    class="text-container text-left">
                                                                                                                    <div
                                                                                                                        class="text-hover">
                                                                                                                        <h2>
                                                                                                                            <a>Autumn</a>
                                                                                                                        </h2>
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
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="vc_row wpb_row  vc_custom_1463392065605 vc_row-has-fill">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="foodfarm-container container ">
                                        <div class="our-blog  ">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-list-default">
                                                    <div data-sr="wait 0.2s" class="blog-content blog-list">
                                                        <div class="blog-item">
                                                            <div class="blog-img">
                                                                <a href="#"><img class="img-responsive" width="132"
                                                                                 height="127"
                                                                                 src="{{asset('images/frontend_images/8-132x127.jpg')}}"
                                                                                 alt="blog-img"></a>
                                                            </div>
                                                            <div class="blog-post-info">
                                                                <div class="blog-post-title">
                                                                    <div class="post-name"><a href="#">Fruit Market
                                                                            Prices</a></div>
                                                                    <div class="post-info"><a href="#"
                                                                                              rel="category tag">News
                                                                            &amp; Events</a></div>
                                                                </div>
                                                                <div class="blog_post_desc">
                                                                    <p> Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting industry. Lorem Ipsum has been
                                                                        the industryâ€™s standard dummy text ever since
                                                                        the 1500s, when an unknown printer took
                                                                        a galley of type and scrambled it to make a</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-list-default">
                                                    <div data-sr="wait 0.2s" class="blog-content blog-list">
                                                        <div class="blog-item">
                                                            <div class="blog-img">
                                                                <a href="#"></a>
                                                                <img class="img-responsive" width="132" height="127"
                                                                     src="{{asset('images/frontend_images/6-132x127.jpg')}}"
                                                                     alt="blog-img"></a>
                                                            </div>
                                                            <div class="blog-post-info">
                                                                <div class="blog-post-title">
                                                                    <div class="post-name"><a href="#">New Crop Fresh
                                                                            Pomegranate</a></div>
                                                                    <div class="post-info"><a href="#"
                                                                                              rel="category tag">News
                                                                            &amp; Events</a>, <a href="#"
                                                                                                 rel="category tag">Spring</a>
                                                                    </div>
                                                                </div>
                                                                <div class="blog_post_desc">
                                                                    <p> Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting industry. Lorem Ipsum has been
                                                                        the industryâ€™s standard dummy text ever since
                                                                        the 1500s, when an unknown printer took
                                                                        a galley of type and scrambled it to make a</p>
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
    <!-- //here ends scrolling icon -->
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>

    {{--  --}}
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
@endsection
