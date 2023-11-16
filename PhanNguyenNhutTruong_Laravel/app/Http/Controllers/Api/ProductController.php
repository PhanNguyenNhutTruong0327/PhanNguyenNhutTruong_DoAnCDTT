<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Models\Category;
use App\Models\Orderdetail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index($limit,$page = 1){
            $count_all = Product::count();
            $count_trash = Product::where('status','=',0)->count();

            $end_page = 1;
            if ($count_all > $limit) {
                $end_page = ceil($count_all / $limit);
            }    
            $offset = ($page - 1) * $limit;

            $products = Product::where('db_product.status','!=',0)
            ->join('db_category',"db_category.id",'=',"db_product.category_id")
            ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
            ->select("db_product.qty","db_product.id","db_product.name", "db_product.image", "db_product.slug", "db_product.status", "db_product.price", "db_category.name as categoryname", "db_brand.name as brandname")->orderBy("db_product.created_at",'DESC')
            ->offset($offset)->limit($limit)->get();
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products,'count_all'=>$count_all,'count_trash'=>$count_trash,'end_page'=>$end_page],200);
        }
        
    /*lay bang id -> chi tiet */
    public function show($id){
        // $product = Product::find($id);
        // if ($product==null){
        //     return response()->json(
        //         ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
        //     );
        // }
        // return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'product'=>$product],200);
        $product = Product::where('db_product.id','=',$id)
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select("db_product.*", "db_category.name as categoryname", "db_brand.name as brandname")->first();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'product'=>$product],200);

    }
    

    /* them */
    public function store(Request $request){
        $product = new Product();
        $product->category_id = $request->category_id; 
        $product->brand_id = $request->brand_id;  
        $product->name = $request->name; 
        $product->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $product->slug . '.' . $extension;
                 $product->image = $filename;
                 $files->move(public_path('images/product'), $filename);
             }
         }
        $product->price = $request->price; 
        // $product->price_sale = $request->price_sale; 
        // $product->sale = $request->sale; 
        $product->qty = $request->qty;
        $product->detail = $request->detail;
        $product->metakey = $request->name;
        $product->metadesc = $request->name; 
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status;
        $product->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $product],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $product = Product::find($id);
        $product->category_id = $request->category_id; 
        $product->brand_id = $request->brand_id; 
        $product->name = $request->name; 
        $product->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        //
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        //
        $product->price = $request->price;
        // $product->price_sale = $request->price_sale;
        // $product->sale = $request->sale; 
        $product->qty = $request->qty;
        $product->detail = $request->detail;
        $product->metakey = $request->name; 
        $product->metadesc = $request->name; 
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; 
        $product->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $product],200);
    }

    // trash
    public function trash($id){
        $product = Product::find($id);
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
            $product = Product::find($id);
            if($product == null){
                return response()->json(['success' => false, 'message' =>'Không tìm thấy sản phẩm !']);
            }
            $product->status = 2;
            $product->updated_at = date('Y-m-d H:i:s');
            $product->save();
            return response()->json(['success' => true, 'message' =>'Đã đưa phục hồi sản phẩm !']);
        }

    // get trash 
    public function getTrashAll(){
        $products = Product::where('db_product.status','=',0)
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select("db_product.id","db_product.name", "db_product.image", "db_product.slug", "db_product.status", "db_product.price", "db_category.name as categoryname", "db_brand.name as brandname")->orderBy("db_product.updated_at",'DESC')->get();
        // $trash = Product::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = Product::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$products,'count_trash'=>$count_trash]);
    }

    

    /* xoa */
    public function destroy($id){
        $product = Product::find($id);
        if ($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
            );
        }

        $product->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'product' => null],200);
    }


    // all sp fe
    public function getProductAll($limit, $page = 1,$filter = 0, Request $request){
        $product_all = Product::where('status', 1)->get();
        $tong =  count($product_all);
        $end_page = 1;
        if (count($product_all) > $limit) {
            $end_page = ceil(count($product_all) / $limit);
        }        
        $offset = ($page - 1) * $limit;

        if(isset($request->filter_price) && count($request->filter_price) >= 2){
            if($filter == 0){
                $products = Product::where(
                    [
                        ['status', '=', 1],
                        ['price','>=',$request->filter_price[0]],
                        ['price','<=',$request->filter_price[1]]
                    ]
                )->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
            }
            else{
                if($filter == 1){
                    $products = Product::where([['status','=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();
                }else{
                    $products = Product::where([['status','=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();
    
                }
            }
        }else{
            if($filter == 0){
                $products = Product::where('status', 1)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
            }
            else{
                if($filter == 1){
                    $products = Product::where('status', 1)->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();
                }else{
                    $products = Product::where('status', 1)->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();
    
                }
            }
    
        }
        return response()->json(['success'=>true,'message'=>'Tải dữ liệu thành công','products'=>$products,'end_page'=>$end_page,'tong'=>$tong],200);
    }

    // sp moi - sp sale
    public function ProductNew($limit){
        $arg = [
            
            ['status','=',1]
        ];
        $products = Product::where($arg)->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
    }

    // sp theo danh muc
    // public function getProductByCategory($category_id,$limit){
    //     $agr = array();
    //     array_push($agr,$category_id + 0);
    //     $agr_cat1 = [
    //         ['parent_id','=', $category_id + 0],
    //         ['status','=',1]
    //     ];
    //     $list_category = Category::where($agr_cat1)->get();
    //     if(count($list_category) > 0){
    //         foreach ($list_category as $values) {
    //             array_push($agr,$values -> id);
    //             $agr_cat2 = [
    //                 ['parent_id','=',$values->id],
    //                 ['status','=',1]
    //             ];
    //             $list_category2 = Category::where($agr_cat2)->get();
    //             if (count($list_category2) > 0) {
    //                 foreach ($list_category2 as $row2){
    //                     array_push($agr, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //     $products = Product::where('status', 1)->whereIn('category_id', $agr)->orderBy('created_at', 'DESC')->limit($limit)->get();
    //     return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','products' => $products],200);
    // }

    // sp home
    public function product_home($category_id=0,$limit,$orderby){

        $listid = array();
        array_push($listid,$category_id + 0);
        $args_cat1=[
            ['parent_id','=',$category_id + 0],
            ['status','=',1]
        ];
        $list_category1=Category::where($args_cat1)->get();
        if(count($list_category1) > 0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2=[
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }    
            }
        }
        $products=Product::where('status','=',1)->whereIn('category_id',$listid)->orderBy('created_at',$orderby)->limit($limit)->get();
        if (count($products)>0){
            return response()->json(['success'=>true,'message'=>'Tải dữ liệu thành công','products'=>$products],200);
        }
        else{
            return response()->json(['success'=>false,'message'=>'Không có dữ liệu','products'=> null ],404);
        }
        
    }

    // chi tiet + sp lien quan
    public function product_detail($id){
        $product = Product::where([['id','=',$id],['status','=',1]])->first();
        if($product == null){
            return response()->json(['success' => false,'message' => 'Không tìm thấy dữ liệu','product' => null],404);
        }
        $listid = array();
        array_push($listid,$product->category_id);
        $args_cat1=[
            ['parent_id','=',$product->category_id],
            ['status','=',1]
        ];
        $list_category1=Category::where($args_cat1)->get();
        if(count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2=[
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }    
            }
        }
        $product_other = Product::where([['id','!=',$product->id],['status','=',1]])->whereIn('category_id',$listid)->orderBy('created_at','DESC')->limit(4)->get();

        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','product' => $product,'product_other'=>$product_other],200);
    }


    // lay sp theo loai phan trang
    public function product_category($category_id, $limit,$page = 1,$filter = 0,Request $request){
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1){
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2){
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $count_products = Product::where('status', 1)->whereIn('category_id', $listid)->get();
        $tong = count($count_products);
        $end_page = 1;
        if (count($count_products) > $limit) {
            $end_page = ceil(count($count_products) / $limit);
        }    
        $offset = ($page - 1) * $limit;

        if(isset($request->filter_price) && count($request->filter_price) >= 2){
            if($filter == 0){
                $products = Product::where(
                    [
                        ['status','=', 1],
                        ['price','>=',$request->filter_price[0]],
                        ['price','<=',$request->filter_price[1]]
                    ]
                )->whereIn('category_id', $listid)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();    
            }
            else{
                if($filter == 1){
                    $products = Product::where([['status','=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->whereIn('category_id', $listid)->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();    
                }
                else{
                    $products = Product::where([['status','=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->whereIn('category_id', $listid)->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();    
                }
            }
    
        }else{
            if($filter == 0){
                $products = Product::where('status', 1)->whereIn('category_id', $listid)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();    
            }
            else{
                if($filter == 1){
                    $products = Product::where('status', 1)->whereIn('category_id', $listid)->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();    
                }
                else{
                    $products = Product::where('status', 1)->whereIn('category_id', $listid)->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();    
                }
            }
    
        }
        // $products = Product::where('status', 1)->whereIn('category_id', $listid)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();    
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page,'tong'=>$tong],200);
    }

    // sp theo thuong hieu
    public function product_brand($product_id, $limit, $page = 1 , $filter = 0,Request $request){
        $count_products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])->get();
        $tong = count($count_products);
        $end_page = 1;
        if (count($count_products) > $limit) {
            $end_page = ceil(count($count_products) / $limit);
        }    
        $offset = ($page - 1) * $limit;

        if(isset($request->filter_price) && count($request->filter_price) >= 2){
            if($filter == 0){
                $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
            }
            else{
                if($filter == 1){
                    $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();
                }
                else{
                    $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1],['price','>=',$request->filter_price[0]],['price','<=',$request->filter_price[1]]])->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();
    
                }
            }    
        }else{
            if($filter == 0){
                $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
            }
            else{
                if($filter == 1){
                    $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])->orderBy('price', 'DESC')->offset($offset)->limit($limit)->get();
                }
                else{
                    $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])->orderBy('price', 'ASC')->offset($offset)->limit($limit)->get();
    
                }
            }    
        }
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page,'tong'=>$tong],200);
    }

    // tim kiem sp
    public function search_product($key,$limit, $page = 1){
        $count_products = Product::where([['name', 'like','%'.$key.'%'], ['status', '=', 1]])->get();
        $end_page = 1;
        if (count($count_products) > $limit) {
            $end_page = ceil(count($count_products) / $limit);
        }    
        $offset = ($page - 1) * $limit;
        $products = Product::where([['name', 'like','%'.$key.'%'], ['status', '=', 1]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page],200);

    }

    // import product 
    public function getImportName($page = 1,$name='.' ){
        $end_page = 1;
        $limit = 4;
        $count = Product::where([['name', 'like','%'.$name.'%'],['status','!=',0]])
        ->count();

        if ($count > $limit) {
            $end_page = ceil($count / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $products = Product::where([['db_product.name', 'like','%'.$name.'%'],['db_product.status','!=',0]])
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select('db_product.id','db_product.price','db_product.qty','db_product.name as namepro','db_category.name as namecat','db_brand.name as namebrand','db_product.image')
        ->offset($offset)->limit($limit)->get();    
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page],200);

    }
    // import category_id
    public function getImportCatId( $catid , $page = 1){
        $end_page = 1;
        $limit = 4;
        $count = Product::where([['category_id', '=',$catid],['status','!=',0]])
        ->count();

        if ($count > $limit) {
            $end_page = ceil($count / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $products = Product::where([['db_product.category_id','=',$catid],['db_product.status','!=',0]])
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select('db_product.id','db_product.price','db_product.qty','db_product.name as namepro','db_category.name as namecat','db_brand.name as namebrand','db_product.image')
        ->offset($offset)->limit($limit)->get();
        
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page],200);

    }
    // import brand_id
    public function getImportBrandId( $brand_id , $page = 1){
        $end_page = 1;
        $limit = 4;
        $count = Product::where([['brand_id', '=',$brand_id],['status','!=',0]])
        ->count();

        if ($count > $limit) {
            $end_page = ceil($count / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $products = Product::where([['db_product.brand_id','=',$brand_id],['db_product.status','!=',0]])
        ->join('db_category',"db_category.id",'=',"db_product.category_id")
        ->join('db_brand',"db_brand.id",'=',"db_product.brand_id")
        ->select('db_product.id','db_product.price','db_product.qty','db_product.name as namepro','db_category.name as namecat','db_brand.name as namebrand','db_product.image')
        ->offset($offset)->limit($limit)->get();
        
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page],200);

    }


    // sp bán chạy
    public function getBestSaler(){
        $products = Product::where('db_product.status','=',1)
        ->join('db_orderdetail','db_orderdetail.product_id','=','db_product.id')
        ->groupBy('db_orderdetail.product_id','db_product.id', 'db_product.price', 'db_product.image', 'db_product.name')
        ->selectRaw('db_orderdetail.product_id,COUNT(*) as total')
        ->orderByRaw('total DESC')
        ->select('db_product.id','db_product.price','db_product.image','db_product.name', DB::raw('COUNT(*) as total'))
        ->limit(4)->get();
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products],200);

    }

}
// $products = Product::select('db_product.id', 'db_product.price', 'db_product.image', 'db_product.name', DB::raw('COUNT(*) as total'))
// ->join('db_orderdetail', 'db_orderdetail.product_id', '=', 'db_product.id')
// ->where('db_product.status', 1)
// ->groupBy('db_orderdetail.product_id')
// ->orderBy('total', 'asc')
// ->limit(4)
// ->get();        
