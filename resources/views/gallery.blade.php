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
    <div id="main" class="wrapper ">
        <div class="content-primary">
            <div id="primary" class="content-area">
                <article class="images">
                    <div class="entry-content">
                        <div class="vc_row wpb_row ">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="vc_row wpb_row vc_inner ">
                                                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-8">
                                                    <div class="vc_column-inner ">
                                                        <div class="wpb_wrapper">
                                                            <div class=" wpb_content_element">
                                                                <section class="slider">
                                                                    <div class="flexslider">
                                                                        <ul class="slides">
                                                                            <li>
                                                                                <div
                                                                                    class="w3l_banner_nav_right_banner">
                                                                                    <h3>Welcome to
                                                                                        <span>Our Store.</span></h3>
                                                                                    <div class="more">
                                                                                        <a href="Gallery.html"
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
                                                                                        <a href="Gallery.html"
                                                                                           class="button--saqui button--round-l button--text-thick mr-5"
                                                                                           data-text="Shop now">Shop
                                                                                            now</a>
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
                                                                        src="{{asset('js/frontend_js/jquery.flexslider.js')}}"></script>
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
                        <div class="vc_row wpb_row  vc_row-has-fill " style="position: relative; margin-top: 100px;">
                            <div class="upb_row_bg" data-bg-override="0"
                                 style="min-width: 1379px; left: 0px; width: 1379px;"></div>
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="ult-animation  ult-animate-viewport  ult-no-mobile "
                                                 data-animate="fadeInUp" data-animation-delay="0"
                                                 data-animation-duration="3" data-animation-iteration="1"
                                                 style="opacity:1;-webkit-transition-delay: 0s; -moz-transition-delay: 0s; transition-delay: 0s;"
                                                 data-opacity_start_effect="">
                                                <div class="animated fadeInUp"
                                                     style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:3s;-webkit-animation-iteration-count:1; -moz-animation-delay:0s;-moz-animation-duration:3s;-moz-animation-iteration-count:1; animation-delay:0s;animation-duration:3s;animation-iteration-count:1;text-align:center">
                                                    <div class="uvc-main-heading ult-responsive"
                                                         style="fontsize: 40px;">
                                                        <h2 style="font-family:Courgette;font-weight:normal;color:#222222;">
                                                            Our Product</h2>
                                                    </div>
                                                    <div class="uvc-heading-spacer line_only">
                                                        <span class=" uvc-headings-line "
                                                              style="border-style: solid; border-bottom-width: 1px; border-color: rgb(183, 220, 54); width: 130px; margin: 0px auto; "></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="our-products product_type_2 ">
                                                    <div class="row ">
                                                        <div class="col-md-12 col-sm-12 col-xs-12 ">
                                                            <div class="tabs-fillter tab_filter_4 ">
                                                                <ul class="nav nav-tabs btn-filter ">
                                                                    <li><a >All</a></li>
                                                                    <li><a href="{{url('/showFruits')}}">Fruits</a></li>
                                                                    <li><a  href="{{url('/showVegetables')}}">Vegetables</a></li>
                                                                    <li><a  href="{{url('/showDrieds')}}">Dried</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="row ">

                                                                <div class="product-grid "
                                                                     style="position: relative; height: 1099.5px; ">
                                                                @foreach($ProductsAll as $product)
                                                                    <!--Start Column-->
                                                                    <div class=" item col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                                                                        <div class="product-content "><a
                                                                                class="hover_overlay "></a>
                                                                            <div class="product-img"><a> <img
                                                                                        width="300 "
                                                                                        height="300 "
                                                                                        src="{{asset('images/backend_images/products/small/'.$product->image)}}"
                                                                                        alt=" "> </a>
                                                                            </div>
                                                                            <div class="product-desc ">
                                                                                <div class="product-action ">
                                                                                    <div class="star-rating "
                                                                                         title="Not yet rated "><span
                                                                                            style="width:0% "><strong
                                                                                                class="rating ">0</strong>
																								out of 5</span></div>
                                                                                    <div class="price "><span
                                                                                            class=" amount "><span>$</span>{{ number_format($product->price,2) }}</span>
                                                                                    </div>

                                                                                    <div class="add-to ">
                                                                                        <div
                                                                                            class="add-to-wishlist yith-wcwl-add-to-wishlist add-to-wishlist-1746 ">
                                                                                            <div
                                                                                                class="yith-wcwl-add-button show "
                                                                                                style="display:block "><span
                                                                                                    class="ajax-loading "
                                                                                                    style="visibility:hidden "></span>
                                                                                                <a data-toggle="tooltip "
                                                                                                   title=" " href="# ">
                                                                                                    <i
                                                                                                        class="fa fa-heart "></i>
                                                                                                </a></div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistaddedbrowse hide "
                                                                                                style="display:none; ">
                                                                                                <span class="feedback ">Product added to wishlist</span>
                                                                                                <a data-toggle="tooltip "
                                                                                                   title=" " href="# ">
                                                                                                    <i
                                                                                                        class="fa fa-heart "></i>
                                                                                                </a></div>
                                                                                            <div
                                                                                                class="yith-wcwl-wishlistexistsbrowse hide "
                                                                                                style="display:none "><span
                                                                                                    class="feedback "></span>
                                                                                                <a data-toggle="tooltip ">
                                                                                                    <i class="fa fa-heart "></i>
                                                                                                </a></div>
                                                                                            <div
                                                                                                style="clear:both "></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="add-to "><a
                                                                                            data-toggle="tooltip "
                                                                                            class="add_to_compare compare button "><i
                                                                                                class="fa fa-random "></i></a>
                                                                                    </div>
                                                                                    <div class="quick-view "
                                                                                         data-toggle="tooltip "><a
                                                                                            onclick=" " href="{{url('/product/'.$product->id)}}"
                                                                                            class="yith-wcqv-button add_to_wishlist "><i
                                                                                                class="fa fa-plus "></i></a>
                                                                                    </div>
                                                                                    <div class="add-to-cart "><a
                                                                                            title="Add to cart " href="{{url('product/'.$product->id)}}"
                                                                                            class="button product_type_simple add_to_cart_button ajax_add_to_cart ">
                                                                                        <span
                                                                                            class="icon-6 "></span></a>
                                                                                    </div>
                                                                                </div>
                                                                                <h3><a class="product-name ">{{$product->product_name}}</a>
                                                                                </h3>
                                                                                <div class="star-rating "
                                                                                     title="Not yet rated "><span
                                                                                        style="width:0% "><strong
                                                                                            class="rating ">0</strong>
																							out of 5</span></div>
                                                                                <div class="price "><span
                                                                                        class=" amount "><span>$</span>25.00</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- just-above-are-enough -->
                                                                    @endforeach
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
                        <div class="vc_row wpb_row  vc_row-has-fill" data-rtl="false" style="position: relative;">
                            <div class="upb_row_bg vcpb-default" style="background-size: cover; background-repeat: repeat; background-color: rgba(0, 0, 0, 0); background-image: url({{asset('images/frontend_images/home7_img8.jpg')}}); background-attachment: scroll; min-width: 1690px; left: 0px; width: 1690px;"></div>
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="testimonials-client wpb_content_element">
                                                <div class="row"></div>
                                                <div id="container">
                                                    <div class="owl-carousel owl-theme owl-loaded " id="testimonial_2568180531">
                                                        <div class="owl-stage-outer ">
                                                            <div class="owl-stage" style="transform: translate3d(-2300px, 0px, 0px); transition: all 0s ease 0s; width: 8050px;">
                                                                <div class="owl-item" style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Stahama</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item " style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Laura</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item active" style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Kushova</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item" style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Stahama</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item" style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Laura</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item " style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Kushova</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="owl-item" style="width: 1140px; margin-right: 10px;">
                                                                    <div data-dot="1" class="text-center">
                                                                        <div class="testimonial-profile">
                                                                            <img class="testimonial-img testimonial-img-3" width="100" height="100"
                                                                                 src="{{asset('images/frontend_images/member10-100x100.jpg')}}" alt="testimonial-img">
                                                                        </div>
                                                                        <div class="testimonial_content testimonial-style3" style="color: #ffffff;">
                                                                            <p>
                                                                                Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non
                                                                                tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam
                                                                                sodales
                                                                                sem egestas sem blandit volutpat.
                                                                            </p>
                                                                            <p class="name" style="color: #ffffff;">Stahama</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="owl-controls">
                                                            <div class="owl-nav">
                                                                <div class="owl-prev" style="display: none;">prev</div>
                                                                <div class="owl-next" style="display: none;">next</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dotsCont style3 text-center ">
                                                        <div class="owl-dot active"><span></span></div>
                                                        <div class="owl-dot"><span></span></div>
                                                        <div class="owl-dot"><span></span></div>
                                                    </div>
                                                </div>
                                                <script type="text/javascript">
                                                    $(document).ready(function () {
                                                        var owl = $("#testimonial_2568180531");
                                                        owl.owlCarousel({
                                                            items: 1,
                                                            loop: true,
                                                            margin: 10,
                                                            smartSpeed: 450,
                                                            nav: true,
                                                            dotsContainer: '.dotsCont'
                                                        }); //end: owl
                                                    });
                                                </script>
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
@endsection
