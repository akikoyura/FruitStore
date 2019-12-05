<?php

namespace App\Http\Controllers;

use App\Category;
use App\Country;
use App\DeliveryAddress;
use App\Order;
use App\OrdersProduct;
use App\User;
use App\Product;
use App\ProductsAttribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Project;

class ProductsController extends Controller
{
    public function addProduct(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            $product = new Product();
            if (empty($data['category_id'])) {
                return redirect()->back()->with('flash_message_error', 'Under Category is missing!');
            }
            $product->category_id = $data['category_id'];
            $product->product_name = $data['product_name'];
            $product->product_code = $data['product_code'];
            $product->product_color = $data['product_color'];
            if (!empty($data['description'])) {
                $product->description = $data['description'];
            } else {
                $product->description = '';
            }
            $product->price = $data['price'];

            //Upload Image
            if ($request->hasFile('image')) {
                $image_tmp = $request->file('image');
                if ($image_tmp->isValid()) {
                    $extension = $image_tmp->getClientOriginalExtension();
                    $fileName = rand(111, 99999) . '.' . $extension;
                    $large_image_path = 'images/backend_images/products/large/' . $fileName;
                    $medium_image_path = 'images/backend_images/products/medium/' . $fileName;
                    $small_image_path = 'images/backend_images/products/small/' . $fileName;

                    //Resize images
                    Image::make($image_tmp)->resize(1200, 1200)->save($large_image_path);
                    Image::make($image_tmp)->resize(600, 600)->save($medium_image_path);
                    Image::make($image_tmp)->resize(300, 300)->save($small_image_path);
                    $product->image = $fileName;
                }
            } else {
                $product->image = '';
            }
            $product->save();
            return redirect('/admin/view-products')->with('flash_message_success', 'Product has been added successfully!');
        }
        //start dropdown
        $categories = Category::where(['parent_id' => 0])->get();
        $categories_dropdown = "<option selected disabled>Select</option>";
        foreach ($categories as $cat) {
            $categories_dropdown .= "<optgroup label='" . $cat->name . "'>";
            $categories_dropdown .= "<option value='" . $cat->id . "'>" . $cat->name . "</option>";
            $sub_categories = Category::where(['parent_id' => $cat->id])->get();
            foreach ($sub_categories as $sub_cat) {
                $categories_dropdown .= "<option value='" . $sub_cat->id . "'>" . $sub_cat->name . "</option>";
            }

            $categories_dropdown .= "</optgroup>";
        }
        //end dropdown
        return view('admin.products.add_product')->with(compact('categories_dropdown'));
    }

    public function viewProducts(Request $request)
    {
        $products = Product::get();
        $products = json_decode(json_encode($products));
        foreach ($products as $key => $val) {
            $category_name = Category::where(['id' => $val->category_id])->first();
            $products[$key]->category_name = $category_name->name;
        }
        return view('admin.products.view_products')->with(compact('products'));
        return $products;
    }

    public function editProduct(Request $request, $id = null)
    {
        $productDetails = Product::where(['id' => $id])->first();
        if ($request->isMethod('post')) {
            $data = $request->all();
            if (empty($data['description'])) {
                $data['description'] = '';
            }
            //Upload Image
            if ($request->hasFile('image')) {
                $image_tmp = $request->file('image');
                if ($image_tmp->isValid()) {
                    $extension = $image_tmp->getClientOriginalExtension();
                    $fileName = rand(111, 99999) . '.' . $extension;
                    $large_image_path = 'images/backend_images/products/large/' . $fileName;
                    $medium_image_path = 'images/backend_images/products/medium/' . $fileName;
                    $small_image_path = 'images/backend_images/products/small/' . $fileName;

                    //Resize images
                    Image::make($image_tmp)->resize(1200, 1200)->save($large_image_path);
                    Image::make($image_tmp)->resize(600, 600)->save($medium_image_path);
                    Image::make($image_tmp)->resize(300, 300)->save($small_image_path);
                }
            } else {
                $fileName = $data['current_image'];
            }

            Product::where(['id' => $id])->update(['category_id' => $data['category_id'], 'product_name' => $data['product_name'], 'product_code' => $data['product_code'], 'product_color' => $data['product_color'], 'description' => $data['description'], 'price' => $data['price'], 'image' => $fileName]);
            return redirect()->back()->with('flash_message_success', 'Product has been updated successfully!');
        }
        //start dropdown
        $categories = Category::where(['parent_id' => 0])->get();
        $categories_dropdown = "<option selected disabled>Select</option>";
        foreach ($categories as $cat) {
            if ($cat->id == $productDetails->category_id) {
                $selected = "selected";
            } else {
                $selected = "";
            }
            $categories_dropdown .= "<optgroup label='" . $cat->name . "'>";
            $categories_dropdown .= "<option value='" . $cat->id . "' " . $selected . ">" . $cat->name . "</option>";
            $sub_categories = Category::where(['parent_id' => $cat->id])->get();
            foreach ($sub_categories as $sub_cat) {
                if ($sub_cat->id == $productDetails->category_id) {
                    $selected = "selected";
                } else {
                    $selected = "";
                }
                $categories_dropdown .= "<option value='" . $sub_cat->id . "' " . $selected . ">" . $sub_cat->name . "</option>";
            }

            $categories_dropdown .= "</optgroup>";
        }
        //end dropdown
        return view('admin.products.edit_product')->with(compact('productDetails', 'categories_dropdown'));
    }

    public function deleteProduct($id = null)
    {
        Product::where(['id' => $id])->delete();
        return redirect()->back()->with('flash_message_success', 'Product has been deleted successfully!');
    }

    public function deleteProductImage($id = null)
    {
        //Get Product Image here
        $productImage = Product::where(['id' => $id])->first();

        //Get Product Image Path
        $large_image_path = 'images/backend_images/products/large';
        $medium_image_path = 'images/backend_images/products/medium';
        $small_image_path = 'images/backend_images/products/small';

        //Delete Large Image if not exist in Folder
        if (file_exists($large_image_path . $productImage->image)) {
            unlink($large_image_path . $productImage->image);
        }
        if (file_exists($medium_image_path . $productImage->image)) {
            unlink($medium_image_path . $productImage->image);
        }
        if (file_exists($small_image_path . $productImage->image)) {
            unlink($small_image_path . $productImage->image);
        }
        //Delete Image from Products table
        Product::where(['id' => $id])->update(['image' => '']);
        return redirect()->back()->with('flash_message_success', 'Product Image has been deleted successfully!');
    }

    public function addAttribute(Request $request, $id = null)
    {
        $productDetails = Product::with('attributes')->where(['id' => $id])->first();
        if ($request->isMethod('post')) {
            $data = $request->all();
            foreach ($data['sku'] as $key => $val) {
                if (!empty($val)) {
                    $attribute = new ProductsAttribute();
                    $attribute->product_id = $id;
                    $attribute->sku = $val;
                    $attribute->size = $data['size'][$key];
                    $attribute->price = $data['price'][$key];
                    $attribute->stock = $data['stock'][$key];
                    $attribute->save();
                }
            }
            return redirect('/admin/add-attributes/' . $id)->with('flash_message_success', 'Product attributes has been added successfully!');
        }
        return view("admin.products.add_attribute")->with(compact('productDetails'));
    }

    public function editAttribute(Request $request, $id = null)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            foreach ($data['idAttr'] as $key => $attr) {
                ProductsAttribute::where(['id' => $data['idAttr'][$key]])->update(['price' => $data['price'][$key], 'stock' => $data['stock'][$key]]);
            }
        }
        return redirect()->back()->with('flash_message_success', 'Products Attribute has been updated successfully!');
    }

    public function deleteAttribute($id = null)
    {
        ProductsAttribute::where(['id' => $id])->delete();
        return redirect()->back()->with('flash_message_success', 'Attribute has been deleted successfully!');
    }

    public function product($id = null)
    {
        $productDetails = Product::with('attributes')->where('id', $id)->first();
        $randomProducts = Product::all()->random(4);
        $total_stock = ProductsAttribute::where('product_id', $id)->sum('stock');
        return view('productDetail')->with(compact('productDetails', 'randomProducts', 'total_stock'));
    }

    public function getProductPrice(Request $request)
    {
        $data = $request->all();
        $proArr = explode("-", $data['idSize']);
        $proAtrr = ProductsAttribute::where(['product_id' => $proArr[0], 'size' => $proArr[1]])->first();
        echo $proAtrr->price;
        echo "#";
        echo $proAtrr->stock;
    }

    public function addtocart(Request $request)
    {
        $data = $request->all();
        if (empty(Auth::user()->email)) {
            $data['user_email'] = '';
        } else {
            $data['user_email'] = Auth::user()->email;
        }
        $session_id = Session::get('session_id');
        if (empty($session_id)) {
            $session_id = Str::random(40);
            Session::put('session_id', $session_id);
        }

        $sizeArr = explode("-", $data['size']);

        $countProducts = DB::table('cart')->where(['product_id' => $data['product_id'], 'product_color' => $data['product_color'], 'size' => $sizeArr[1], 'session_id' => $session_id])->count();
        if ($countProducts > 0) {
            return redirect()->back()->with('flash_message_error', 'Product already exists in Cart!');
        } else {
            DB::table('cart')->insert(['product_id' => $data['product_id'], 'product_name' => $data['product_name'], 'product_code' => $data['product_code'], 'product_color' => $data['product_color'], 'price' => $data['price'], 'size' => $sizeArr[1], 'quantity' => $data['quantity'], 'user_email' => $data['user_email'], 'session_id' => $session_id]);
        }
        return redirect('cart')->with('flash_message_success', 'Product has been added in Cart');
    }

    public function cart($id = null)
    {
        $randomProducts = Product::all()->random(4);
        if (Auth::check()) {
            $user_email = Auth::user()->email;
            $userCart = DB::table('cart')->where(['user_email' => $user_email])->get();
        } else {
            $session_id = Session::get('session_id');
            $userCart = DB::table('cart')->where(['session_id' => $session_id])->get();
        }
        foreach ($userCart as $key => $product) {
            $productDetails = Product::where('id', $product->product_id)->first();
            $userCart[$key]->image = $productDetails->image;
        }
        return view('cart')->with(compact('randomProducts', 'userCart'));
    }

    public function deleteCartProduct($id = null)
    {
        DB::table('cart')->where('id', $id)->delete();
        return redirect('cart')->with('flash_message_success', 'Product has been deleted from Cart!');
    }

    public function updateCartQuantity($id = null, $quantity = null)
    {
        DB::table('cart')->where('id', $id)->increment('quantity', $quantity);
        return redirect('cart')->with('flash_message_success', 'Product has been updated from Cart!');
    }

    public function checkout(Request $request)
    {
        $user_id = Auth::user()->id;
        $user_email = Auth::user()->email;
        $userDetails = User::find($user_id);
        $countries = Country::get();
        $shippingCount = DeliveryAddress::where('user_id', $user_id)->count();
        $shippingDetails = array();
        if ($shippingCount > 0) {
            $shippingDetails = DeliveryAddress::where('user_id', $user_id)->first();
        }
        //update cart table with user email
        $session_id = Session::get('session_id');
        DB::table('cart')->where(['session_id' => $session_id])->update(['user_email' => $user_email]);

        if ($request->isMethod('post')) {
            $data = $request->all();
            if (empty($data['billing_name']) || empty($data['billing_address']) || empty($data['billing_city']) || empty('billing_state') || empty('billing_country') || empty('billing_pincode') || empty('billing_mobile') || empty($data["shipping_name"]) || empty($data["shipping_address"]) || empty($data["shipping_city"]) || empty($data["shipping_state"]) || empty($data["shipping_country"]) || empty($data["shipping_pincode"]) || empty($data["shipping_mobile"])) {
                return redirect()->back()->with('flash_message_error', 'Please fill all fields to checkout!');
            }

            //Where user Details
            User::where("id", $user_id)->update(['name' => $data['billing_name'], 'address' => $data['billing_address'], 'city' => $data['billing_city'], 'state' => $data['billing_state'], 'pincode' => $data['billing_pincode'], 'country' => $data['billing_country'], 'mobile' => $data['billing_mobile']]);

            if ($shippingCount > 0) {
                //Update Shipping Address
                DeliveryAddress::where('user_id', $user_id)->update(['name' => $data['shipping_name'], 'address' => $data['shipping_address'], 'city' => $data['shipping_city'], 'state' => $data['shipping_state'], 'pincode' => $data['shipping_pincode'], 'country' => $data['shipping_country'], 'mobile' => $data['shipping_mobile']]);
            } else {
                //Add new Shipping Address
                $shipping = new DeliveryAddress();
                $shipping->user_id = $user_id;
                $shipping->user_email = $user_email;
                $shipping->name = $data['shipping_name'];
                $shipping->address = $data['shipping_address'];
                $shipping->city = $data['shipping_city'];
                $shipping->state = $data['shipping_state'];
                $shipping->pincode = $data['shipping_pincode'];
                $shipping->country = $data['shipping_country'];
                $shipping->mobile = $data['shipping_mobile'];
                $shipping->save();
            }
            return redirect()->action('ProductsController@orderReview');
        }
        return view('checkout')->with(compact('userDetails', 'countries', 'shippingDetails'));
    }

    public function orderReview()
    {
        $user_id = Auth::user()->id;
        $user_email = Auth::user()->email;
        $userDetails = User::where('id', $user_id)->first();
        $shippingDetails = DeliveryAddress::where('user_id', $user_id)->first();
        $shippingDetails = json_decode(json_encode($shippingDetails));
        $userCart = DB::table('cart')->where(['user_email' => $user_email])->get();
        foreach ($userCart as $key => $product) {
            $productDetails = Product::where('id', $product->product_id)->first();
            $userCart[$key]->image = $productDetails->image;
        }
        return view('order_review')->with(compact('userDetails', 'shippingDetails', 'userCart'));
    }

    public function placeOrder(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            $user_id = Auth::user()->id;
            $user_email = Auth::user()->email;
            //Get shipping Address of User
            $shippingDetails = DeliveryAddress::where(['user_email' => $user_email])->first();
            $order = new Order();
            $order->user_id = $user_id;
            $order->user_email = $user_email;
            $order->name = $shippingDetails->name;
            $order->address = $shippingDetails->address;
            $order->city = $shippingDetails->city;
            $order->state = $shippingDetails->state;
            $order->pincode = $shippingDetails->pincode;
            $order->country = $shippingDetails->country;
            $order->order_status = "New";
            $order->payment_method = $data['payment_method'];
            $order->mobile = $shippingDetails->mobile;
            $order->grand_total = $data['grand_total'];
            $order->save();

            $order_id = DB::getPdo()->lastInsertId();
            $cartProducts = DB::table('cart')->where(['user_email' => $user_email])->get();
            foreach ($cartProducts as $cart) {
                $cartPro = new OrdersProduct();
                $cartPro->order_id = $order_id;
                $cartPro->user_id = $user_id;
                $cartPro->product_id = $cart->product_id;
                $cartPro->product_name = $cart->product_name;
                $cartPro->product_code = $cart->product_code;
                $cartPro->product_color = $cart->product_color;
                $cartPro->product_size = $cart->size;
                $cartPro->product_price = $cart->price;
                $cartPro->product_qty = $cart->quantity;
                $cartPro->save();
            }
            Session::put('order_id', $order_id);
            Session::put('grand_total', $data['grand_total']);
            if ($data['payment_method'] == "COD") {
                //COD - Redirect user to thanks page after saving order
                /*Code for Order Email Start*/
                $productDetails = Order::with('orders')->where('id', $order_id)->first();
                $userDetails = User::where('id', $user_id)->first();
                $email = $user_email;
                $messageData = ['email' => $email,
                    'name' => $shippingDetails->name,
                    'order_id' => $order_id,
                    'productDetails'=>$productDetails,
                    'userDetails'=>$userDetails];
                Mail::send('email.email_order', $messageData, function ($message) use ($email) {
                    $message->to($email)->subject('Order Placed - E-com website');
                });
                /*Code for Order Email End*/
                return redirect('/thanks');
            } else {
                //Paypal - Redirect user to thanks page after saving order
                return redirect('/paypal');
            }
        }
    }

    public function thanks(Request $request)
    {
        $user_email = Auth::user()->email;
        DB::table('cart')->where('user_email', $user_email)->delete();
        return view('thanks');
    }

    public function userOrders()
    {
        $user_id = Auth::user()->id;
        $orders = Order::with('orders')->where('user_id', $user_id)->orderBy('id', 'DESC')->get();
        $orders = json_decode(json_encode($orders));
        return view('users_order')->with(compact('orders'));
    }

    public function userOrderDetails($order_id)
    {
        $user_id = Auth::user()->id;
        $orderDetails = Order::with('orders')->where('id', $order_id)->first();
        return view('user_order_details')->with(compact('orderDetails'));
    }

    public function paypal(Request $request)
    {
        $user_email = Auth::user()->id;
        DB::table('cart')->where('user_email', $user_email)->delete();
        return view('paypal');
    }

    public function thanksPaypal()
    {
        $user_email = Auth::user()->id;
        DB::table('cart')->where('user_email', $user_email)->delete();
        return view('thanks_paypal');
    }

}
