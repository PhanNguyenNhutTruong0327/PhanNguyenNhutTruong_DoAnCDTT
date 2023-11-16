import { useEffect, useState } from "react";
import { Await, Link, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import { urlImage } from "../../../config";

function Show_Category() {
    const {id} = useParams();
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        (async ()=>{
            await categoryservice.getById(id).then((res)=>{
                setCategory(res.data.category);
            })
        })()
    },[])

    let status = "Chưa xuất bản";
    if(category.status === 1){
        status = "Xuất bản"
    }

    return ( 
        <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="d-inline">Chi tiết danh mục</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="card">
            <div class="card-header text-right">
                    <Link to="/admin/category" class="btn btn-sm btn-info">
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
                                <td>{category.id}</td>
                            </tr>
                            <tr>
                                <th>Tên danh mục</th>
                                <td>{category.name}</td>
                            </tr>
                            <tr>
                                <th>Slug</th>
                                <td>{category.slug}</td>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <td>{category.description}</td>
                            </tr>
                            <tr>
                                <th>Ảnh danh mục</th>
                                <img src={urlImage + 'Category/' + category.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                            </tr>
                            <tr>
                                <th>Thứ tự</th>
                                <td>{category.sort_order}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                <th>Ngày thêm</th>
                                <td>{category.created_at}</td>
                            </tr>
                            <tr>
                                <th>Ngày cập nhật</th>
                                <td>{category.updated_at}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>

     );
}

export default Show_Category;