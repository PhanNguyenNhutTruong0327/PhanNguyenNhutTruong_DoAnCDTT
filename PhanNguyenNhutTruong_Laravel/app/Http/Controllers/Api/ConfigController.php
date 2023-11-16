<?php

namespace App\Http\Controllers\Api;
use App\Models\Config;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 


class ConfigController extends Controller
{
     /*lay danh sach thuong hieu*/
     public function getConfigFooter(){
        $config = Config::where('status',1)->first();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'config'=>$config],200);
    }

    // lấy theo id or slug
    public function show($id){
        if(is_numeric($id)){
            $config = Config::find($id);
        }
        else{
            $config = Config::where('slug','=',$id)->first();
        }
        if ($config==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'config' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'config'=>$config],200);
    }

    // thêm 
    public function updateConfig($id, Request $request){

        $config = Config::find($id);
        $config->author = $request->author; 
        $config->email = $request->email; 
        $config->phone = $request->phone; 
        $config->zalo = $request->zalo; 
        $config->facebook = $request->facebook; 
        $config->address = $request->address; 
        $config->youtube = $request->youtube; 
        $config->zalo = $request->zalo; 
        $config->updated_at = date('Y-m-d H:i:s');
        $config->created_by = 1;
        $config->status = $request->status; 
        $config->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'config' => $config],201); 
    }

    //
    public function getConfig(){
        $config = Config::first();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công !",'config'=>$config],200);
    }


    // delete
    public function destroy($id){
        $config = Config::findOrFail($id);
        if ($config==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'config' => null],404
            );
        }
         
        $config->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'config' => null],200);
    }

        
    

}
