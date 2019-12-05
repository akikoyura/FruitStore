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
                        <h1>Order</h1>
                    </div>
                    <ul class="breadcrumb">
                        <li><a class="home" href="Default.aspx">Home</a></li>
                        <li>My My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="main" class="wrapper ">
        <div class="content-primary">
            <div id="primary" class="content-area">
                <article>
                    <div class="entry-content">
                        <div class="vc_row wpb_row">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="vc_column-inner ">
                                    <div class="wpb_wrapper">
                                        <div class="foodfarm-container container ">
                                            <div class="woocommercea ">
                                                <nav class="woocommerce-MyAccount-navigation">
                                                    <ul>
                                                        <li>
                                                            <a href="">Dashboard</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <div class=" my_account woocommerce-MyAccount-content">
                                                    <div style="text-align: center;" runat="server" id="divTop">
                                                        <p class="text-center ">RECENT ORDER</p>
                                                    </div>
                                                    <style type="text/css">
                                                        .table > tbody > tr > td {
                                                            color: dimgrey;
                                                        }
                                                        .table1 >thead
                                                        {
                                                            height:unset !important;
                                                        }
                                                        .table1>thead>tr>th{
                                                            text-align: center !important;
                                                        }
                                                        .table1 >tbody>tr>td
                                                        {
                                                            display: table-cell;
                                                            vertical-align: middle;
                                                        }
                                                        .table1
                                                        {
                                                            font-size:16px;
                                                        }
                                                        .option{
                                                            color:dodgerblue;
                                                        }
                                                    </style>
                                                    <div class="row">
                                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                                            <br/>
                                                            <table class="table text-center table1 table-bordered text">
                                                                <thead class="text-center">
                                                                <tr>
                                                                    <th>Product Code</th>
                                                                    <th>Product Name</th>
                                                                    <th>Product Size</th>
                                                                    <th>Product Color</th>
                                                                    <th>Product Price</th>
                                                                    <th>Product Qty</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                @foreach($orderDetails->orders as $pro)
                                                                    <tr>
                                                                        <td>{{$pro->product_code}}</td>
                                                                        <td>{{$pro->product_name}}</td>
                                                                        <td>{{$pro->product_size}}</td>
                                                                        <td>{{$pro->product_color}}</td>
                                                                        <td>{{$pro->product_price}}$</td>
                                                                        <td>{{$pro->product_qty}}</td>
                                                                    </tr>
                                                                @endforeach
                                                                </tbody>
                                                            </table>
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
    <script src="{{asset('/js/frontend_js/main.js')}}"></script>

    {{--  --}}
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
@endsection
