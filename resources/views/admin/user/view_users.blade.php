
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
                <h4 class="page-title">View Users</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{url('/admin/dashboard')}}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">View Users</li>
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
                                <h3 class="card-title text-center pb-3">Users</h3>
                                <div class="table-responsive">
                                    <table id="zero_config" class="table table-hover table-bordered text-center">
                                        {{csrf_field()}}
                                        <thead>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                            <th>Pincode</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Registered on</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($users as $user)
                                            <tr>
                                                <td class="align-middle">{{ $user->id}}</td>
                                                <td class="align-middle">{{ $user->name}}</td>
                                                <td class="align-middle">{{ $user->address }}</td>
                                                <td class="align-middle">{{ $user->city}}</td>
                                                <td class="align-middle">{{ $user->state }}</td>
                                                <td class="align-middle">{{ $user->country}}</td>
                                                <td class="align-middle">{{ $user->pincode}}</td>
                                                <td class="align-middle">{{ $user->mobile}}</td>
                                                <td class="align-middle">{{ $user->email}}</td>
                                                <td class="align-middle">
                                                    @if ($user->status==1)
                                                        <span class="text-success">Active</span>
                                                    @else
                                                        <span class="text-danger">Inactive</span>
                                                    @endif
                                                    </td>
                                                <td class="align-middle">{{ $user->created_at}}</td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                            <th>Pincode</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Registered on</th>
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

