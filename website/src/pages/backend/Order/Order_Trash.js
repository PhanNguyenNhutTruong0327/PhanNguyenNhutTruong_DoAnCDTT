import { useEffect, useState } from "react";
import orderservices from "../../../services/OrderServices";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

function Order_Trash() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [end_page, setEndPage] = useState(1);
    const [count, setCount] = useState(0);
    const [tamp, setTamp] = useState();
    try {
        useEffect(() => {
            (async () => {
                await orderservices.getTrash(page).then((res) => {
                    setOrders(res.data.trash);
                    setEndPage(res.data.end_page);
                    setCount(res.data.count_trash);
                })
            })()
        }, [tamp])
    } catch (e) { console.error(e); }

    const handleChange = (event, value) => {
        setPage(value);
    };

    function RescoverTrash(id) {
        orderservices.RescoverTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    function deleted(id) {
        orderservices.deletedProduct(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }
    if(orders.length > 0){
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
                                <Link to="/admin/order" class="btn btn-sm btn-info me-3 ">
                                    <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                    Quay lại
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
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Chú ý</th>
                                    <th>Ngày đặt</th>
                                    <th>Ngày xóa</th>
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
                                                    <Link to={`/admin/order/show/${order.id}`} className="pt-1" style={{ fontSize: "14px" }}><i class="fa fa-eye"></i> Chi tiết</Link>
                                                </div>
                                            </td>
                                            <td>{order.phone}</td>
                                            <td>{order.email}</td>
                                            <td>{order.address}</td>
                                            <td>{order.note}</td>
                                            <td>{order.created_at}</td>
                                            <td>{order.updated_at}</td>
                                            <td className="text-center">
                                                <div>
                                                    <button onClick={() => RescoverTrash(order.id)} className="btn btn-outline-success">
                                                        <i class="fa fa-history" aria-hidden="true"></i>
                                                    </button>

                                                </div>
                                                <div className="mt-1">
                                                    <button onClick={() => deleted(order.id)} className="btn btn-outline-danger">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </button>

                                                </div>

                                            </td>

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
    else{
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
                                    <Link to="/admin/order" class="btn btn-sm btn-info me-3 ">
                                        <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                        Quay lại
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-header p-2">
                            Không có đơn hàng nào !
                        </div>    
                    </div>
                </section>
            </div>
    
        );
       
    }
}

export default Order_Trash;