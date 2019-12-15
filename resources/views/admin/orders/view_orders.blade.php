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
                <h4 class="page-title">View Orders</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">View Orders</li>
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
        <div class="card">
            <div class="card-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title text-center pb-3">Orders</h3>
                                <div class="table-responsive">
                                    <table id="zero_config" class="table table-hover table-bordered text-center">
                                        {{csrf_field()}}
                                        <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Customer Name</th>
                                            <th>Customer Email</th>
                                            <th>Ordered Products</th>
                                            <th>Order Amount</th>
                                            <th>Order Status</th>
                                            <th>Payment Method</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($orders as $order)
                                            <tr>
                                                <td class="align-middle">{{$order->id}}</td>
                                                <td class="align-middle">{{$order->created_at}}</td>
                                                <td class="align-middle">{{$order->name}}</td>
                                                <td class="align-middle">{{$order->user_email}}</td>
                                                <td class="align-middle">@foreach($order->orders as $pro)
                                                                             {{$pro->product_code}}
                                                    ({{$pro->product_qty}})
                                                        <br>
                                                @endforeach
                                                </td>
                                                <td class="align-middle">{{$order->grand_total}}</td>
                                                <td class="align-middle">{{$order->order_status}}</td>
                                                <td class="align-middle">{{$order->payment_method}}</td>
                                                <td class="align-middle">
                                                    <a href="{{url('/admin/view-order/'.$order->id)}}" class="btn btn-success ">View Order Details</a>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Customer Name</th>
                                            <th>Customer Email</th>
                                            <th>Ordered Products</th>
                                            <th>Order Amount</th>
                                            <th>Order Status</th>
                                            <th>Payment Method</th>
                                            <th>Actions</th>
                                        </tr>
                                        </tfoot>
                                    </table>
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

