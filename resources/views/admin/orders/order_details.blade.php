@section('header')
    <link rel="stylesheet" type="text/css" href="{{asset('extra-libs/multicheck/multicheck.css')}}">
    <link href="{{asset('libs/datatables.net-bs4/css/dataTables.bootstrap4.css')}}" rel="stylesheet">
    <link href="{{asset('css/style.min.css')}}" rel="stylesheet">
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
                <h4 class="page-title">Order #{{$orderDetails->id}}</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">View Order</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('content')
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
    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title m-b-0">Order Details</h5>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>Order Date</td>
                            <td class="text-success">{{$orderDetails->created_at}}</td>
                        </tr>
                        <tr>
                            <td>Order Status</td>
                            <td class="text-success">{{$orderDetails->order_status}}</td>
                        </tr>
                        <tr>
                            <td>Order Total</td>
                            <td class="text-success">{{$orderDetails->grand_total}}$</td>
                        </tr>
                        <tr>
                            <td>Shipping Charges</td>
                            <td class="text-success">{{$orderDetails->shipping_charges}}</td>
                        </tr>
                        <tr>
                            <td>Payment Method</td>
                            <td class="text-success">{{$orderDetails->payment_method}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!-- accoridan part -->
                <div class="accordion" id="accordionExample">
                    <div class="card m-b-0">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                   aria-controls="collapseOne">
                                    <i class="m-r-5 far fa-money-bill-alt" aria-hidden="true"></i>
                                    <span>Billing Address</span>
                                </a>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordionExample">
                            <div class="card-body">
                                <table class="table table-borderless">
                                    <tr>
                                        <td>Name</td>
                                        <td>{{$userDetails->name}}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{{$userDetails->address}}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{{$userDetails->city}}</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>{{$userDetails->state}}</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>{{$userDetails->country}}</td>
                                    </tr>
                                    <tr>
                                        <td>Pincode</td>
                                        <td>{{$userDetails->pincode}}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile</td>
                                        <td>{{$userDetails->mobile}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- toggle part -->
                <!-- card new -->
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title m-b-0">Customer Details</h5>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>Customer Name</td>
                            <td class="text-success">{{$orderDetails->name}}</td>

                        </tr>
                        <tr>
                            <td>Customer Email</td>
                            <td class="text-success">{{$orderDetails->user_email}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!-- card new -->
                <!-- card -->
                <div class="accordion" id="accordionExample1">
                    <div class="card m-b-0">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true"
                                   aria-controls="collapseOne1">
                                    <i class="m-r-5 fas fa-eraser" aria-hidden="true"></i>
                                    <span>Update Order Status</span>
                                </a>
                            </h5>
                        </div>
                        <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordionExample1">
                            <div class="card-body">
                                <form action="{{url('admin/update-order-status')}}" method="post">
                                    {{csrf_field()}}
                                    <table class="table table-borderless">
                                        <input type="hidden" name="order_id" value="{{$orderDetails->id}}">
                                        <tr>
                                            <td>
                                                <select class="select2 form-control custom-select" name="order_status" id="order_status">
                                                    <option value="New" @if ($orderDetails->order_status=="New")selected @endif>New</option>
                                                    <option value="Pending" @if ($orderDetails->order_status=="Pending")selected @endif >Pending</option>
                                                    <option value="Cancelled" @if ($orderDetails->order_status=="Cancelled")selected @endif >Cancelled</option>
                                                    <option value="In Process" @if ($orderDetails->order_status=="In Process")selected @endif >In Process</option>
                                                    <option value="Shipped" @if ($orderDetails->order_status=="Shipped")selected @endif >Shipped</option>
                                                    <option value="Delivered" @if ($orderDetails->order_status=="Delivered")selected @endif >Delivered</option>
                                                    <option value="Pai" @if ($orderDetails->order_status=="Paid")selected @endif >Paid</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input class="btn btn-success" type="submit" value="Update Status">
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="accordion" id="accordionExample2">
                    <div class="card m-b-0">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true"
                                   aria-controls="collapseOne2">
                                    <i class="m-r-5 fas fa-shipping-fast" aria-hidden="true"></i>
                                    <span>Shipping Address</span>
                                </a>
                            </h5>
                        </div>
                        <div id="collapseOne2" class="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordionExample2">
                            <div class="card-body">
                                <table class="table table-borderless">
                                    <tr>
                                        <td>Name</td>
                                        <td>{{$orderDetails->name}}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{{$orderDetails->address}}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{{$orderDetails->city}}</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>{{$orderDetails->state}}</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>{{$orderDetails->country}}</td>
                                    </tr>
                                    <tr>
                                        <td>Pincode</td>
                                        <td>{{$orderDetails->pincode}}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile</td>
                                        <td>{{$orderDetails->mobile}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- toggle part -->
            </div>
        </div>

    </div>
    <!-- row -->
    <!-- ============================================================== -->
    <!-- End PAge Content -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Right sidebar -->
    <!-- ============================================================== -->
    <!-- .right-sidebar -->
    <!-- ============================================================== -->
    <!-- End Right sidebar -->
    <!-- ============================================================== -->
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table text-center table-bordered ">
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

@endsection

@extends('adminLayout.admin_design')


@section('footer')
    <script src="{{asset('/libs/jquery-validation/dist/jquery.validate.min.js')}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset('libs/popper.js/dist/umd/popper.min.js')}}"></script>
    <script src="{{asset('libs/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset('libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js')}}"></script>
    <script src="{{asset('extra-libs/sparkline/sparkline.js')}}"></script>
    <!--Wave Effects -->
    <script src="{{asset('js/backend_js/waves.js')}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset('js/backend_js/sidebarmenu.js')}} "></script>
    <!--Custom JavaScript -->
    <script src="{{asset('js/backend_js/custom.min.js')}}"></script>
    <!-- this page js -->
    <script src="{{asset('extra-libs/multicheck/datatable-checkbox-init.js')}}"></script>
    <script src="{{asset('extra-libs/multicheck/jquery.multicheck.js')}}"></script>
    <script src="{{asset('extra-libs/DataTables/datatables.min.js')}}"></script>
    <script src="{{asset('js/frontend_js/custom_form_validation.js')}}"></script>
    <script>
        /****************************************
         *       Basic Table                   *
         ****************************************/
        $('#zero_config').DataTable();
    </script>
    <script src="{{asset('js/frontend_js/sweetalert2.all.min.js')}}"></script>
@endsection
