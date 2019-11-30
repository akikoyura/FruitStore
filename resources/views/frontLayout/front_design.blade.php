<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        #loading {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100vw;
            height: 100vh;
            background-color: rgba(192, 192, 192, 0.5);
            background-image: url({{asset('/images/frontend_images/Preloader_3.gif')}});
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
    @yield('header')
</head>
<body class="woocommerce vc_responsive woocommerce-cart wpb-js-composer woocommerce-checkout page-checkout">
<div id="loading"></div>

@include('frontLayout.front_header')
@yield('content')
@include('frontLayout.front_footer')
<script type="text/javascript">
    $(window).load(function () {
        $('#loading').hide();
    });
</script>
@yield('footer')
</body>

</html>
