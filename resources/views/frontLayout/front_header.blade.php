<header id="master-head" class="site-header header-v5 ">
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-9 col-xs-8">
                    <div class="header-contact header-slogan">
                        <div class="dib link-contact">
                            <p>Default welcome msg!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-3 col-xs-4">
                    <div class="top-link">
                        <ul class="hidden-sm hidden-xs display-inline">
                            @if(!empty(Auth::check()))
                            <li class="customlinks"><a href="{{url('/account')}}"><i class="fa fa-user"></i> My
                                    Account</a></li>
                            <li class="customlinks"><a href="{{url('/user-logout')}}"><i class="fa fa-lock" aria-hidden="true"></i> Logout</a></li>
                                @else
                                <li class="customlinks">
                                    <a href="{{url('/admin')}}"><i class="fa fa-address-card" aria-hidden="true"></i>Admin Login</a>
                                </li>
                                <li class="customlinks"><a href="{{url('/login-register')}}"><i class="fa fa-lock" aria-hidden="true"></i>
                                        Login / Register</a></li>
                                @endif
                        </ul>
                        <ul class="hidden-lg hidden-md display-inline">
                            @if(!empty(Auth::check()))
                            <li class="dib customlinks">
                                <a aria-expanded="false" aria-haspopup="true" data-toggle="dropdown">
                                    <i class="fa fa-user"></i><span>My Account</span> <i class="fa fa-caret-down"></i> </a>

                                <div class="dib header-profile dropdown-menu">
                                    <ul>
                                        <li><a>My Account</a></li>
                                        <li><a class="update-wishlist">Wishlist <span>(0)</span></a></li>
                                        <li><a href="{{url('/user-logout')}}">Login / Register</a></li>
                                    </ul>
                                </div>
                            </li>
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header-bottom -->
    <div class="header-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-4 hidden-sm hidden-xs text-left padding_10 contact_v5">
                    <p><a href="callto:(+84)1234-5678"><i class="fa fa-phone"></i><span>(+84)1234-5678</span></a></p>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <h2 class="header-logo">
                        <a rel="home"> <img class="" src="{{asset('images/frontend_images/logo-5.png')}}"
                                            alt="FoodFarm"/> </a>
                    </h2>
                </div>
                <div class="col-md-4 hidden-sm hidden-xs text-right cart_5 padding_10">
                    <div class="mini-cart">
                        <a class="cart_label h_icon" onclick="toggleFilter(this);" href="javascript:void(0);">
                            <i class="fa fa-shopping-basket"></i>
                            <p class="number-product">1</p>
                        </a>
                        <div class="cart-block content-filter">
                            <div class="widget_shopping_cart_content"></div>
                        </div>
                        <span>Cart</span>
                    </div>
                    <span class="amount"><span>&#36;</span>10.00</span>
                </div>
            </div>
        </div>
    </div>
    <nav id="site-navigation" class="main-navigation">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-14 menu-left">
                    <div class="menu-primary-menu-container">
                        <div class="menu-primary-menu-container">
                            <button class="btn-open"><i class="fa fa-bars"></i></button>
                            <div class="sticky-logo">
                                <h2 class="header-logo">
                                    <a rel="{{url('/')}}"><img src="{{asset('images/frontend_images/sticky-logo.png')}}"
                                                       alt="FoodFarm"/></a>
                                </h2>
                            </div>
                            <ul id="menu-primary-menu" class="mega-menu">
                                <li class="current-menu-parent current_page_parent  menu-item-has-children  page_item_has_children">
                                    <a>Home<span
                                            class="icon-next"><i class="fa fa-angle-down"></i></span></a><span
                                        class="dropdown-toggle caret caret-verticle" data-toggle="dropdown"
                                        role="menubar" aria-expanded="true"><i
                                            class="fa fa-angle-right"></i></span><span
                                        class="dropdown-toggle caret caret-hozi"
                                        data-toggle="dropdown" role="menubar" aria-expanded="true">+</span>
                                    <ul class="children dropdown-menu">
                                        <li><a href="{{url('/')}}">Food Store</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children  page_item_has_children"><a>About<span
                                            class="icon-next"><i class="fa fa-angle-down"></i></span></a><span
                                        class="dropdown-toggle caret caret-verticle" data-toggle="dropdown"
                                        role="menubar" aria-expanded="true"><i
                                            class="fa fa-angle-right"></i></span><span
                                        class="dropdown-toggle caret caret-hozi" data-toggle="dropdown" role="menubar"
                                        aria-expanded="true">+</span>
                                    <ul class="children dropdown-menu">
                                        <li><a>About Us</a></li>
                                        <li><a>History</a></li>
                                        <li><a>Farmers</a></li>
                                        <li><a>Press Media</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children page_item_has_children"><a>Blog<span
                                            class="icon-next"><i class="fa fa-angle-down"></i></span></a><span
                                        class="dropdown-toggle caret caret-verticle" data-toggle="dropdown"
                                        role="menubar" aria-expanded="true"><i
                                            class="fa fa-angle-right"></i></span><span
                                        class="dropdown-toggle caret caret-hozi" data-toggle="dropdown" role="menubar"
                                        aria-expanded="true">+</span>
                                    <ul class="children dropdown-menu">
                                        <li><a>Blog Left Sidebar</a></li>
                                        <li><a>Blog Single</a></li>
                                        <li><a>Knowledge</a></li>
                                        <li><a>We Doing</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children page_item_has_children"><a href="{{url('/gallery')}}">Gallery<span
                                            class="icon-next"><i class="fa fa-angle-down"></i></span></a><span
                                        class="dropdown-toggle caret caret-verticle" data-toggle="dropdown"
                                        role="menubar" aria-expanded="true"><i
                                            class="fa fa-angle-right"></i></span><span
                                        class="dropdown-toggle caret caret-hozi" data-toggle="dropdown" role="menubar"
                                        aria-expanded="true">+</span>
                                </li>
                                <li><a href="Contact us.html">Contact</a></li>
                            </ul>
                            <div class="right-header">
                                <div class="search-block-top"><span class="btn-search" onclick="toggleFilter(this);"><i
                                            class="fa fa-search"></i></span>
                                    <div class="top-search content-filter">
                                        <form method="post" action="{{url('/search-products')}}">
                                            {{csrf_field()}}
                                            <div class="hidecat">
                                                <input type="text" name="product" class="product-search search-field" value="" placeholder="Enter keyword&hellip;" autocomplete="off" data-number="4" data-keypress="2">
                                                <div>
                                                    <div class="woosearch-results"></div>
                                                </div>
                                            </div>
                                            <button type="submit" class="woosearch-submit submit btn-search"><i
                                                    class="pe-7s-search"></i> <i
                                                    class="fa fa-spin"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="mini-cart hidden-md hidden-lg">
                                    <a onclick="toggleFilter(this);" href="javascript:void(0);"> <i
                                            class="fa fa-shopping-basket"></i>
                                        <p class="number-product"></p>
                                    </a>
                                    <div class="cart-block content-filter">
                                        <div class="widget_shopping_cart_content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
