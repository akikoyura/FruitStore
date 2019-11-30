@section('header')
    <link rel="stylesheet" href="{{asset('libs/select2/dist/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/jquery-minicolors/jquery.minicolors.css')}}">
    <link rel="stylesheet" href="{{asset('libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <link rel="stylesheet" href="{{asset('libs/quill/dist/quill.snow.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.min.css')}}">
    <script src="{{asset('/libs/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{asset('css/backend_css/bootstrap-notify.js')}}"></script>
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
                <h4 class="page-title">Edit Product</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Product</li>
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
            }, {
                type: 'success',
                placement: {
                    from: "top",
                    align: "center"
                },
            });
        </script>
    @endif
    @if(Session::has('flash_message_error'))
        <script>
            $.notify({
                message: "<strong >{!!session('flash_message_error')!!}</strong>"
            }, {
                type: 'danger',
                placement: {
                    from: "top",
                    align: "center"
                },
            });
        </script>
    @endif
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <form enctype="multipart/form-data" class="form-horizontal" method="post"
                                  action="{{url('/admin/edit-product/'.$productDetails->id)}}" name="edit_product"
                                  id="edit_product"
                                  novalidate="novalidate">
                                {{csrf_field()}}
                                <div class="card-body">
                                    <h4 class="card-title text-center mb-4">Edit Product</h4>
                                    <div class="form-group row">
                                        <label class="col-sm-2 text-center control-label col-form-label"
                                               for="category_id">Under Category</label>
                                        <div class="col-md-10">
                                            <select class="select2 form-control custom-select" name="category_id"
                                                    style="width: 100%; height:36px;" id="category_id">
                                                <?php echo $categories_dropdown;?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="product_name"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="product_name"
                                                   placeholder="Product Name" name="product_name"
                                                   value="{{$productDetails->product_name}}" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="product_code"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Code</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="product_code"
                                                   placeholder="Product Code" name="product_code"
                                                   value="{{$productDetails->product_code}}" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="product_color"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Color</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="product_color"
                                                   placeholder="Product Color" name="product_color"
                                                   value="{{$productDetails->product_color}}" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="description"
                                               class="col-sm-2 text-center control-label col-form-label">Description</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" cols="20" rows="10" name="description"
                                                      id="description">{{$productDetails->description}}</textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="price" class="col-sm-2 text-center control-label col-form-label">Price</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="price" name="price"
                                                   placeholder="Price Here" value="{{$productDetails->price}}" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="image" class="col-sm-2 text-center control-label col-form-label">Image</label>
                                        <div class="col-sm-10 align-middle">
                                            <div class="row d-flex align-middle">
                                                @if(!empty($productDetails->image))
                                                    <div class="col-sm-6">
                                                        <img
                                                            src="{{asset('/images/backend_images/products/small/'.$productDetails->image)}}"
                                                            class="img-thumbnail mr-4" width="50px" height="50px"
                                                            alt="">
                                                        <a href="{{url('/admin/delete-product-image/'.$productDetails->id)}}"
                                                           class="btn btn-success">Delete</a>
                                                    </div>
                                                    <div class="col-sm-6 mt-2">
                                                        <div class="custom-file ">
                                                            <input type="file" class="custom-file-input"
                                                                   id="validatedCustomFile"
                                                                   name="image">
                                                            <input type="hidden" name="current_image"
                                                                   value="{{$productDetails->image}}">
                                                            <label class="custom-file-label" for="validatedCustomFile">Choose
                                                                file...</label>
                                                            <div class="invalid-feedback">Example invalid custom file
                                                                feedback
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endif
                                                @if(empty($productDetails->image))
                                                    <div class="custom-file">

                                                        <input type="file" class="custom-file-input"
                                                               id="validatedCustomFile"
                                                               name="image">
                                                        <input type="hidden" name="current_image"
                                                               value="{{$productDetails->image}}">
                                                        <label class="custom-file-label" for="validatedCustomFile">Choose
                                                            file...</label>
                                                        <div class="invalid-feedback">Example invalid custom file
                                                            feedback
                                                        </div>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-top">
                                    <div class="card-body text-center">
                                        <button type="submit" class="btn btn-primary">Edit Product</button>
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
