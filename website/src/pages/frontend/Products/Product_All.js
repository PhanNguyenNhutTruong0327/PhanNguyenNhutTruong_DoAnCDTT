import { Link, useParams } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import productServices from "../../../services/ProductServices";
import List_Category from "../List/List_Category";
import List_Brand from "../List/List_Brand";
import Product_Item from "../../../compoment/frontend/Product_Item";
import { Pagination } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCardList, BsFillGrid3X3GapFill } from "react-icons/bs";
import Product_List from "../../../compoment/frontend/Product_List";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";


function Product_All() {
    const { slug } = useParams();
    const [Product_All, setProductAll] = useState([]);
    const [end_page, setEnd] = useState(1);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const [tong, setTong] = useState(0);
    const [filter, setFilter] = useState(0);

    const [filter_price_min, setFilterMin] = useState(0);
    const [filter_price_max, setFilterMax] = useState(0);
    const [FilterByPrice, setFilterByPrice] = useState([]);


    const handleChangeFilterGiam = () => {
        setFilter(1)

    }

    const handleChangeFilterTang = () => {
        setFilter(2);

    }

    const handleChange = (event, value) => {
        setPage(value);

    };
    useEffect(function () {
        (async function () {
            await productServices.getProductAll(limit, page, filter,{"filter_price":FilterByPrice}).then(function (result) {
                setProductAll(result.data.products);
                setEnd(result.data.end_page);
                setTong(result.data.tong);
            })
        })()
    }, [page, filter,FilterByPrice]);

    const FilterByPriceChange = () => {
        setFilterByPrice([filter_price_min, filter_price_max]);
    }



    if (slug === "list") {
        return (
            <div className="">
                <div className="product-all">
                    <div className="container mb-5">
                        <div className="title-proall mb-3">
                            <h3 id="h3-pro" className="text-center">Các Sản Phẩm Của Tr Cake</h3>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                    <List_Category />
                                    <List_Brand />
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="">
                                    <header className="mb-4">

                                        <div class="form-inline ">
                                            <i class="mr-md-auto fs-6" style={{ fontFamily: "Playfair Display, serif" }} >{tong} sản phẩm</i>
                                            {/* <select class="mr-2 form-control">
                                                <option>Latest items</option>
                                                <option>Trending</option>
                                                <option>Most Popular</option>
                                                <option>Cheapest</option>
                                            </select> */}
                                            <div className="d-flex me-5">
                                                <label style={{ fontSize: "15px" }}>Mức giá :</label>
                                                <input value={filter_price_min} style={{ width: "70px" }} class="form-control form-control-sm ms-2" type="text" onChange={(e) => setFilterMin(e.target.value)} />
                                                <span class="px-2"> - </span>
                                                <input value={filter_price_max} style={{ width: "70px" }} class="form-control form-control-sm" type="text" onChange={(e) => setFilterMax(e.target.value)} />
                                                <button type="submit" class="btn btn-sm btn-light ms-2" onClick={() => FilterByPriceChange()}>Ok</button>

                                            </div>

                                            <div class="d-flex me-5">
                                                <label class="me-2">Giá :</label>
                                                <button className="btn btn-sm btn-outline-success me-3" onClick={handleChangeFilterGiam}><AiOutlineArrowDown />Giảm</button>
                                                <button className="btn btn-sm btn-outline-success" onClick={handleChangeFilterTang}><AiOutlineArrowUp />Tăng</button>
                                            </div>
                                            <div class="btn-group float-end">
                                                <Link to="/pages/san-pham/sap-xep/grid" class="btn btn-light" data-toggle="tooltip" title="List view">
                                                    <BsFillGrid3X3GapFill />
                                                </Link>
                                                <Link to="/pages/san-pham/sap-xep/list" class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                                    <BsCardList />
                                                </Link>
                                            </div>
                                        </div>
                                    </header>

                                </div>

                                <div className="content-pro">
                                    <div class="">
                                        {Product_All.map((pro, index) => {
                                            return (<Product_List product={pro} key={index} />);
                                        })}
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="col-12 text-center mt-4">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                                </div> */}


                                </div>
                            </div>

                            <div className="page-navigation ">
                                <div className="pagination justify-content-center">
                                    <Pagination page={page} count={end_page} onChange={handleChange} />

                                </div>
                                {/* <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center pagination-sm">
                                    <li class="page-item">
                                        <button class="page-link" onClick={()=>setPage(page -1)}>Previous</button>
                                    </li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(2)}>1</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(3)}>2</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(4)}>3</button></li>
                                    <li class="page-item">
                                        <button class="page-link" onClick={()=>setPage(page + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav> */}

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
    else {
        return (
            <div className="">
                <div className="product-all">
                    <div className="container mb-5">
                        <div className="title-proall mb-3">
                            <h3 id="h3-pro" className="text-center">Các Sản Phẩm Của Tr Cake</h3>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                    <List_Category />
                                    <List_Brand />
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="">
                                    <header className="mb-4">
                                        <div class="form-inline ">
                                            <i class="mr-md-auto fs-6" style={{ fontFamily: "Playfair Display, serif" }} >{tong} sản phẩm</i>
                                            {/* <select class="mr-2 form-control">
                                                <option>Latest items</option>
                                                <option>Trending</option>
                                                <option>Most Popular</option>
                                                <option>Cheapest</option>
                                            </select> */}
                                            <div className="d-flex me-5">
                                                <label style={{ fontSize: "15px" }}>Mức giá :</label>
                                                <input value={filter_price_min} style={{ width: "70px" }} class="form-control form-control-sm ms-2" type="text" onChange={(e) => setFilterMin(e.target.value)} />
                                                <span class="px-2"> - </span>
                                                <input value={filter_price_max} style={{ width: "70px" }} class="form-control form-control-sm" type="text" onChange={(e) => setFilterMax(e.target.value)} />
                                                <button type="submit" class="btn btn-sm btn-light ms-2" onClick={() => FilterByPriceChange()}>Ok</button>

                                            </div>

                                            <div class="d-flex me-5">
                                                <label class="me-2">Giá :</label>
                                                <button className="btn btn-sm btn-outline-success me-3" onClick={handleChangeFilterGiam}><AiOutlineArrowDown />Giảm</button>
                                                <button className="btn btn-sm btn-outline-success" onClick={handleChangeFilterTang}><AiOutlineArrowUp />Tăng</button>
                                            </div>

                                            <div class="btn-group float-end">
                                                <Link to="/pages/san-pham/sap-xep/grid" class="btn btn-light" data-toggle="tooltip" title="List view">
                                                    <BsFillGrid3X3GapFill />
                                                </Link>
                                                <Link to="/pages/san-pham/sap-xep/list" class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                                    <BsCardList />
                                                </Link>
                                            </div>
                                        </div>
                                    </header>

                                </div>

                                <div className="content-pro">
                                    <div class="product-grid">
                                        {Product_All.map((pro, index) => {
                                            return (<Product_Item product={pro} key={index} />);
                                        })}
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="col-12 text-center mt-4">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                                </div> */}


                                </div>
                            </div>

                            <div className="page-navigation ">
                                <div className="pagination justify-content-center">
                                    <Pagination page={page} count={end_page} onChange={handleChange} />

                                </div>
                                {/* <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center pagination-sm">
                                    <li class="page-item">
                                        <button class="page-link" onClick={()=>setPage(page -1)}>Previous</button>
                                    </li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(2)}>1</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(3)}>2</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>setPage(4)}>3</button></li>
                                    <li class="page-item">
                                        <button class="page-link" onClick={()=>setPage(page + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav> */}

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );

    }
}

export default Product_All;