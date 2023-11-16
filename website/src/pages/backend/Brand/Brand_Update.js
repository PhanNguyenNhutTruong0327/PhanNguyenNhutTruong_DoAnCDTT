import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import brandservices from "../../../services/BrandServices";

function Brand_Update() {

    const navigate = useNavigate(); // chuyen trang

    const [name, setName] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(1);
    // lay id
    const { id } = useParams("id");
    //lay du lieu
    useEffect(function () {
        (async function () {
            await brandservices.getById(id).then(function (result) {
                const data = result.data.brand;
                setName(data.name);
                setDescription(data.description);
                setSortOrder(data.sort_order);
                setStatus(data.status);
            });
        })();
    }, [])
    //lay danh sach
    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservices.getBrands().then(function (result) {
                setBrand(result.data.brands)
            });
        })();
    }, [])

    // ham cap nhat
    async function brandEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("description", description);
        brand.append("metakey", name);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        if (image.files.length === 0) {
            brand.append("image", "")
        }
        else {
            brand.append("image", image.files[0]);
        }
        await brandservices.update(brand, id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/brand', { replace: true });
        })

    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chỉnh sửa thương hiệu</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/brand" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                             Quay lại
                        </Link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <form onSubmit={brandEdit}>

                                    <div class="mb-3">
                                        <label>Tên thương hiệu (*)</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả</label>
                                        <input type="text" name="slug" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" id="image" name="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp</label>
                                        <select name="status" class="form-control" onChange={(e) => setSortOrder(e.target.value)} value={sort_order}>
                                            {brands.map((br, index) => {
                                                return (
                                                    <option key={index} value={br.sort_order + 1}>Sau: {br.name}</option>

                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="card-header text-center">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div class="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Brand_Update;