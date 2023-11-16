<?php

namespace App\Http\Controllers\Api;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductSale;
use App\Models\Orderdetail;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\OrderdetailController;
use Illuminate\Http\Request;
use Carbon\Carbon;


class OrderController extends Controller
{
    public function index($page = 1){
        $limit = 8;
        $countAll = Order::where('status','!=',0)->count();
        $end_page = 1;
        if ($countAll > $limit) {
            $end_page = ceil($countAll / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $orders = Order::where('db_order.status','!=',0)
        ->join("db_user","db_user.id",'=',"db_order.user_id")
        ->select("db_order.*","db_user.name as nametk")
        ->orderBy("db_order.created_at")->offset($offset)->limit($limit)
        ->get();


        $count_trash = Order::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",
            'orders'=>$orders,'count'=>$countAll,'count_trash'=>$count_trash,'page_end'=>$end_page],200);
    }
        
    public function show($id){
        // $order = Order::find($id);
        // if ($order==null){
        //     return response()->json(
        //         ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'order' => null],404
        //     );
        // } 
        // $orderdetail = Orderdetail::where("order_id","=",$id)->get();
        $order = Order::where("db_order.id",'=',$id)
        ->join("db_user","db_user.id",'=',"db_order.user_id")
        ->select('db_user.name as nametk','db_order.*')
        ->first();
        $order_detail = Orderdetail::where("db_orderdetail.order_id",'=',$id)
        ->join('db_product','db_product.id','=',"db_orderdetail.product_id")
        ->select('db_product.name','db_product.image','db_orderdetail.*')
        ->get();
        $total = 0;
        foreach($order_detail as $r){
            $total += ($r->price * $r->qty - $r->discount);
        }
        
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'order'=>$order,'order_detail'=>$order_detail,'total'=>$total],200);
    }

    // add

    public function store(Request $request){
        $order = new Order();
        $order->user_id = $request->user_id; 
        $order->name = $request->name; 
        $order->phone = $request->phone; 
        $order->email = $request->email; 
        $order->address = $request->address; 
        $order->TrangThai = 0;
        $order->note = $request->note; 
        $order->created_at = date('Y-m-d H:i:s');
        $order->status = $request->status; 
        $order->save();

        $id_order = $order -> id;   
        $pro = count($request->product);
        $price = 0;
        for($i=0 ; $i < $pro ; $i++){
            // ktra sp co sale k
            $date = Carbon::now();
            $dateTime = $date->format('Y-m-d H:i:s');    
            $agr = [
                ['product_id','=',$request->product[$i]],
                ['db_productsale.date_begin','<=', $dateTime],
                ['db_productsale.date_end','>=', $dateTime],
                ['db_productsale.status','=',1]    
            ];
            $pro_sale = ProductSale::where($agr)->first();
            if($pro_sale != null){
                $price = $pro_sale->price_sale; 
            }
            else{
                $prod = Product::where('id','=',$request->product[$i])->first();
                $price = $prod->price;
            }
            $orderdetail = new OrderdetailController;
            $order_detail = array(
                'order_id'=>$id_order,
                'product_id'=>$request->product[$i],
                'qty'=>$request->qty[$i],
                'price'=> $price,
                'discount'=> 0,
                'amount'=> $price * $request->qty[$i]
            );
            $orderdetail->createDetail($order_detail);
        }

        return response()->json(['success' => true, 'message' => 'Xác nhận đơn hàng thành công', 'order' => $order],200); 
    }
        
    /*update*/
    public function update(Request $request,$id){
        $order = Order::find($id);
        $order->user_id = $request->user_id; 
        $order->name = $request->name; 
        $order->phone = $request->phone; 
        $order->email = $request->email; 
        $order->address = $request->address; 
        $order->note = $request->note; 
        $order->TrangThai = $request->TrangThai; 
        $order->created_at = date('Y-m-d H:i:s');
        $order->status = $request->status; 
        $order->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $order],200);
    }
        
    /* xoa */
    public function destroy($id){
        $order = Order::find($id);
        if ($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'order' => null],404
            );
        }
        $order->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'order' => null],200);
    }

    // create 
    // public function storeOrder(Request $request){
    //     $order = new Order();
    //     $order->user_id = $request->user_id; 
    //     $order->name = $request->name; 
    //     $order->phone = $request->phone; 
    //     $order->email = $request->email; 
    //     $order->address = $request->address; 
    //     $order->note = $request->note; 
    //     $order->created_at = date('Y-m-d H:i:s');
    //     $order->status = $request->status; 
    //     $order->save(); 
    //     return response()->json(['success' => true, 'message' => 'Thêm thành công', 'order' => $order],201); 
    // }

    // trash
    public function trash($id){
        $order = Order::find($id);
        if($order == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy dữ liệu !']);
        }
        $order->status = 0;
        $order->updated_at = date('Y-m-d H:i:s');
        $order->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa vào thùng rác !']);
    }
    
        // phuc hoi trash
        public function RescoverTrash($id){
            $order = Order::find($id);
            if($order == null){
                return response()->json(['success' => false, 'message' =>'Không tìm thấy dữ liệu !']);
            }
            $order->status = 2;
            $order->updated_at = date('Y-m-d H:i:s');
            $order->save();
            return response()->json(['success' => true, 'message' =>'Đã được phục hồi !']);
        }

    // get trash 
    public function getTrashAll($page = 1){
        $limit = 8;
        $countAll = Order::where('status','=',0)->count();
        $end_page = 1;
        if ($countAll > $limit) {
            $end_page = ceil($countAll / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $orders = Order::where('db_order.status','=',0)
        ->join("db_user","db_user.id",'=',"db_order.user_id")
        ->select("db_order.*","db_user.name as nametk")
        ->orderBy("db_order.created_at")->offset($offset)->limit($limit)
        ->get();
        $count_trash = Order::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$orders,'count_trash'=>$count_trash,'end_page'=>$end_page]);
    }

}
