<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <title>Matrix Admin</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
        <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset("./images/backend_images/favicon.png")}}">
    @yield('header')
    <title>Ecommerce Admin</title>
</head>
<body>
<!-- ============================================================== -->
<!-- Preloader - style you can find in spinners.css -->
<!-- ============================================================== -->
<div class="preloader">
    <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
    </div>
</div>
<!-- ============================================================== -->
<!-- Main wrapper - style you can find in pages.scss -->
<!-- ============================================================== -->
<div id="main-wrapper">
    @include('adminLayout.admin_header')
    @include('adminLayout.admin_sidebar')
    <div class="page-wrapper">
        <!-- Bread crumb and right sidebar toggle-->
        @yield('breadcrumb')

        <!-- End Bread crumb and right sidebar toggle -->

        <!-- Container fluid-->
        @yield('content')
        <!-- End Container-->
        <!--Footer-->
        @include('adminLayout.admin_footer')
        <!--End Footer-->
    </div>
</div>
@yield('footer')
</body>
</html>
