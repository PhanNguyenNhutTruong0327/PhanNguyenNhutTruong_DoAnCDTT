import { useEffect, useState } from "react";
import pageservices from "../../../services/PageServices";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";

function Page_Show() {
    const {id} = useParams();
    const [page,setPage] = useState([]);

    useEffect(()=>{
        (async ()=>{
            await pageservices.getPageById(id).then((res)=>{
                setPage(res.data.page);
            })
        })()
    },[])

    let status = "Chưa xuất bản";
    if(page.status === 1){
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết thương hiệu</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/page" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
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
                                    <td>{page.id}</td>
                                </tr>
                                <tr>
                                    <th>Tiêu đề</th>
                                    <td>{page.title}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{page.slug}</td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{page.detail}</td>
                                </tr>
                                <tr>
                                    <th>Ảnh</th>
                                    <img src={urlImage + 'Post/' + page.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{page.created_at}</td>
                                </tr>
                                <tr>
                                    <th>Ngày cập nhật</th>
                                    <td>{page.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Page_Show;