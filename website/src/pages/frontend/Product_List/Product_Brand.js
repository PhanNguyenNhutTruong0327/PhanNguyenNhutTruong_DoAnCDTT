import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import productServices from "../../../services/ProductServices";
import List_Category from "../List/List_Category";
import List_Brand from "../List/List_Brand";
import Product_Item from "../../../compoment/frontend/Product_Item";
import brandservices from "../../../services/BrandServices";
import { Pagination } from "@mui/material";
import Product_List from "../../../compoment/frontend/Product_List";
import { BsCardList, BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";


function Product_Brand() {
    const { slug } = useParams();
    const { sapxep } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);
    const [end_page, setEnd] = useState(1);
    const [tongsp, setTongSp] = useState(0);
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


    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const response = await brandservices.getBySlug(slug);
                const brandid = response.data.brand.id;
                setTitle(response.data.brand.name);
                const response2 = await productServices.getProductByBrandId(brandid, limit, page, filter,{"filter_price":FilterByPrice});
                setProducts(response2.data.products);
                setEnd(response2.data.end_page);
                setTongSp(response2.data.tong)
            } catch (error) {
                console.error(error);
            }
        })();
    }, [slug, page, filter,FilterByPrice]);

    /////

    const FilterByPriceChange = () => {
        setFilterByPrice([filter_price_min, filter_price_max]);
    }


    if (sapxep === "list") {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">{title}</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="sidebar  has-scrollbar" data-mobile-menu="true">
                                <List_Category />
                                <List_Brand />
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="">
                                <header className="mb-4">
                                    <div class="form-inline ">
                                        <i class="mr-md-auto fs-6" style={{ fontFamily: "Playfair Display, serif" }} >{tongsp} sản phẩm</i>
                                        {/* <select class="mr-2 form-control">
                                                    <option>Latest items</option>
                                                    <option>Trending</option>
                                                    <option>Most Popular</option>
                                                    <option>Cheapest</option>
                                                </select> */}
                                        <div className="d-flex me-5">
                                            <label style={{ fontSize: "15px" }}>Mức giá :</label>
                                            <input value={filter_price_min} style={{ width: "70px" }} class="form-control form-control-sm ms-2" type="text" onChange={(e)=>setFilterMin(e.target.value)} />
                                            <span class="px-2"> - </span>
                                            <input value={filter_price_max} style={{ width: "70px" }} class="form-control form-control-sm" type="text" onChange={(e)=>setFilterMax(e.target.value)}/>
                                            <button type="submit" class="btn btn-sm btn-light ms-2" onClick={() => FilterByPriceChange()}>Ok</button>

                                        </div>

                                        <div class="d-flex me-5">
                                            <label class="me-2">Giá :</label>
                                            <button className="btn btn-sm btn-outline-success me-3" onClick={handleChangeFilterGiam}><AiOutlineArrowDown />Giảm</button>
                                            <button className="btn btn-sm btn-outline-success" onClick={handleChangeFilterTang}><AiOutlineArrowUp />Tăng</button>
                                        </div>

                                        <div class="btn-group float-end">
                                            <Link to={`/pages/thuong-hieu/${slug}/grid`} class="btn btn-light" data-toggle="tooltip" title="List view">
                                                <BsFillGrid3X3GapFill />
                                            </Link>
                                            <Link to={`/pages/thuong-hieu/${slug}/list`} class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                                <BsCardList />
                                            </Link>
                                        </div>
                                    </div>
                                </header>

                            </div>

                            <div className="content-pro">
                                <div class="">
                                    {products.map((pro, index) => {
                                        return (
                                            <Product_List product={pro} key={index} />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="page-navigation ">
                            <div className="pagination justify-content-center">
                                <Pagination page={page} count={end_page} onChange={handleChange} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    else {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">{title}</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="sidebar  has-scrollbar" data-mobile-menu="true">
                                <List_Category />
                                <List_Brand />
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="">
                                <header className="mb-4">
                                    <div class="form-inline ">
                                        <i class="mr-md-auto fs-6" style={{ fontFamily: "Playfair Display, serif" }} >{tongsp} sản phẩm</i>
                                        {/* <select class="mr-2 form-control">
                                                    <option>Latest items</option>
                                                    <option>Trending</option>
                                                    <option>Most Popular</option>
                                                    <option>Cheapest</option>
                                                </select> */}
                                        <div className="d-flex me-5">
                                            <label style={{ fontSize: "15px" }}>Mức giá :</label>
                                            <input value={filter_price_min} style={{ width: "70px" }} class="form-control form-control-sm ms-2" type="text" onChange={(e)=>setFilterMin(e.target.value)} />
                                            <span class="px-2"> - </span>
                                            <input value={filter_price_max} style={{ width: "70px" }} class="form-control form-control-sm" type="text" onChange={(e)=>setFilterMax(e.target.value)}/>
                                            <button type="submit" class="btn btn-sm btn-light ms-2" onClick={() => FilterByPriceChange()}>Ok</button>

                                        </div>
                                        <div class="d-flex me-5">
                                            <label class="me-2">Giá :</label>
                                            <button className="btn btn-sm btn-outline-success me-3" onClick={handleChangeFilterGiam}><AiOutlineArrowDown />Giảm</button>
                                            <button className="btn btn-sm btn-outline-success" onClick={handleChangeFilterTang}><AiOutlineArrowUp />Tăng</button>
                                        </div>

                                        <div class="btn-group float-end">
                                            <Link to={`/pages/thuong-hieu/${slug}/grid`} class="btn btn-light" data-toggle="tooltip" title="List view">
                                                <BsFillGrid3X3GapFill />
                                            </Link>
                                            <Link to={`/pages/thuong-hieu/${slug}/list`} class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                                <BsCardList />
                                            </Link>
                                        </div>
                                    </div>
                                </header>

                            </div>

                            <div className="content-pro">
                                <div class="product-grid">
                                    {products.map((pro, index) => {
                                        return (
                                            <Product_Item product={pro} key={index} />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="page-navigation ">
                            <div className="pagination justify-content-center">
                                <Pagination page={page} count={end_page} onChange={handleChange} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Product_Brand;