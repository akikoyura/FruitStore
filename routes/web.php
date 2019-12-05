<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');
Route::get('/gallery', 'GalleryController@gallery');
Route::get('/showVegetables', 'GalleryController@showVegetables');
Route::get('/showFruits', 'GalleryController@showFruits');
Route::get('/showDrieds', 'GalleryController@showDried');
Route::match(['get', 'post'], '/admin', 'AdminController@login');

//Product Detail page
Route::get('product/{id}','ProductsController@product');

//Get Product Attribute price
Route::get('/get-product-price','ProductsController@getProductPrice');

//Add to Cart Route
Route::match(['get', 'post'], '/add-cart', 'ProductsController@addtocart');

//Cart Page
Route::match(['get', 'post'], '/cart','ProductsController@cart');

//Delete Product from Cart Page
Route::get('/cart/delete-product/{id}','ProductsController@deleteCartProduct');

Route::get('/cart/update-quantity/{id}/{quantity}', 'ProductsController@updateCartQuantity');

// Users Login/Register page
Route::get('/login-register','UsersController@userLoginRegister');

Route::match(['get','post'],'/login-register','UsersController@register');

//Users Register Form submit
Route::post('/user-register','UsersController@register');

//Check if User already exists
Route::match(['get', 'post'], '/check-email','UsersController@checkEmail');

Route::get('/user-logout','UsersController@logout');
Route::post('/user-login','UsersController@login');

//All Routes after login
Route::group(['middleware'=>['frontlogin']],function (){
    Route::match(['get', 'post'], '/account', 'UsersController@account');
    Route::post('/check-user-pwd','UsersController@chkUserPassword');
    Route::post('/update-user-pwd','UsersController@updatePassword');
    Route::match(['get', 'post'], 'checkout','ProductsController@checkout');
    //Order Review Page
    Route::match(['get', 'post'], '/order-review','ProductsController@orderReview');
    //Place Order
    Route::match(['get', 'post'], '/place-order','ProductsController@placeOrder');
    //Paypal page
    Route::get('/paypal','ProductsController@paypal');
    //Thanks Page
    Route::get('/thanks','ProductsController@thanks');
    //User Orders Page
    Route::get('/orders','ProductsController@userOrders');
    //User Ordered Products Page
    Route::get('/orders/{id}','ProductsController@userOrderDetails');
    //Paypal Thanks page
    Route::get('/paypal/thanks','ProductsController@thanksPaypal');
});
//Confirm Account
Route::get('confirm/{code}','UsersController@confirmAccount');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/admin/dashboard', 'AdminController@dashboard');
    Route::get('/admin/settings', 'AdminController@settings');
    Route::get('/admin/check-pwd', 'AdminController@chkPassword');
    Route::match(['get', 'post'], '/admin/update-pwd', 'AdminController@updatePassword');

//Categories Routes (Admin)
    Route::match(['get', 'post'], '/admin/add-category', 'CategoryController@addCategory');
    Route::match(['get', 'post'], '/admin/edit-category/{id}', 'CategoryController@editCategory');
    Route::match(['get', 'post'], '/admin/delete-category/{id}', 'CategoryController@deleteCategory');
    Route::get('/admin/view-category', 'CategoryController@viewCategories');

//Products Routes (Admin)
    Route::match(['get', 'post'], '/admin/add-product', 'ProductsController@addProduct');
    Route::get('/admin/view-products', 'ProductsController@viewProducts');
    Route::match(['get', 'post'], '/admin/edit-product/{id}', 'ProductsController@editProduct');
    Route::get('/admin/delete-product-image/{id}', 'ProductsController@deleteProductImage');

    Route::get('/admin/delete-product/{id}', 'ProductsController@deleteProduct');

    Route::match(['get', 'post'], '/admin/add-attributes/{id}', 'ProductsController@addAttribute');
    Route::match(['get', 'post'], '/admin/edit-attributes/{id}', 'ProductsController@editAttribute');
    Route::get('/admin/delete-attribute/{id}', 'ProductsController@deleteAttribute');
    Route::get('/logout', 'AdminController@logout');
});

