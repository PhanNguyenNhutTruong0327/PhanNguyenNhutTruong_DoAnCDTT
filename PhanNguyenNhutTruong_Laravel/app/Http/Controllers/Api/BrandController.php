<?php

namespace App\Http\Controllers\Api;
use App\Models\Brand;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 


class BrandController extends Controller
{
     /*lay danh sach thuong hieu*/
     public function index($status = null){
        if($status == null){
            $brands = Brand::all();
        }
        else{
            $brands = Brand::where('status',$status)->get();
        }
        $dem = count($brands);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands,'dem'=>$dem],200);
    }

    // ds back
    public function getBrandAll(){
        $brands = Brand::where('status','!=',0)->get();
        $count_brand = Brand::count();
        $count_trash = Brand::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>'Thanh cong !','brands'=>$brands,'count_brand'=>$count_brand,'count_trash'=>$count_trash]);
    }



    // lấy theo id or slug
    public function show($id){
        if(is_numeric($id)){
            $brand = Brand::find($id);
        }
        else{
            $brand = Brand::where('slug','=',$id)->first();
        }
        if ($brand==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'brand' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brand'=>$brand],200);
    }

    // thêm 
    public function store(Request $request){
        $brand = new Brand();
        $brand->name = $request->name; 
        $brand->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension(); 
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }        
        $brand->sort_order = $request->sort_order; 
        $brand->metakey = $request->metakey; 
        $brand->description = $request->description; 
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1;
        $brand->status = $request->status; 
        $brand->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $brand],201); 
    }

    // update
    public function update(Request $request,$id){
        $brand = Brand::find($id);
        $brand->name = $request->name; 
        $brand->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }
        $brand->sort_order = $request->sort_order; 
        $brand->metakey = $request->metakey; 
        $brand->description = $request->description; 
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = 1;
        $brand->status = $request->status; 
        $brand->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $brand],200);
    }

    // trash
    public function trash($id){
        $brand = Brand::find($id);
        if($brand == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy thương hiệu !']);
        }
        $count_product = Product::where('brand_id','=',$id)->count();
        if($count_product > 0){
            return response()->json(['success' => false, 'message' =>'Thương hiệu đã có sản phẩm không thể xóa !']);
        }
        $brand->status = 0;
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa thương hiệu vào thùng rác !']);
    }
    
    // phục hồi trash
    public function RescoverTrash($id){
        $brand = Brand::find($id);
        if($brand == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy thương hiệu !']);
        }
        $brand->status = 2;
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }

    // get trash
    public function getTrashAll(){
        $trash = Brand::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = Brand::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }


    // delete
    public function destroy($id){
        $brand = Brand::findOrFail($id);
        if ($brand==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'brand' => null],404
            );
        }
         
        $brand->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'brand' => null],200);
    }

        
    

}
