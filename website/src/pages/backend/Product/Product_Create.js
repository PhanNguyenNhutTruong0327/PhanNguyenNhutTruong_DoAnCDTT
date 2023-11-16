import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import brandservices from "../../../services/BrandServices";
import productServices from "../../../services/ProductServices";

function Product_Create() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [catId, setCatID] = useState('');
    const [price, setPrice] = useState();
    const [detail, setDetail] = useState('');
    const [qty, setQty] = useState('');
    const [status, setStatus] = useState(2);

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        (async () => {
            await categoryservice.getCategories().then((res) => {
                setCategories(res.data.categoies);
            })
            await brandservices.getBrands().then((res) => {
                setBrands(res.data.brands);
            })

        })()
    }, [])


    async function productStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", catId);
        product.append("brand_id", brand_id);
        product.append("name", name);
        product.append("price", price);
        product.append("qty", qty);
        product.append("detail", detail);
        product.append("status", status);
        product.append("image", image.files[0]);

        await productServices.create(product).then(function (res) {
            alert(res.data.message);
            navigate('/admin/product', { replace: true });
        })
    }


    return (
        <form action="" method="post" onSubmit={productStore}>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <h1 class="d-inline">Thêm mới sản phẩm</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/product" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button type="submit" class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label>Tên sản phẩm (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                    </div>
                                    {/* <div class="mb-3">
                                        <label>Slug</label>
                                        <input type="text" placeholder="Nhập slug" name="slug" class="form-control" />
                                    </div> */}
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label>Danh mục (*)</label>
                                                <select name="category_id" class="form-control" value={catId} onChange={(e) => setCatID(e.target.value)}>
                                                    <option value="">Chọn danh mục</option>

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
                                                <select name="brand_id" class="form-control" value={brand_id} onChange={(e) => setBrandId(e.target.value)}>
                                                    <option value="">Chọn thương hiệu</option>
                                                    {brands.map((brand,index)=>{
                                                        return(
                                                            <option key={index} value={brand.id}>{brand.name}</option>

                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label>Chi tiết (*)</label>
                                        <textarea value={detail} onChange={(e) => setDetail(e.target.value)} name="detail" placeholder="Nhập chi tiết sản phẩm" rows="5"
                                            class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label>Giá bán (*)</label>
                                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number"  min="" name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Số lượng (*)</label>
                                        <input value={qty} onChange={(e) => setQty(e.target.value)} type="number"  min="1" name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" name="image" id="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </form>

    );
}

export default Product_Create;