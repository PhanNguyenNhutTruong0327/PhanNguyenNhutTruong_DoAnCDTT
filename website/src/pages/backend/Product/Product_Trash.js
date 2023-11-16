import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";

function Product_Trash() {
    const [trash, setTrash] = useState([]);
    const [count_trash, setCountTrash] = useState(0);
    const [tamp,setTamp] = useState();

    useEffect(() => {
        (async () => {
            await productServices.getTrash().then((res) => {
                setTrash(res.data.trash);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])

    function RescoverTrash(id) {
        productServices.RescoverTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    function deleted(id) {
        productServices.deletedProduct(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }


    if (trash.length === 0) {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h1 class="d-inline">Thùng rác</h1>
                                    </div>
                                    <div class="col-sm-2 text-right ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/product" class="btn btn-sm btn-info me-3 ">
                                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
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
                            <h6>Hiện không có sản phẩm nào !</h6>
                        </div>
                    </div>
                </section>
            </div>

        );

    }
    else {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h1 class="d-inline">Thùng rác <sup>({count_trash})</sup></h1>
                                    </div>
                                    <div class="col-sm-2 text-right ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/product" class="btn btn-sm btn-info me-3 ">
                                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trash.map((pro, index) => {
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
                                                        <Link to={`/admin/product/show/${pro.id}`} style={{ fontSize: "14px" }}><i class="fa fa-eye me-1"></i>Chi tiết</Link>
                                                    </div>
                                                </td>
                                                <td>{pro.categoryname}</td>
                                                <td>{pro.brandname}</td>
                                                <td className="text-center">
                                                    <button onClick={() => RescoverTrash(pro.id)} className="btn btn-outline-success me-2">
                                                        <i class="fa fa-history" aria-hidden="true"></i>
                                                    </button>
                                                    <button onClick={() => deleted(pro.id)} className="btn btn-outline-danger">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </button>

                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination justify-content-center">
                            {/* <Pagination page={page} count={end_page} onChange={handleChange} /> */}

                        </div>

                    </div>
                </section>
            </div>

        );
    }
}

export default Product_Trash;