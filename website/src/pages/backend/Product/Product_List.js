import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";


function Product_List() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [end_page, setEnd] = useState(1);
    const [page, setPage] = useState(1);
    const [countTrash, setTrash] = useState(0);
    const [countAll, setCountAll] = useState(0);
    const [tamp, setTamp] = useState();

    useEffect(() => {
        (async () => {
            await productServices.getProducts(limit, page).then((res) => {
                setProducts(res.data.products);
                setEnd(res.data.end_page);
                setTrash(res.data.count_trash);
                setCountAll(res.data.count_all);
            })
        })()
    }, [page, tamp]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    function productTrash(id) {
        productServices.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }




    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h1 class="d-inline">Tất cả sản phẩm <sup>({countAll})</sup></h1>
                                </div>
                                <div class="col-sm-2 text-right ">
                                    <div className="d-flex ms-5">
                                        <Link to="/admin/product/create" class="btn btn-sm btn-primary me-3 ">
                                            <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                            Thêm
                                        </Link>
                                        <Link to="/admin/product/trash" class="action-btn" style={{ color: "red" }}>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                            <sup class="count ms-1">{countTrash}</sup>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-9 d-flex">
                                <select name="" id="" class="form-control d-inline" style={{ width: "100px" }}>
                                    <option value="">Xoá</option>
                                </select>
                                <button class="btn btn-sm btn-success ms-2">Áp dụng</button>
                            </div>
                            <div class="col-3 ">
                                <div className="d-flex float-right">
                                    <input type="text" class="form-control" style={{ width: "100%", height: "70%" }} />
                                    <button className="btn"><i class="fa fa-search "></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered" id="mytable">
                            <thead>
                                <tr>
                                    <th class="text-center" style={{ width: "30px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                    <th style={{ width: "300px" }}>Tên sản phẩm</th>
                                    <th>Tên danh mục</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((pro, index) => {
                                    return (
                                        <tr class="datarow" key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img src={urlImage + "Product/" + pro.image} alt="product.jpg" style={{ width: "100%" }} />
                                            </td>
                                            <td>
                                                <div class="name">
                                                    {pro.name}
                                                </div>
                                                <div class="function_style d-flex">
                                                    {/* <a href="#">Hiện</a> | */}
                                                    <Link to={`/admin/product/update/${pro.id}`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-edit"></i>Chỉnh sửa</Link> |
                                                    <Link to={`/admin/product/show/${pro.id}`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                    <button onClick={() => productTrash(pro.id)} style={{ fontSize: "14px" }}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                </div>
                                            </td>
                                            <td>{pro.categoryname}</td>
                                            <td>{pro.brandname}</td>
                                            <td>{pro.price}.000 đ</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination justify-content-center">
                        <Pagination page={page} count={end_page} onChange={handleChange} />

                    </div>

                </div>
            </section>
        </div>

    );
}

export default Product_List; 