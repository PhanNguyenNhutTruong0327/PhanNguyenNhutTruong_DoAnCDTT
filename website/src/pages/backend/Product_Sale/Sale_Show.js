import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";

function Sale_Show() {
    const {id} = useParams();
    const [pro,setPro] = useState([]);

    useEffect(()=>{
        (async ()=>{
            await productServices.getSaleById(id).then((res)=>{
                setPro(res.data.product);
            })
        })()
    },[])
    
    let status = "Chưa xuất bản";
    if(pro.status === 1){
        status = "Xuất bản"
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết sản phẩm</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/product/sale" class="btn btn-sm btn-info">
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
                                    <td>{pro.idsale}</td>
                                </tr>
                                <tr>
                                    <th>ID Sản phẩm</th>
                                    <td>{pro.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "Product/" + pro.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <td>{pro.name}</td>
                                </tr>

                                <tr>
                                    <th>Tên thương hiệu</th>
                                    <td>{pro.brandname}</td>
                                </tr>
                                <tr>
                                    <th>Tên danh mục</th>
                                    <td>{pro.catname}</td>
                                </tr>
                                <tr>
                                    <th>Chi tiết sản phẩm</th>
                                    <td>{pro.detail}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>{pro.price}.000 đ</td>
                                </tr>
                                <tr>
                                    <th>Giá khuyến mãi</th>
                                    <td>{pro.price_sale}.000 đ</td>
                                </tr>
                                <tr>
                                    <th>Số lượng</th>
                                    <td>{pro.qty}</td>
                                </tr>

                                <tr>
                                    <th>Ngày bắt đầu</th>
                                    <td>{pro.date_begin}</td>
                                </tr>                               
                                 <tr>
                                    <th>Ngày kết thúc</th>
                                    <td>{pro.date_end}</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{pro.created_at}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Sale_Show;