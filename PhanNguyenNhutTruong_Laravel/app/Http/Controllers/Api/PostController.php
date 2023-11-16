<?php

namespace App\Http\Controllers\Api;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Support\Str; 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($type){
        $posts = Post::where([["db_post.status",'!=',0],["db_post.type",'=',$type]])
        ->join('db_topic',"db_topic.id",'=',"db_post.topic_id")
        ->select("db_post.id","db_post.title","db_post.slug","db_post.status","db_post.image","db_topic.name as topicname","db_post.detail")
        ->orderBy("db_post.created_at","desc")
        ->get();
        $count_post = count($posts);
        $arg = [
            ['type','=','post'],
            ['status','=',0]
        ];
        $count_trash = Post::where($arg)->count();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','posts' => $posts,'count_post'=>$count_post,'count_trash'=>$count_trash],200);
    }
    // 
    public function getPostFE($limit,$page = 1){
        $agr = [
            ['status','=',1],
            ['type','=','post']
        ];
        $count_posts = Post::where($agr)->get();
        $end_page = 1;
        if (count($count_posts) > $limit) {
            $end_page = ceil(count($count_posts) / $limit);
        }        
        $offset = ($page - 1) * $limit;
        $posts = Post::where($agr)->orderBy('created_at','DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'posts'=>   $posts,'end_page'=>$end_page],200);
    }  
    /*lay bang id -> chi tiet */
    public function show($id){
        if(is_numeric($id)){
            $post = Post::where("db_post.id",'=',$id)
            ->join('db_topic',"db_topic.id",'=',"db_post.topic_id")
            ->select("db_post.id","db_post.title","db_post.slug","db_post.status","db_post.image","db_topic.name as topicname","db_post.detail","db_post.created_at","db_post.topic_id","db_post.updated_at")
            ->first();
            }
        else{
            $post = Post::where('slug','=',$id)->first();
        }
            if ($post==null){
                return response()->json(
                    ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'post' => null],404
                );
            }
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'post'=>$post],200);
        }
            
    /* add */
    public function store(Request $request){
        $post = new Post();
        $post->topic_id = $request->topic_id; 
        $post->title = $request->title; 
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $post->type = $request->type; 
        $post->metakey = $request->title; 
        $post->metadesc = $request->title; 
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; 
        $post->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' =>    $post],201); 
    }
            
    /*update*/
    public function update(Request $request,$id){
        $post = Post::find($id);
        $post->topic_id = $request->topic_id; 
        $post->title = $request->title; 
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $post->type = $request->type; 
        $post->metakey = $request->title; 
        $post->metadesc = $request->title; 
        $post->updated_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; 
        $post->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'post' =>    $post],200);
    }
            
    /* xoa */
    public function destroy($id){
        $post = Post::find($id);
        if ($post==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'post' => null],404
            );
        }
        $post->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'post' => null],200);
    }
    
    // trang don
    public function getPage(){
        $posts = Post::where('type','=','page')->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'posts'=>   $posts],200);
    }

    // post detail + lien quan
    public function post_detail($slug){
        $post = Post::where([['id','=',$slug],['status','=',1]])->first();
        if($post == null){
            return response()->json(['success' => false,'message' => 'Không tìm thấy dữ liệu','post' => null],404);
        }
        $listid = array();
        array_push($listid,$post->topic_id);
        $args_top1=[
            ['parent_id','=',$post->topic_id],
            ['status','=',1]
        ];
        $list_topic1=Topic::where($args_top1)->get();
        if(count($list_topic1)>0){
            foreach($list_topic1 as $row1){
                array_push($listid,$row1->id);
                $args_top2=[
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_topic2 = Topic::where($args_top2)->get();
                if (count($list_topic2) > 0) {
                    foreach ($list_topic2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }    
            }
        }
        $post_other = Post::where([['id','!=',$post->id],['status','=',1]])->whereIn('topic_id',$listid)->limit(8)->get();

        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','post' => $post,'post_other'=>$post_other],200);
    }

    // post by topic
    public function post_topic($topic_id, $limit,$page = 1){
        $listid = array();
        array_push($listid, $topic_id + 0);
        $args_top1 = [
            ['parent_id', '=', $topic_id + 0],
            ['status', '=', 1]
        ];
        $list_topic1 = Topic::where($args_top1)->get();
        if (count($list_topic1) > 0) {
            foreach ($list_topic1 as $row1){
                array_push($listid, $row1->id);
                $args_top2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_topic2 = Topic::where($args_top2)->get();
                if (count($list_topic2) > 0) {
                    foreach ($list_topic2 as $row2){
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $count_posts = Post::where('status', 1)->whereIn('topic_id', $listid)->get();
        $end_page = 1;
        if (count($count_posts) > $limit) {
            $end_page = ceil(count($count_posts) / $limit);
        }    
        $offset = ($page - 1) * $limit;
        $posts = Post::where('status', 1)->whereIn('topic_id', $listid)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','posts' => $posts,'end_page'=>$end_page],200);
    }

    // tin tuc moi nhat
    public function Post_New($type,$limit){
        $agr = [
            ['type' ,'=',$type],
            ['status' ,'=',1]
        ];
        $posts = Post::where($agr) -> orderBy('created_at','ASC') -> limit($limit) -> get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','posts' => $posts],200);
    }

    // trash
    public function trash($id){
        $post = Post::find($id);
        if($post == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy dữ liệu !']);
        }
        $post->status = 0;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa vào thùng rác !']);
    }
    
    // phục hồi trash
    public function RescoverTrash($id){
        $post = Post::find($id);
        if($post == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy dữ liệu !']);
        }
        $post->status = 2;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }

    // get trash
    public function getTrashAll($type){
        $agr = [
            ['db_post.type','=',$type],
            ['db_post.status','=',0]
        ];
        $trash = Post::where($agr)
        ->join("db_topic","db_topic.id",'=',"db_post.topic_id")
        ->select("db_post.*","db_topic.name as topicname")
        ->orderBy('updated_by', 'desc')->get();
        $count_trash = count($trash);
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }


    // get page 
    public function getPageAll(){
        $agr = [
            ['status','!=',0],
            ['type','=','page']
        ];
        $page = Post::where($agr)->orderBy('created_at','desc')->get();
        $count_page = count($page);
        $agr1 = [
            ['status','=',0],
            ['type','=','page']
        ];
        $count_trash = Post::where($agr1)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','page'=>$page,'count_trash'=>$count_trash,'count_page'=>$count_page]);
    }

    // get page by id 
    public function getPageById($id){
        $page = Post::where('id','=',$id)->first();
        return response()->json(['success' => true,'message' =>'tai thanh cong','page'=>$page]);
    }

    public function getTrashPageAll(){
        $agr = [
            ['type','=','page'],
            ['status','=',0]
        ];
        $trash = Post::where($agr)->orderBy('updated_by', 'desc')->get();
        $count_trash = count($trash);
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }

    // get page frontend
    public function getPageFE($slug){
        $agr = [
            ['status','=',1],
            ['type','=','page'],
            ['slug','=',$slug]
        ];
        $page = Post::where($agr)->first();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'page'=>$page],200);

    }
}
