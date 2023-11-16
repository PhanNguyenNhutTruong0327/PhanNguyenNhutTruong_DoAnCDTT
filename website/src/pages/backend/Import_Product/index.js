import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import brandservices from "../../../services/BrandServices";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";

function Import_Product() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrand] = useState([]);
    const [name, setName] = useState('');
    const [brand_id, setBrandId] = useState(0);
    const [category_id, setCategoryId] = useState(0);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [end_page, setEndPage] = useState(1);
    const [prostore, setProStore] = useState([]);
    const [tamp, setTamp] = useState();
    const [tamp1, setTamp1] = useState();
    // const [price,setPrice] = useState();
    // const [qty,setQty] = useState();

    useEffect(() => {
        (async () => {
            await productServices.getProStoreImport().then((res) => {
                setProStore(res.data.proStore);
            })
        })()
    }, [tamp,tamp1])

    try {
        useEffect(() => {
            (async () => {
                await categoryservice.getCatAll().then((res) => {
                    setCategories(res.data.categoies);
                });
                await brandservices.getBrands().then((res) => {
                    setBrand(res.data.brands);
                })
            })()
        }, [])

    } catch (e) { console.error(e); }

    // try {
    //     useEffect(() => {
    //         (async () => {
    //             await productServices.getProductImport(page, name).then((res) => {
    //                 setProducts(res.data.products);
    //                 setEndPage(res.data.end_page);
    //             })
    //         })()
    //     }, [name,page]);
    // } catch (e) { console.error(e); }

    try {
        useEffect(() => {
            (async () => {
                await productServices.getImportCatid(category_id, page).then((res) => {
                    setProducts(res.data.products);
                    setEndPage(res.data.end_page);
                })
            })()
        }, [category_id, page]);
    } catch (e) { console.error(e); }

    try {
        useEffect(() => {
            (async () => {
                await productServices.getImportBrandid(brand_id, page).then((res) => {
                    setProducts(res.data.products);
                    setEndPage(res.data.end_page);
                })
            })()
        }, [brand_id, page]);
    } catch (e) { console.error(e); }

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [agrPro, setAgrPro] = useState([]);
    const [agrPrice, setAgrPrice] = useState([]);
    const [argQty, setAgrQty] = useState([]);

    const addArgPro = (e) => {
        if (e.target.checked === true) {
            setAgrPro([...agrPro, e.target.value]);
            setAgrPrice([...agrPrice,])
        }
        else {

        }
    }
    const [listPro, setListPro] = useState({});
    async function SavePro(data) {
        setListPro(data);
        console.log(data);
        await productServices.importPro(data).then((res) => {
            alert(res.data.message);
            setTamp(data.id);
            // navigate('/admin/brand', { replace: true });    
        }
        )
    }

    // delete
    function Trash(id) {
        productServices.deleteTrashImport(id).then(function (result) {
            alert(result.data.message);
            setTamp1(id);
        })
    }


    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Nhập hàng</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        {/* <Link to="/admin/order" class="btn btn-sm btn-info me-2">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
                        </Link>
                        <button class="btn btn-sm btn-success" name="CHANGEADD">
                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                            Lưu
                        </button> */}
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-">
                                <h4 class="fs-6">Thông tin sản phẩm</h4>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label>Danh mục (*)</label>
                                            <select value={category_id} onChange={(e) => setCategoryId(e.target.value)} name="category_id" class="form-control">
                                                <option value="0">None</option>
                                                {categories.map((cat, index) => {
                                                    return (
                                                        <option key={index} value={cat.id}>{cat.name}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label>Thương hiệu (*)</label>
                                            <select value={brand_id} onChange={(e) => setBrandId(e.target.value)} name="brand_id" class="form-control">
                                                <option value="0">None</option>
                                                {brands.map((b, index) => {
                                                    return (
                                                        <option key={index} value={b.id}>{b.name}</option>

                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label>Tên sản phẩm (*)</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="..." class="form-control" />
                                </div>

                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Tên danh mục</th>
                                            <th>Tên thương hiệu</th>
                                            <th style={{ width: "130px" }}>Giá</th>
                                            <th style={{ width: "130px" }}>Số lượng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((pro) => {
                                            return (
                                                <tr key={pro.id} class="datarow">
                                                    <td>
                                                        {pro.id}
                                                    </td>
                                                    <td>
                                                        <img className="img-fluid" src={urlImage + "Product/" + pro.image} alt="product.jpg" />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {pro.namepro}
                                                        </div>
                                                        {/* <div class="function_style">
                                                <a href="#">Hiện</a> |
                                                <a href="#">Chỉnh sửa</a> |
                                                <a href="../backend/product_show.html">Chi tiết</a> |
                                                <a href="#">Xoá</a>
                                            </div> */}
                                                    </td>
                                                    <td>{pro.namecat}</td>
                                                    <td>{pro.namebrand}</td>
                                                    <td>
                                                        <input type="number" min="0" />
                                                    </td>
                                                    <td>
                                                        <input type="number" min="0" />
                                                    </td>
                                                    <td>
                                                        <button onClick={() => SavePro(pro)} className="btn btn-sm btn-danger">Nhập</button>
                                                    </td>
                                                </tr>

                                            );

                                        })}
                                    </tbody>
                                </table>
                                <Pagination page={page} count={end_page} onChange={handleChange} />

                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-">
                                <h4 class="fs-6">Danh sách sản phẩm nhập</h4>
                                <hr />
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Tên danh mục</th>
                                            <th>Tên thương hiệu</th>
                                            <th style={{ width: "130px" }}>Giá</th>
                                            <th style={{ width: "130px" }}>Số lượng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prostore.map((pro) => {
                                            return (
                                                <tr class="datarow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        <img className="img-fluid" src={urlImage + "Product/" + pro.image} alt="product.jpg" />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {pro.name}
                                                        </div>
                                                        {/* <div class="function_style">
                                                <a href="#">Hiện</a> |
                                                <a href="#">Chỉnh sửa</a> |
                                                <a href="../backend/product_show.html">Chi tiết</a> |
                                                <a href="#">Xoá</a>
                                            </div> */}
                                                    </td>
                                                    <td>{pro.namecat}</td>
                                                    <td>{pro.namebrand}</td>
                                                    <td>
                                                        {pro.pricestore}
                                                    </td>
                                                    <td>
                                                        {pro.quantity}
                                                    </td>
                                                    <td>
                                                        <button onClick={() => Trash(pro.id)} className="btn btn-sm btn-danger">Xóa</button>
                                                    </td>
                                                </tr>

                                            );

                                        })}
                                    </tbody>
                                </table>
                                {/* <Pagination page={page} count={end_page} onChange={handleChange} /> */}

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    );
}

export default Import_Product;