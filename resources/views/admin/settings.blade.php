@section('header')
    <link rel="stylesheet" href="{{asset('libs/select2/dist/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/jquery-minicolors/jquery.minicolors.css')}}">
    <link rel="stylesheet" href="{{asset('libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/quill/dist/quill.snow.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.min.css')}}">
    <script src="{{asset('/libs/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
    <style type="text/css">
        .help-inline{
            color: red;
        }
    </style>
    @endsection
@extends('adminLayout.admin_design')
@section('breadcrumb')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Dashboard</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Settings</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    @endsection
@section('content')
    @if(Session::has('flash_message_success'))
        <script>
            $.notify({
                message: "<strong >{!!session('flash_message_success')!!}</strong>"
            },{
                type: 'success',
                placement: {
                    from: "top",
                    align: "center"
                },
            });
        </script>
    @endif
    <div class="container-fluid ">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <form class="form-horizontal" method="post" action="{{url('/admin/update-pwd')}}" name="password_validate" id="password_validate" >
                        {{csrf_field()}}
                        <div class="card-body">
                            <h4 class="card-title text-center">Update Password</h4>
                            <div class="form-group row">
                                <label for="current_pwd" class="col-sm-3 text-right control-label col-form-label">Current Password</label>
                                <div class="col-sm-9">
                                    <input type="password" name="current_pwd" id="current_pwd" class="form-control" placeholder="Your Current Password" min="8" required/> <span id="chkPwd"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="new_pwd" class="col-sm-3 text-right control-label col-form-label">New Password</label>
                                <div class="col-sm-9">
                                    <input type="password" name="new_pwd" class="form-control" id="new_pwd" placeholder="Your new Password" min="8" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="confirm_pwd" class="col-sm-3 text-right control-label col-form-label ">New Confirm Password</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" name="confirm_pwd" id="confirm_pwd" min="8" placeholder="Retype your Password"  required>
                                    <span id="chkMatch"></span>
                                </div>
                            </div>
                        <div class="border-top">
                            <div class="card-body">
                                <button type="submit" id="btnSubmit" disabled class="btn btn-primary" value="">Update Password</button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @endsection
@section('footer')
    <script src="{{asset('/libs/jquery-validation/dist/jquery.validate.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('/libs/popper.js/dist/umd/popper.min.js')}}"></script>
    <script src="{{asset('/libs/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset('/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js')}}"></script>
    <script src="{{asset('/extra-libs/sparkline/sparkline.js')}}"></script>
    <!--Wave Effects -->
    <script src="{{asset('/js/backend_js/waves.js')}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset('/js/backend_js/sidebarmenu.js')}}"></script>
    <!--Custom JavaScript -->
    <script src="{{asset('/css/backend_css/js/custom.min.js')}}"></script>
    <!-- This Page JS -->
    <script src="{{asset('/libs/inputmask/dist/min/jquery.inputmask.bundle.min.js')}}"></script>
    <script src="{{asset('/css/backend_css/js/pages/mask/mask.init.js')}}"></script>
    <script src="{{asset('/libs/select2/dist/js/select2.full.min.js')}}"></script>
    <script src="{{asset('/libs/select2/dist/js/select2.min.js')}}"></script>
    <script src="{{asset('/libs/jquery-asColor/dist/jquery-asColor.min.js')}}"></script>
    <script src="{{asset('/libs/jquery-asGradient/dist/jquery-asGradient.js')}}"></script>
    <script src="{{asset('/libs/jquery-asColorPicker/dist/jquery-asColorPicker.min.js')}}"></script>
    <script src="{{asset('/libs/jquery-minicolors/jquery.minicolors.min.js')}}"></script>
    <script src="{{asset('/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js ')}}"></script>
    <script src="{{asset('/libs/quill/dist/quill.min.js')}}"></script>
    <script src="{{asset('js/frontend_js/custom_form_validation.js')}}"></script>
    <script>
        //***********************************//
        // For select 2
        //***********************************//
        $(".select2").select2();

        /*colorpicker*/
        $('.demo').each(function() {
            //
            // Dear reader, it's actually very easy to initialize MiniColors. For example:
            //
            //  $(selector).minicolors();
            //
            // The way I've done it below is just for the demo, so don't get confused
            // by it. Also, data- attributes aren't supported at this time...they're
            // only used for this demo.
            //
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                position: $(this).attr('data-position') || 'bottom left',

                change: function(value, opacity) {
                    if (!value) return;
                    if (opacity) value += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(value);
                    }
                },
                theme: 'bootstrap'
            });

        });
        /*datwpicker*/
        // jQuery('.mydatepicker').datepicker();
        // jQuery('#datepicker-autoclose').datepicker({
        //     autoclose: true,
        //     todayHighlight: true
        // });
        // var quill = new Quill('#editor', {
        //     theme: 'snow'
        // });
    </script>
    @endsection
