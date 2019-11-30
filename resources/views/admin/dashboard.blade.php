@section('header')
    <link href="{{asset("libs/fullcalendar/dist/fullcalendar.min.css")}}" rel="stylesheet" />
    <link href="{{asset("extra-libs/calendar/calendar.css")}}" rel="stylesheet" />
    <link href="{{asset("css/style.min.css")}}" rel="stylesheet">
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
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    @endsection
@section('content')
    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <!-- Column -->
            <div class="col-md-6 col-lg-3">
                <div class="card card-hover">
                    <div class="box bg-cyan text-center">
                        <h1 class="font-light text-white"><i class="mdi mdi-view-dashboard"></i></h1>
                        <h6 class="text-white">Dashboard</h6>
                    </div>
                </div>
            </div>
            <!-- Column -->
            <div class="col-md-6 col-lg-3">
                <div class="card card-hover">
                    <div class="box bg-success text-center">
                        <h1 class="font-light text-white"><i class="mdi mdi-chart-areaspline"></i></h1>
                        <h6 class="text-white">Charts</h6>
                    </div>
                </div>
            </div>
            <!-- Column -->
            <div class="col-md-6 col-lg-3">
                <div class="card card-hover">
                    <div class="box bg-warning text-center">
                        <h1 class="font-light text-white"><i class="mdi mdi-collage"></i></h1>
                        <h6 class="text-white">Widgets</h6>
                    </div>
                </div>
            </div>
            <!-- Column -->
            <div class="col-md-6 col-lg-3">
                <div class="card card-hover">
                    <div class="box bg-danger text-center">
                        <h1 class="font-light text-white"><i class="mdi mdi-border-outside"></i></h1>
                        <h6 class="text-white">Tables</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Latest Posts</h4>
                    </div>
                    <div class="comment-widgets scrollable">
                        <!-- Comment Row -->
                        <div class="d-flex flex-row comment-row m-t-0">
                            <div class="p-2"><img src="{{asset("images/backend_images/users/1.jpg")}}" alt="user" width="50" class="rounded-circle"></div>
                            <div class="comment-text w-100">
                                <h6 class="font-medium">James Anderson</h6>
                                <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                <div class="comment-footer">
                                    <span class="text-muted float-right">April 14, 2016</span>
                                    <button type="button" class="btn btn-cyan btn-sm">Edit</button>
                                    <button type="button" class="btn btn-success btn-sm">Publish</button>
                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                        <!-- Comment Row -->
                        <div class="d-flex flex-row comment-row">
                            <div class="p-2"><img src="{{asset("images/backend_images/users/4.jpg")}}" alt="user" width="50" class="rounded-circle"></div>
                            <div class="comment-text active w-100">
                                <h6 class="font-medium">Michael Jorden</h6>
                                <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                <div class="comment-footer">
                                    <span class="text-muted float-right">May 10, 2016</span>
                                    <button type="button" class="btn btn-cyan btn-sm">Edit</button>
                                    <button type="button" class="btn btn-success btn-sm">Publish</button>
                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                        <!-- Comment Row -->
                        <div class="d-flex flex-row comment-row">
                            <div class="p-2"><img src="{{asset("/images/backend_images/users/5.jpg")}}" alt="user" width="50" class="rounded-circle"></div>
                            <div class="comment-text w-100">
                                <h6 class="font-medium">Johnathan Doeting</h6>
                                <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                <div class="comment-footer">
                                    <span class="text-muted float-right">August 1, 2016</span>
                                    <button type="button" class="btn btn-cyan btn-sm">Edit</button>
                                    <button type="button" class="btn btn-success btn-sm">Publish</button>
                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card -->
            </div>
            <div class="col-md-6">
                <!-- card -->
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title m-b-0">Progress Box</h4>
                        <div class="m-t-20">
                            <div class="d-flex no-block align-items-center">
                                <span>81% Clicks</span>
                                <div class="ml-auto">
                                    <span>125</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 81%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex no-block align-items-center m-t-25">
                                <span>72% Uniquie Clicks</span>
                                <div class="ml-auto">
                                    <span>120</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 72%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex no-block align-items-center m-t-25">
                                <span>53% Impressions</span>
                                <div class="ml-auto">
                                    <span>785</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 53%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex no-block align-items-center m-t-25">
                                <span>3% Online Users</span>
                                <div class="ml-auto">
                                    <span>8</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 3%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card new -->
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h5 class="card-title">Calender</h5>
                <div class="card">
                    <div class="">
                        <div class="row">
                            <div class="col-lg-3 border-right p-r-0">
                                <div class="card-body border-bottom">
                                    <h4 class="card-title m-t-10">Drag & Drop Event</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div id="calendar-events" class="">
                                                <div class="calendar-events m-b-20" data-class="bg-info"><i class="fa fa-circle text-info m-r-10"></i>Event One</div>
                                                <div class="calendar-events m-b-20" data-class="bg-success"><i class="fa fa-circle text-success m-r-10"></i> Event Two</div>
                                                <div class="calendar-events m-b-20" data-class="bg-danger"><i class="fa fa-circle text-danger m-r-10"></i>Event Three</div>
                                                <div class="calendar-events m-b-20" data-class="bg-warning"><i class="fa fa-circle text-warning m-r-10"></i>Event Four</div>
                                            </div>
                                            <!-- checkbox -->
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="drop-remove">
                                                <label class="custom-control-label" for="drop-remove">Remove after drop</label>
                                            </div>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#add-new-event" class="btn m-t-20 btn-info btn-block waves-effect waves-light">
                                                <i class="ti-plus"></i> Add New Event
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="card-body b-l calender-sidebar">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BEGIN MODAL -->
        <div class="modal none-border" id="my-event">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"><strong>Add Event</strong></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
                        <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Add Category -->
        <div class="modal fade none-border" id="add-new-event">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"><strong>Add</strong> a category</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="control-label">Category Name</label>
                                    <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                </div>
                                <div class="col-md-6">
                                    <label class="control-label">Choose Category Color</label>
                                    <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                        <option value="success">Success</option>
                                        <option value="danger">Danger</option>
                                        <option value="info">Info</option>
                                        <option value="primary">Primary</option>
                                        <option value="warning">Warning</option>
                                        <option value="inverse">Inverse</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--end-main-container-part-->
    @endsection
@section('footer')
    <script src="{{asset("libs/jquery/dist/jquery.min.js")}}"></script>
    <script src="{{asset("js/backend_js/jquery.ui.touch-punch-improved.js")}}"></script>
    <script src="{{asset("/js/backend_js/jquery-ui.min.js")}}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{asset("/libs/popper.js/dist/umd/popper.min.js")}}"></script>
    <script src="{{asset("/libs/bootstrap/dist/js/bootstrap.min.js")}}"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="{{asset("libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js")}}"></script>
    <script src="{{asset("/extra-libs/sparkline/sparkline.js")}}"></script>
    <!--Wave Effects -->
    <script src="{{asset("/js/backend_js/waves.js")}}"></script>
    <!--Menu sidebar -->
    <script src="{{asset("/js/backend_js/sidebarmenu.js")}}"></script>
    <!--Custom JavaScript -->
    <script src="{{asset("/js/backend_js/custom.min.js")}}"></script>
    <!-- this page js -->
    <script src="{{asset("/libs/moment/min/moment.min.js")}}"></script>
    <script src="{{asset("/libs/fullcalendar/dist/fullcalendar.min.js")}}"></script>
    <script src="{{asset("/js/backend_js/pages/calendar/cal-init.js")}}"></script>
    @endsection


