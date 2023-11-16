import { useEffect, useState } from "react";
import productServices from "../../../services/ProductServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";
import "./style.css";
import List_Product from "./List_Product";

function Product_Sale() {

    const [products, setProducts] = useState([]);
    const [end_page, setEnd] = useState(1);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [countTrash, setCountTrash] = useState(0);
    const [tamp, setTamp] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [tamp2,setTamp2] = useState();


    const updateTamp2 = (newValue) => {
        setTamp2(newValue);
      };
    try {
        useEffect(() => {
            (async () => {
                await productServices.getProductSaleAll(8, page).then((res) => {
                    setProducts(res.data.products);
                    setEnd(res.data.end_page);
                    setCount(res.data.count_pro);
                    setCountTrash(res.data.count_trash);
                })
            })()
        }, [page, tamp])

    }
    catch (e) {
        console.error(e);
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    function productTrash(idsale, id) {
        productServices.deleteTrashSale(idsale, id).then(function (result) {
            alert(result.data.message);
            setTamp(idsale);
        })
    }

    // form them
    const handleButtonClick = () => {
        setShowForm(!showForm);
    };
    // 
    // document.addEventListener('DOMContentLoaded', function () {
    //     const toggleButton = document.getElementById('toggleButton');
    //     const hiddenElement = document.getElementById('hiddenElement');

    //     if (toggleButton) {
    //         toggleButton.addEventListener('click', () => {
    //             hiddenElement.classList.toggle('d-none');
    //         });
    //     }
    // });

    // const [productAll,setProductAll] = useState([]);
    // useEffect(()=>{
    //     (async ()=>{
    //         await productServices.getProducts(8,1).then((res)=>{
    //             setProductAll(res.data.products);
    //         })
    //     })();
    // },[])




    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h1 class="d-inline">Sản phẩm khuyến mãi <sup style={{ fontSize: "14px" }}>({count})</sup></h1>
                                </div>
                                <div class="col-sm-2 text-right ">
                                    <div className="d-flex ms-5">
                                        <button onClick={handleButtonClick} id="toggleButton" class="btn btn-sm btn-primary me-3 ">
                                            <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                            Thêm
                                        </button>
                                        <Link to="/admin/product/sale/trash" class="action-btn" style={{ color: "red" }}>
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
            <section class="content ">

                <div className="old-element">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-9 d-flex">
                                    {/* <select name="" id="" class="form-control d-inline" style={{ width: "100px" }}>
                                    <option value="">Xoá</option>
                                </select>
                                <button class="btn btn-sm btn-success ms-2">Áp dụng</button> */}
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
                                        <th>Giá bán</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Giá sale</th>
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
                                                        <Link to={`/admin/product/sale/update/${pro.idsale}`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-edit"></i>Chỉnh sửa</Link> |
                                                        <Link to={`/admin/product/sale/show/${pro.idsale}`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                        <button onClick={() => productTrash(pro.idsale, pro.id)} style={{ fontSize: "14px" }}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                    </div>
                                                </td>
                                                <td>{pro.price}.000 đ</td>
                                                <td>{pro.date_begin}</td>
                                                <td>{pro.date_end}</td>
                                                <td>{pro.price_sale}.000 đ</td>
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

                </div>
                {/*  */}
                {showForm ? (
                    <>
                        <List_Product tamp2={tamp2} updateTamp2={updateTamp2} />
                    </>
                ) : (<></>)}
                {/*  */}

            </section>
        </div >
    );
}

export default Product_Sale;