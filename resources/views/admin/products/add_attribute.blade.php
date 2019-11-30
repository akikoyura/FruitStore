@section('header')
    <link rel="stylesheet" href="{{asset('libs/select2/dist/css/select2.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('extra-libs/multicheck/multicheck.css')}}">
    <link href="{{asset('libs/datatables.net-bs4/css/dataTables.bootstrap4.css')}}" rel="stylesheet">
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
                <h4 class="page-title">Add Attribute</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Add Attribute</li>
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
                                  action="{{url('/admin/add-attributes/'.$productDetails->id)}}" name="add_attribute"
                                  id="add_attribute"
                            >
                                {{csrf_field()}}
                                <div class="card-body">
                                    <h3 class="card-title text-center mb-4">Add Attribute</h3>
                                    <input type="hidden" name="product_id" value="{{$productDetails->id}}">
                                    <div class="form-group row">
                                        <label for="product_name"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Name</label>
                                        <div class="col-sm-10">
                                            <label for="product_name"
                                                   class="col-sm-2 text-center control-label col-form-label">{{$productDetails->product_name}}</label>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="product_code"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Code</label>
                                        <div class="col-sm-10">
                                            <label
                                                class="col-sm-2 text-center control-label col-form-label">
                                                {{$productDetails->product_code}}
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="product_color"
                                               class="col-sm-2 text-center control-label col-form-label">Product
                                            Color</label>
                                        <div class="col-sm-10">
                                            <label for="product_color"
                                                   class="col-sm-2 text-center control-label col-form-label">{{$productDetails->product_color}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for=""
                                               class="col-sm-2 text-center control-label col-form-label"></label>
                                        <div class="col-sm-10">
                                            <div class="field_wrapper">
                                                <div class="row d-flex justify-content-center"
                                                     style="padding-right: 5px;">
                                                    <input type="text" name="sku[]" placeholder="SKU" id="sku"
                                                           style="width: 150px;" required class="form-control"/>
                                                    <input type="text" name="size[]" id="size" placeholder="Size"
                                                           style="width: 150px;" required class="form-control">
                                                    <input type="text" name="price[]" id="price" placeholder="Price"
                                                           style="width: 150px;" required class="form-control">
                                                    <input type="text" name="stock[]" id="stock" placeholder="Stock"
                                                           style="width: 150px;" required class="form-control">
                                                    <a href="javascript:void(0);" class="add_button ml-4"
                                                       title="Add field">Add&nbsp;&nbsp;&nbsp;</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-top">
                                        <div class="card-body text-center">
                                            <button type="submit" class="btn btn-primary">Add Attribute</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title text-center pb-3">View Attributes</h3>
                                <div class="table-responsive">
                                    <form action="{{url('/admin/edit-attributes/'.$productDetails->id)}}" method="post">
                                        <table id="zero_config" class="table table-hover table-bordered text-center">
                                            {{csrf_field()}}
                                            <thead>
                                            <tr>
                                                <th>Attribute ID</th>
                                                <th>SKU</th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($productDetails['attributes'] as $attribute)
                                                <tr>
                                                    <input type="hidden" name="idAttr[]"
                                                               value="{{$attribute->id}}">{{$attribute->id}}
                                                    <td class="align-middle">{{$attribute->id}}</td>
                                                    <td class="align-middle">{{$attribute->sku}}</td>
                                                    <td class="align-middle">{{$attribute->size}}</td>
                                                    <td class="align-middle">
                                                        <input class="text-center" type="text" name="price[]" value="{{$attribute->price}}"
                                                               id="">
                                                    </td>
                                                    <td class="align-middle">
                                                        <input class="text-center" type="text" name="stock[]" value="{{$attribute->stock}}" id="">
                                                    </td>
                                                    <td class="align-middle">
                                                        <!-- Sweet Alert Section -->
                                                        <input type="submit" value="Update" class="btn btn-success">
                                                        <a rel="{{$attribute->id}}" rel1="delete-attribute"
                                                           href="javascript:"
                                                           class="btn btn-danger deleteRecord">Delete</a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th>Attribute ID</th>
                                                <th>SKU</th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Actions</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </form>
                                </div>
                            </div>
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

    <script src="{{asset('extra-libs/multicheck/datatable-checkbox-init.js')}}"></script>
    <script src="{{asset('extra-libs/multicheck/jquery.multicheck.js')}}"></script>
    <script src="{{asset('extra-libs/DataTables/datatables.min.js')}}"></script>
    <script src="{{asset('js/frontend_js/sweetalert2.all.min.js')}}"></script>
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
        /****************************************
         *       Basic Table                   *
         ****************************************/
        $('#zero_config').DataTable();
    </script>
@endsection
