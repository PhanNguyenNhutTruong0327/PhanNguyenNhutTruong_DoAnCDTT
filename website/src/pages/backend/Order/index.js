import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import orderservices from "../../../services/OrderServices";
import { Pagination } from "@mui/material";

function Order_List() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [end_page, setEndPage] = useState(1);
    const [count, setCount] = useState(0);
    const [count_trash, setCountTrash] = useState(0);
    const [tamp, setTamp] = useState();
    useEffect(() => {
        (async () => {
            await orderservices.getOrderAll(page).then((res) => {
                setOrders(res.data.orders);
                setEndPage(res.data.page_end);
                setCount(res.data.count);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])

    const handleChange = (event, value) => {
        setPage(value);
    };

    // delete
    function orderTrash(id) {
        orderservices.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-10">
                            <h1 class="d-inline">Tất cả đơn hàng <sup style={{ fontSize: "14px" }}>({count})</sup></h1>
                        </div>
                        <div class="col-sm-2 text-right ">
                            <div className="d-flex ms-5">
                                <Link to="/admin/order/create" class="btn btn-sm btn-primary me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link>
                                <Link to="/admin/order/trash" class="action-btn" style={{ color: "red" }}>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                    <sup class="count ms-1">{count_trash}</sup>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header p-2">
                        Noi dung
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center" style={{ width: "30px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th class="text-center" >Tên khách hàng</th>
                                    <th>Điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Chú ý</th>
                                    <th>Trạng thái đơn</th>
                                    <th>Ngày đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => {
                                    return (
                                        <tr class="datarow">
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <div class="name">
                                                    {order.name}
                                                </div>
                                                <div class="function_style d-flex ">
                                                    <Link to={`/admin/order/update/${order.id}`} className="pt-1" style={{ fontSize: "14px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                    <Link to={`/admin/order/show/${order.id}`} className="pt-1" style={{ fontSize: "14px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                    <button onClick={() => orderTrash(order.id)} style={{ fontSize: "14px" }}><i class="fa fa-trash"></i> Xoá</button>
                                                </div>
                                            </td>
                                            <td>{order.phone}</td>
                                            <td>{order.address}</td>
                                            <td>{order.note}</td>
                                            <td>
                                                {order.TrangThai === 0 ? "Chưa giao" : order.TrangThai === 1 ? "Đang giao" : "Đã giao"} 
                                            </td>   
                                            <td>{order.created_at}</td>
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
            </section>
        </div>

    );
}

export default Order_List;