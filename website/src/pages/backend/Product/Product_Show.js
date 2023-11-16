import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import brandservices from "../../../services/BrandServices";
import categoryservices from "../../../services/CategoryServices";

function Product_Show() {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        (async ()=>{
            await productServices.getById(id).then((res)=>{
                setProduct(res.data.product);
            })
        })()
    },[]);

    // let idbrand = product.brand_id

    // useEffect(()=>{
    //     (async ()=>{
    //         await brandservices.getById(idbrand).then((res)=>{
    //             setBrand(res.data.brand);
    //         })
    //     })()
    // },[])

    // useEffect(()=>{
    //     (async ()=>{
    //         await categoryservices.getById(product.category_id).then((res)=>{
    //             setCategory(res.data.category);
    //         })
    //     })()
    // },[])




    let status = "Chưa xuất bản"
    if(product.status === 1){
        status = "Xuất bản"
    }
    
    return (
        <div class="content-wrapper">
            {console.log(product)}
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
                        <Link to="/admin/product" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
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
                                    <td>{product.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "Product/" + product.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{product.slug}</td>
                                </tr>

                                <tr>
                                    <th>Tên thương hiệu</th>
                                    <td>{product.brandname}</td>
                                </tr>
                                <tr>
                                    <th>Tên danh mục</th>
                                    <td>{product.categoryname}</td>
                                </tr>
                                <tr>
                                    <th>Chi tiết sản phẩm</th>
                                    <td>{product.detail}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>{product.price}.000 đ</td>
                                </tr>
                                <tr>
                                    <th>Số lượng</th>
                                    <td>{product.qty}</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{product.created_at}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Product_Show;