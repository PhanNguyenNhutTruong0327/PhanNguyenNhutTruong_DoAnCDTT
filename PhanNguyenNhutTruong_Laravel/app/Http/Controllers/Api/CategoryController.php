<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str; 

class CategoryController extends Controller
{
     /*lay danh sach thuong hieu*/
     public function index(){
        $categories = Category::where('status','!=',0)->orderBy('created_at','desc')->get();
        $count_cat = count($categories);
        $count_trash = Category::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categoies'=>$categories,'count_cat'=>$count_cat,'count_trash'=>$count_trash],200);
        
    }
    public function getCategory(){
        $arg = [
            ['status','=',1],
            ['parent_id','=',0]
        ];
        $categories = Category::where($arg)->orderBy('created_at','desc')->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categoies'=>$categories],200);
    }

    // tim id
    public function show($id){
        if(is_numeric($id)){
            $category = Category::find($id);
        }
        else{
            $category = Category::where('slug','=',$id)->first();
        }
        if ($category==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'category' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'category'=>$category],200);
    } 

    // add
    public function store(Request $request){
        $category = new Category();
        $category->name = $request->name;
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; 
        $category->metakey = $request->name; 
        $category->description = $request->description; 
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status;
        $category->save();
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $category],201); 
    }

    // update
    
    public function update(Request $request,$id){
        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; 
        $category->metakey = $request->name; 
        $category->description = $request->description; 
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1;
        $category->status = $request->status; 
        $category->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'category' => $category],200);
    }

    // delete 
    public function destroy($id){
        $category = Category::findOrFail($id);
        if($category == null){
            return response()->json(['success'=>false,'message'=>"Không tìm thấy dữ liệu"],404);
        }
        else{
            $category->delete();
            return response()->json(['success'=>true,'message'=>"Xóa dữ liệu thành công"],200);
        }
    }

    // lay cat 
    public function category_list($parent_id = 0,$limit){
        $args = [
            ['parent_id','=',$parent_id],
            ['status','=',1]
        ];
        $categories = Category::where($args)->orderBy('sort_order','ASC')->limit($limit)->get();
        return response()->json( ['success' => true,'message' => 'Tải dữ liệu thành công', 'categories' => $categories],200);
    }


    // trash
    public function trash($id){
        $category = Category::find($id);
        if($category == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy danh mục !']);
        }
        $count_product = Product::where('category_id','=',$id)->count();
        if($count_product > 0){
            return response()->json(['success' => false, 'message' =>'Danh mục đã có sản phẩm không thể xóa !']);
        }
        $category->status = 0;
        $category->updated_at = date('Y-m-d H:i:s');
        $category->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa vào thùng rác !']);
    }
    
    // phục hồi trash
    public function RescoverTrash($id){
        $category = Category::find($id);
        if($category == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy danh mục !']);
        }
        $category->status = 2;
        $category->updated_at = date('Y-m-d H:i:s');
        $category->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }

    // get trash
    public function getTrashAll(){
        $trash = Category::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = Category::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }    
}
