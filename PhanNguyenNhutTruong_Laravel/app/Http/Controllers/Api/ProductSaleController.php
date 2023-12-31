<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Models\Orderdetail;
use App\Models\ProductSale;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 
use Carbon\Carbon;

class ProductSaleController extends Controller
{

    public function index($status=null){
        if($status != null){
            $products = ProductSale::where('status','=',$status) -> orderBy('created_at','DESC') -> get();
        }
        else{
            $products = ProductSale::all();
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
    }

    /*lay bang id -> chi tiet */
    public function show($idsale){
        $product = ProductSale::where("db_productsale.id",'=',$idsale)
        ->join("db_product","db_product.id",'=','db_productsale.product_id')
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select("db_productsale.created_at","db_productsale.status","db_brand.name as brandname","db_category.name as catname","db_product.name","db_product.detail","db_product.price","db_product.image","db_productsale.date_begin","db_productsale.date_end","db_productsale.price_sale","db_productsale.qty","db_product.id","db_productsale.id as idsale")
        ->first();
        if ($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'product'=>$product],200);
    }
    

    /* them */
    public function store(Request $request){
        $sale_product = $request->product; 
        for($i = 0; $i < count($sale_product) ; $i++){
            $sale = new ProductSale();
            $sale->product_id = $sale_product[$i];
            $sale->price_sale = $request->price_sale[$i];
            $sale->qty = $request->qty[$i];
            $sale->date_begin = $request->date_begin[$i];
            $sale->date_end = $request->date_end[$i];
            $sale->created_at = date('Y-m-d H:i:s');
            $sale->created_by = 1;
            $sale->status = $request->status;
            $sale->save();
        }
        return response()->json(['success' => true, 'message' => 'Thêm thành công'],201); 
    }

    /*update*/
    public function update(Request $request,$id){

        $product = ProductSale::find($id);
        $product->date_begin = $request->date_begin; 
        $product->date_end = $request->date_end; 
        $product->price_sale = $request->price_sale; 
        $product->qty = $request->qty; 
        $product->updated_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; 
        $product->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $product],200);
    }

    /* xoa */
    public function destroy($id){
        $product = ProductSale::find($id);
        if ($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
            );
        }

        $product->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'product' => null],200);
    }





    // product sale
    public function ProductSale($limit){
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d H:i:s');
        $agr = [
            ['db_productsale.date_begin','<=', $dateTime],
            ['db_productsale.date_end','>=', $dateTime],
            ['db_productsale.status','=',1]
        ];
        $products = ProductSale::where($agr)
        ->join("db_product","db_product.id",'=','db_productsale.product_id')
        ->select("db_product.name","db_product.price","db_product.image","db_product.detail","db_productsale.price_sale","db_productsale.qty","db_product.id")
        ->limit($limit)->get();
        if(count($products) > 0){
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
        }
        else{
            return response()->json(['success'=>false,'message'=>"Tải dữ liệu khong thành công",'products'=>[]],200);

        }
    }


    //

    public function getProductSaleAll($limit,$page = 1){
        $products = ProductSale::where("db_productsale.status",'!=',0)
        ->join("db_product","db_product.id",'=','db_productsale.product_id')
        ->select("db_product.name","db_product.price","db_product.image","db_productsale.date_begin","db_productsale.date_end","db_productsale.price_sale","db_productsale.qty","db_product.id","db_productsale.id as idsale")
        ->orderBy('db_productsale.created_at','DESC')
        ->limit($limit)->get();
        $count_trash = ProductSale::where('status','=',0)->count();
        $end_page = 1;
        $count_pro = ProductSale::where('status','!=',0)->count();
        if ($count_pro > $limit) {
            $end_page = ceil($count_pro / $limit);
        }    
        $offset = ($page - 1) * $limit;
        if(count($products) > 0){
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products,'count_pro'=>$count_pro,'count_trash'=>$count_trash],200);
        }
        else{
            return response()->json(['success'=>false,'message'=>"Tải dữ liệu khong thành công",'products'=>null]);

        }
    }

    // trash
    public function trash($idsale,$id){
        $product = ProductSale::find($idsale);
        if($product == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy sản phẩm !']);
        }
        $count_orderdetail = Orderdetail::where('product_id','=',$id)->count();
        if($count_orderdetail > 0){
            return response()->json(['success' => false, 'message' =>'Sản phẩm đã bán không thể xóa !']);
        }
        $product->status = 0;
        $product->updated_at = date('Y-m-d H:i:s');
        $product->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa sản phẩm vào thùng rác !']);
    }
    
        // phuc hoi trash
        public function RecoverTrash($id){
            $product = ProductSale::find($id);
            if($product == null){
                return response()->json(['success' => false, 'message' =>'Không tìm thấy sản phẩm !']);
            }
            $product->status = 2;
            $product->updated_at = date('Y-m-d H:i:s');
            $product->save();
            return response()->json(['success' => true, 'message' =>'Đã phục hồi sản phẩm !']);
        }

    // get trash 
    public function getTrashAll(){
        $products = ProductSale::where("db_productsale.status",'=',0)
        ->join("db_product","db_product.id",'=','db_productsale.product_id')
        ->select("db_product.name","db_product.price","db_product.image","db_productsale.date_begin","db_productsale.date_end","db_productsale.price_sale","db_productsale.qty","db_product.id","db_productsale.id as idsale")
        ->get();
        // $trash = Product::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = ProductSale::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$products,'count_trash'=>$count_trash]);
    }








   

}
