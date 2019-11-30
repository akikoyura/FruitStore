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

    <div class="side-breadcrumb text-center" style="margin-bottom: 30px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="page-title">
                        <h1>Product Detail</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="{{url('/gallery')}}">Home</a></li>
                        <li>Product Detail</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="wrapper boxed" style="margin-top: 50px;">
        <div class="container">
            <div class="row">
                <div class="col-lg-13 col-md-12 col-sm-12 col-xs-12 main-sidebar ">
                    <div class="row">
                        <div>
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
                            <div class="col-md-6 col-sm-12 col-xs-12 media">
                                <div class="product-label hot-label"><span class="onhot">Hot</span><span class="onsale">Sale</span>
                                </div>
                                <div class="images" data-columns="4"
                                     style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;">
                                    <div class="main-images">
                                        <figure>
                                            <div
                                                data-thumb="{{asset('images/backend_images/products/medium/'.$productDetails->image)}}">
                                                <div style="height:405px;width:405px;"><img
                                                        src="{{asset('images/backend_images/products/medium/'.$productDetails->image)}}"
                                                        style="position: absolute; width: 401px; height: 405px;">
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12 info">
                                <div class="summary entry-summary">
                                    <div class="product-desc">
                                        <h3 itemprop="name">{{$productDetails->product_name}}</h3>

                                        <div class="woocommerce-product-rating">
                                            <div class="star-rating" title="Rated 5.00 out of 5"><span
                                                    style="width:100%"><strong class="rating">5.00</strong>
														out of 5</span></div>
                                        </div>
                                        <div itemprop="offers">
                                            <p class="price">
                                                <ins><span class="amount" id="getPrice"><span>$</span>{{number_format($productDetails->price,2)}}</span>
                                                </ins>
                                            </p>
                                        </div>
                                        <div class="description">
                                            <h4>Quick description:</h4>
                                            <p>Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at
                                                ornare risus sem et risus.
                                                Curabitur pulvinar dui viverra libero lobortis in dictum velit luctus.
                                                Donec imperdiet tincidunt interdum.
                                                Duis ultricies condimentum interdum.</p>
                                        </div>


                                        <div class="availability">
                                            <h4>Availability:</h4>
                                            <p id="Availability" class="stock">@if($total_stock>0) In Stock @else Out Of Stock @endif</p>
                                        </div>

                                        <form class="cart" name="addtocartForm" id="addtocartForm" action="{{url('add-cart')}}" method="post">
                                            {{@csrf_field()}}
                                            <input type="hidden" name="product_id" value="{{$productDetails->id}}">
                                            <input type="hidden" name="product_name" value="{{$productDetails->product_name}}">
                                            <input type="hidden" name="product_code" value="{{$productDetails->product_code}}">
                                            <input type="hidden" name="product_color" value="{{$productDetails->product_color}}">
                                            <input type="hidden" name="price" id="price" value="{{$productDetails->price}}">
                                            <div class="form-group row">

                                                <div class="col-md-3">
                                                    <select class="bg-secondary select2-dropdown form-control custom-select"
                                                            style="width: 100%; height:36px;" id="selSize" name="size">
                                                        <option ><p >Select</p></option>
                                                        @foreach($productDetails->attributes as $size)
                                                            <option class="qty-cart font-weight-bold" value="{{$productDetails->id}}-{{$size->size}}">{{$size->size}}
                                                                <pre>gr</pre>
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                            <label class="qty">Qty:</label>
                                            <div class="quantity ">
                                                <div class="qty-number"><span class="des">-</span>
                                                </div> <input type="number" class="input-text qty text" value="1" name="quantity" id="quantity">
                                                <div class="qty-number"><span class="inc">+</span></div>
                                            </div>
                                            <input type="hidden" name="add-to-cart">
                                            @if($total_stock>0)
                                            <button type="submit" class="single_add_to_cart_button button alt" id="cardButton">
                                                <span><i class="fa fa-shopping-basket"></i></span>Add to cart
                                            </button>
                                                @endif
                                        </form>


                                        <div class="add-to">
                                            <div class="add-to-wishlist yith-wcwl-add-to-wishlist ">
                                                <div class="yith-wcwl-add-button show" style="display:block"><a><i
                                                            class="fa fa-heart"></i> </a></div>
                                                <div style="clear:both"></div>
                                            </div>
                                            <div class="add-to-compare">
                                                <a class="add_to_compare compare button"><i
                                                        class="fa fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="share-links">
                                        <div class="share-email"><a>Email to Friends</a></div>
                                        <div class="addthis_sharing_toolbox">
                                            <p class="big-text">Share:</p>
                                            <div class="f-social">
                                                <ul>
                                                    <li><a><i class="fa fa-facebook"></i></a></li>
                                                    <li><a><i class="fa fa-google-plus"></i></a></li>
                                                    <li><a><i class="fa fa-twitter"></i></a></li>
                                                    <li><a><i class="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="woocommerce-tabs">
                                    <ul class="nav nav-tabs ">
                                        <li class=" active"><a>Description</a></li>
                                        <li><a>Reviews</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="panel entry-content" id="tab-description" style="display: block;">
                                            <h5>Description :</h5>
                                            <p>{{$productDetails->description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="also-like">
                    <h3 class="widget-title widget-title-bg"><span>You May </span> Also like</h3>
                    <div class="product-grid">
                        <div class="product_types row product-grid">
                            <ul class="products">
                                @foreach($randomProducts as $product)
                                    <div>
                                        <div class="col-md-3 col-sm-6 col-xs-12 item">
                                            <div class="product-content">
                                                <div class="product-img">
                                                    <div class="product-label hot-label"><span class="onhot">Hot</span>
                                                    </div>
                                                    <a><img width="300" height="300"
                                                            src="{{asset('images/backend_images/products/small/'.$product->image)}}"></a>
                                                    <div class="quick-view"><a href="{{url('/product/'.$product->id)}}"
                                                                               class="yith-wcqv-button add_to_wishlist"><i
                                                                class="fa fa-plus"></i></a></div>
                                                </div>
                                                <div class="product-desc">
                                                    <div class="product-action">
                                                        <div class="add-to">
                                                            <div class="add-to-wishlist yith-wcwl-add-to-wishlist">
                                                                <div class="yith-wcwl-add-button show"
                                                                     style="display:block">
                                                                <span class="ajax-loading"
                                                                      style="visibility:hidden"></span>
                                                                    <a class="add_to_wishlist"><i
                                                                            class="fa fa-heart"></i>
                                                                    </a></div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide"
                                                                     style="display:none;">
                                                                    <span
                                                                        class="feedback">Product added to wishlist</span>
                                                                    <a><i class="fa fa-heart"></i></a></div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide"
                                                                     style="display:none">
                                                                    <span class="feedback"></span><a><i
                                                                            class="fa fa-heart"></i> </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart"><a title="Add to cart"
                                                                                    class="button add_to_cart_button"><span><i
                                                                        class="fa fa-shopping-basket"></i></span></a>
                                                        </div>
                                                        <div class="add-to"><a class="add_to_compare compare button"><i
                                                                    class="fa fa-random"></i></a></div>
                                                    </div>
                                                    <h3><a class="product-name">{{$product->product_name}}</a></h3>
                                                    <div class="star-rating" title="Not yet rated"><span
                                                            style="width:0%"><strong class="rating">0</strong>
															out of 5</span></div>
                                                    <div class="price"><span class=" amount"><span>$</span>{{number_format($product->price,2)}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- just-above-are-enough -->
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="img-banner"><img src="{{asset('images/frontend_images/promo-banner-2.jpg')}}"
                                             alt="FoodFarm"></div>
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
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>

{{--  --}}
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
@endsection
