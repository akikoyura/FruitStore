{{--@section('header')--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/bootstrap.min.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/bootstrap-responsive.min.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/uniform.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/select2.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/matrix-style.css')}}" />--}}
{{--    <link rel="stylesheet" href="{{asset('css/backend_css/matrix-media.css')}}" />--}}
{{--    <link href="{{asset('font/backend_font/css/font-awesome.css')}}" rel="stylesheet" />--}}
{{--    @endsection()--}}
{{--@extends('adminLayout.admin_design')--}}
{{--@section('content')--}}
{{--    <style  type="text/css">--}}

{{--        .btn{--}}
{{--            font-size: 16px;--}}
{{--        }--}}
{{--        .widget-title h5{--}}
{{--            font-size: 15px;--}}
{{--        }--}}
{{--        #breadcrumb a{--}}
{{--            font-size: 14px;--}}
{{--        }--}}
{{--        #user-nav > ul > li > a{--}}
{{--            font-size: 14px;--}}
{{--        }--}}
{{--        label, input, button, select, textarea{--}}
{{--            font-size: 15px;--}}
{{--        }--}}
{{--        .select2-container{--}}
{{--            width: 57%;--}}
{{--        }--}}
{{--    </style>--}}
{{--    <div id="content">--}}
{{--        <div id="content-header">--}}
{{--            <div id="breadcrumb"> <a href="index.html" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#">Categories</a> <a href="#" class="current">Edit Category</a> </div>--}}
{{--            <h1>Edit Categories</h1>--}}
{{--        </div>--}}
{{--        <div class="container-fluid"><hr>--}}
{{--            <div class="row-fluid">--}}
{{--                <div class="span12">--}}
{{--                    <div class="widget-box">--}}
{{--                        <div class="widget-title"> <span class="icon"> <i class="icon-info-sign"></i> </span>--}}
{{--                            <h5>Edit Category</h5>--}}
{{--                        </div>--}}
{{--                        <div class="widget-content nopadding">--}}
{{--                            <form class="form-horizontal" method="post" action="{{url('/admin/edit-category/'.$categoryDetails->id)}}" name="edit_category" id="edit_category" novalidate="novalidate">--}}
{{--                                {{csrf_field()}}--}}
{{--                                <div class="control-group">--}}
{{--                                    <label class="control-label" for="category_name">Category Name</label>--}}
{{--                                    <div class="controls">--}}
{{--                                        <input type="text"  class="input-large span7" name="category_name" id="category_name" value="{{$categoryDetails->name}}">--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="control-group">--}}
{{--                                    <label class="control-label" for="category_name">Category Level</label>--}}
{{--                                    <div class="controls">--}}
{{--                                        <select name="parent_id" id="">--}}
{{--                                            <option value="0">Main Category</option>--}}
{{--                                            @foreach($levels as $val)--}}
{{--                                                <option value="{{$val->id}}" @if($val->id== $categoryDetails->parent_id) selected  @endif>{{$val->name}}</option>--}}
{{--                                                @endforeach--}}
{{--                                        </select>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="control-group">--}}
{{--                                    <label class="control-label">Description</label>--}}
{{--                                    <div class="controls">--}}
{{--                                        <textarea name="description" id="description" class="span7" cols="30" rows="10" >{{$categoryDetails->description}}</textarea>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="control-group">--}}
{{--                                    <label class="control-label">URL (Start with http://)</label>--}}
{{--                                    <div class="controls">--}}
{{--                                        <input type="text" class="input-large span7"  name="url" id="url" value="{{$categoryDetails->url}}">--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="form-actions">--}}
{{--                                    <input type="submit" value="Submit" class="btn btn-success">--}}
{{--                                </div>--}}
{{--                            </form>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--@endsection--}}

{{--@section('footer')--}}
{{--    <script src="{{asset('js/backend_js/jquery.min.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/jquery.ui.custom.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/bootstrap.min.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/jquery.uniform.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/select2.min.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/jquery.validate.js')}}"></script>--}}
{{--    <script src="{{asset('js/backend_js/matrix.js')}}"></script>--}}
{{--    <script src="{{asset('custom_form_vacustom_form_validation.js>--}}
{{--    @endsection()--}}

@section('header')
    <link rel="stylesheet" href="{{asset('libs/select2/dist/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/jquery-minicolors/jquery.minicolors.css')}}">
    <link rel="stylesheet" href="{{asset('libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/quill/dist/quill.snow.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.min.css')}}">
    <script src="{{asset('/libs/jquery/dist/jquery.min.js')}}"></script>
    <style type="text/css">
        .help-inline {
            margin-top: 5px;
            color: red;
        }
    </style>
@endsection
@section('breadcrumb')
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Category</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Category</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('content')
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <form class="form-horizontal" method="post"
                                  action="{{url('/admin/edit-category/'.$categoryDetails->id)}}" name="edit_category"
                                  id="edit_category" novalidate="novalidate">
                                {{csrf_field()}}
                                <div class="card-body">
                                    <h4 class="card-title text-center mb-4">Edit Category</h4>
                                    <div class="form-group row">
                                        <label for="category_name"
                                               class="col-sm-2 text-center control-label col-form-label">Category
                                            Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="category_name"
                                                   value="{{$categoryDetails->name}}" name="category_name" required>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 text-center control-label col-form-label"
                                               for="parent_id">Category Level</label>
                                        <div class="col-md-10">
                                            <select class="select2 form-control custom-select" name="parent_id"
                                                    style="width: 100%; height:36px;">
                                                <option value="0">Main Category</option>
                                                @foreach($levels as $val)
                                                    <option value="{{$val->id}}"
                                                            @if ($val->id==$categoryDetails->parent_id) selected @endif>{{$val->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="description"
                                               class="col-sm-2 text-center control-label col-form-label">Description</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" cols="20" rows="10" name="description"
                                                      id="description"
                                                      required>{{$categoryDetails->description}}</textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="url"
                                               class="col-sm-2 text-center control-label col-form-label">URL</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="url" name="url"
                                                   placeholder="URL Here" required value="{{$categoryDetails->url}}">
                                        </div>
                                    </div>
                                </div>
                                <div class="border-top">
                                    <div class="card-body text-center">
                                        <button type="submit" class="btn btn-primary">Edit Category</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@extends('adminLayout.admin_design')


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
        $('.demo').each(function () {
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

                change: function (value, opacity) {
                    if (!value) return;
                    if (opacity) value += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(value);
                    }
                },
                theme: 'bootstrap'
            });

        });
    </script>
@endsection
