import { useEffect, useState } from "react";
import postservices from "../../../services/PostServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function List_Post() {
   const [posts, setPost] = useState([]);
   const [countPost, setCountPost] = useState(0);
   const [count_trash, setCountTrash] = useState(0);
   const [tamp,setTamp] = useState(0)

   useEffect(() => {
      (async () => {
         await postservices.getPostList('post').then((res) => {
            setPost(res.data.posts);
            setCountPost(res.data.count_post);
            setCountTrash(res.data.count_trash);
         })
      })()
   }, [tamp]);

   function postTrash(id) {
      postservices.deleteTrash(id).then(function (result) {
          alert(result.data.message);
          setTamp(id);
      })
  }


   return (
      <div class="content-wrapper">
         <section class="content-header">
            <div class="container-fluid">
               <div class="row mb-2">
                  <div class="col-sm-10">
                     <h1 class="d-inline">Tất cả bài viết <sup style={{ fontSize: "14px" }}>({countPost})</sup></h1>
                  </div>
                  <div class="col-sm-2 text-right ">
                     <div className="d-flex ms-5">
                        <Link to="/admin/post/create" class="btn btn-sm btn-primary me-3 ">
                           <i class="fa fa-plus me-1" aria-hidden="true"></i>
                           Thêm
                        </Link>
                        <Link to="/admin/post/trash" class="action-btn" style={{ color: "red" }}>
                           <i class="fa fa-trash" aria-hidden="true"></i>
                           <sup class="count ms-1">{count_trash}</sup>
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
         </section>
         <section class="content">
            <div class="card">
               <div class="card-header p-2">
                  Noi dung
               </div>
               <div class="card-body p-2">
                  <table class="table table-bordered">
                     <thead>
                        <tr>
                           <th class="text-center" style={{ width: "30px" }}>
                              <input type="checkbox" />
                           </th>
                           <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                           <th>Tiêu đề bài viết</th>
                           <th>Tên danh mục</th>
                        </tr>
                     </thead>
                     <tbody>
                        {posts.map((post) => {
                           return (
                              <tr class="datarow">
                                 <td>
                                    <input type="checkbox" />
                                 </td>
                                 <td>
                                    <img src={urlImage + "Post/" + post.image} alt="post.jpg" class="img-fluid"/>
                                 </td>
                                 <td>
                                    <div class="name">
                                       {post.title}
                                    </div>
                                    <div class="function_style d-flex">
                                       <a href="#" style={{ fontSize: "14px" }} class="mt-1">Hiện</a> |
                                       <Link to={`/admin/post/update/${post.id}`} style={{ fontSize: "14px" }} class="mt-1"><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                       <Link to={`/admin/post/show/${post.id}`} style={{ fontSize: "14px" }} class="mt-1"><i class="fa fa-eye"></i> Chi tiết</Link> |
                                       <button onClick={()=> postTrash(post.id)}  style={{ fontSize: "14px",paddingTop:"4px" }}><i class="fa fa-trash"></i> Xoá</button>
                                    </div>
                                 </td>
                                 <td>{post.topicname}</td>
                              </tr>

                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         </section>
      </div>

   );
}

export default List_Post;