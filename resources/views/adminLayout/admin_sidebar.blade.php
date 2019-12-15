<!-- Left Sidebar - style you can find in sidebar.scss  -->
<!-- ============================================================== -->
<aside class="left-sidebar" data-sidebarbg="skin5">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav" class="p-t-30">
                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{url('/admin/dashboard')}}" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li>

                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu"> Categories</span></a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a href="{{url('/admin/view-category')}}" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> View Category</span></a></li>
                        <li class="sidebar-item"><a href="{{url('/admin/add-category')}}" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span class="hide-menu"> Add Category</span></a></li>
                    </ul>
                </li>

                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu"> Products</span></a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a href="{{url('/admin/view-products')}}" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> View Product</span></a></li>
                        <li class="sidebar-item"><a href="{{url('/admin/add-product')}}" class="sidebar-link"><i class="mdi mdi-note-plus"></i><span class="hide-menu"> Add Product</span></a></li>
                    </ul>
                </li>

                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Orders</span></a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a href="{{url('/admin/view-orders')}}" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> View Orders</span></a></li>
                    </ul>
                </li>
                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Users</span></a>
                    <ul aria-expanded="false" class="collapse  first-level">
                        <li class="sidebar-item"><a href="{{url('/admin/view-users')}}" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> View Users</span></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>
<!-- ============================================================== -->
<!-- End Left Sidebar - style you can find in sidebar.scss  -->
