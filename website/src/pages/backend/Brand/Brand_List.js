import { useEffect, useState } from "react";
import brandservices from "../../../services/BrandServices";
import { urlImage } from "../../../config";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
function Brand_List() {
    const navigate = useNavigate();

    const [brands, setBrands] = useState([]);
    const [cuontBr, setCuontBr] = useState(false);
    const [statusdel, setStatusDel] = useState(0);
    const [count_trash,setCountTrash] = useState(0);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    const [sort_order, setSortOrder] = useState(0);

    useEffect(() => {
        (async function () {
            await brandservices.getBrands().then((res) => {
                setBrands(res.data.brands);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [cuontBr, statusdel])

    async function brandStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("description", description);
        brand.append("metakey", name);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        brand.append("image", image.files[0]);

        await brandservices.create(brand).then(function (res) {
            alert(res.data.message);
            // navigate('/admin/brand', { replace: true });
            setCuontBr(res.data.success);
        })
    }

    // delete
    function brandTrash(id) {
        brandservices.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }



    return (
        <div class=" admin content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-11">
                            <h1 class="d-inline">Tất cả thương hiệu</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link class="action-btn" to="/admin/brand/trash" style={{ color: "red" }}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <sup class="count ms-1">{count_trash}</sup>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <form onSubmit={brandStore}>

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
                                    <div class="card-header text-right">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div class="col-md-8">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th style={{ width: "280px" }}>Tên thương hiệu</th>
                                            <th>Mô tả</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {brands.map(function (brand, index) {
                                            return (
                                                <tr class="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td >
                                                        <img src={urlImage + 'Brand/' + brand.image} alt="brand.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {brand.name}
                                                        </div>
                                                        <div class="function_style d-flex" style={{fontSize:"14px"}}>
                                                            {/* <button className="">Hiện</button> | */}
                                                            <Link to={`/admin/brand/update/${brand.id}`} style={{margin:"0px 3px"}}><i className="fa fa-edit me-1"></i>Chỉnh sửa</Link> |
                                                            <Link to={`/admin/brand/show/${brand.id}`} style={{margin:"0px 3px"}}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                            <button onClick={() => brandTrash(brand.id)} style={{margin:"0px 3px"}}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                        </div>
                                                    </td>
                                                    <td>{brand.description}</td>
                                                </tr>

                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Brand_List;