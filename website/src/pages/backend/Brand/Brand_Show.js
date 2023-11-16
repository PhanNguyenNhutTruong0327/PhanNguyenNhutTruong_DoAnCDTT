import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import brandservices from "../../../services/BrandServices";
import { urlImage } from "../../../config";

function Brand_Show() {
    const {id} = useParams();
    const [brand,setBrand] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(()=>{
        (async ()=>{
            await brandservices.getById(id).then((res)=>{
                setBrand(res.data.brand);
            })
        })()
    },[])
    if(brand.status === 1){
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
                        <Link to="/admin/brand" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                             Quay lại
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{width:"30%"}}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{brand.id}</td>
                                </tr>
                                <tr>
                                    <th>Tên thương hiệu</th>
                                    <td>{brand.name}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{brand.slug}</td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{brand.description}</td>
                                </tr>
                                <tr>
                                    <th>Ảnh thương hiệu</th>
                                    <img src={urlImage + 'Brand/' + brand.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                                </tr>
                                <tr>
                                    <th>Thứ tự</th>
                                    <td>{brand.sort_order}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{brand.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Brand_Show;