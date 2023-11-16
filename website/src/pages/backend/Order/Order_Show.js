import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import orderservices from "../../../services/OrderServices";
import { urlImage } from "../../../config";

function Order_Show() {

    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(0);

    try {
        useEffect(() => {
            (async () => {
                await orderservices.getById(id).then((res) => {
                    setOrder(res.data.order);
                    setProduct(res.data.order_detail);
                    setTotal(res.data.total);
                })
            })()
        }, [])
    } catch (e) { console.error(e); }


    let status = "Chưa xuất bản"
    if (order.status === 1) {
        status = "Xuất bản"
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết sản phẩm</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/order" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
                        </Link>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <div class="card-body p-2">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "30%" }}>Tên trường</th>
                                            <th>Giá trị</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <td>{order.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Tên tài khoản</th>
                                            <td>{order.nametk}</td>
                                        </tr>
                                        <tr>
                                            <th>Tên liên hệ</th>
                                            <td>{order.name}</td>
                                        </tr>

                                        <tr>
                                            <th>Số điện thoại</th>
                                            <td>{order.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{order.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Địa chỉ</th>
                                            <td>{order.address}</td>
                                        </tr>
                                        <tr>
                                            <th>Ghi chú</th>
                                            <td>{order.note}</td>
                                        </tr>
                                        <tr>
                                            <th>Trạng thái đơn hàng</th>
                                            <td>
                                                {order.TrangThai === 0 ? "Chưa giao" : order.TrangThai === 1 ? "Đang giao" : "Đã giao"}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Trạng thái</th>
                                            <td>{status}</td>
                                        </tr>
                                        <tr>
                                            <th>Ngày đặt</th>
                                            <td>{order.created_at}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="card-body p-2">
                                <table class="table table-bordered" id="mytable">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th >Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Giảm giá</th>
                                            <th>Tổng tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((pro, index) => {
                                            return (
                                                <tr class="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        <img src={urlImage + "Product/" + pro.image} alt="product.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>
                                                        {pro.name}
                                                    </td>
                                                    <td>{pro.price}</td>
                                                    <td>{pro.qty}</td>
                                                    <td>{pro.discount}</td>
                                                    <td>{pro.amount}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="5" className="text-center">Tổng :</td>
                                            <td colSpan={2}>{total}</td>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Order_Show;