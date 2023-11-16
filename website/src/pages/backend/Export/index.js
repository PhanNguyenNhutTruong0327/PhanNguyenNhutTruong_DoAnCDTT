import { useState } from "react";
import { Link } from "react-router-dom";

function Export() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Xuất hàng</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <form>
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/order" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Về danh sách
                            </Link>
                            <button class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row1">
                                <div class="row">
                                    <div className="d-flex">
                                        <h4 class="fs-6">Thông tin khách hàng</h4>
                                    </div>
                                    <hr />
                                    <div class="col-md-3 mb-3">
                                        <label>Họ tên (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                    <div class=" col-md-3 mb-3">
                                        <label>Email (*)</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label>Điện thoại (*)</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label>Địa chỉ (*)</label>
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                </div>
                                <div class="">
                                    <h4 class="fs-6">Thông tin sản phẩm</h4>
                                    <hr />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label>Danh mục (*)</label>
                                                <select name="category_id" class="form-control">
                                                    <option value="">None</option>
                                                    <option value="1">Tên danh mục</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label>Thương hiệu (*)</label>
                                                <select name="brand_id" class="form-control">
                                                    <option value="">None</option>
                                                    <option value="1">Tên thương hiệu</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label>Tên sản phẩm (*)</label>
                                        <input type="text" name="name" class="form-control" />
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
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="datarow">
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>
                                                    <img src="../public/images/product.jpg" alt="product.jpg" />
                                                </td>
                                                <td>
                                                    <div class="name">
                                                        Tên sản phẩm
                                                    </div>
                                                    <div class="function_style">
                                                        <Link to={`/admin/product/show/`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-eye me-1"></i>Chi tiết</Link>
                                                    </div>
                                                </td>
                                                <td>Tên danh mục</td>
                                                <td>Tên Thuong hiệu</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div class="mb-3">
                                        <label>Mã sản phẩm</label>
                                        <input type="text" readonly value="1" name="id" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Giá nhập</label>
                                        <input type="number" value="10000" min="10000" name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Số lượng</label>
                                        <input type="number" value="10000" min="10000" name="qty" class="form-control" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </div>

    );
}

export default Export;