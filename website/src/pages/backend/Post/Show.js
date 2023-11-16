import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postservices from "../../../services/PostServices";
import { urlImage } from "../../../config";

function Show() {
    const {id} = useParams();
    const [post,setPost] = useState([]);
    let status = "Chưa xuất bản";

    useEffect(()=>{
        (async ()=>{
            await postservices.getById(id).then((res)=>{
                setPost(res.data.post);
            })
        })();
    },[])

    if(post.status === 1){
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết bài viết</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/post" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{post.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "Post/" + post.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Tên bài viết</th>
                                    <td>{post.title}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{post.slug}</td>
                                </tr>

                                <tr>
                                    <th>Tên chủ đề</th>
                                    <td>{post.topicname}</td>
                                </tr>
                                <tr>
                                    <th>Chi tiết </th>
                                    <td>{post.detail}</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{post.created_at}</td>
                                </tr>
                                <tr>
                                    <th>Ngày cập nhật</th>
                                    <td>{post.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Show;