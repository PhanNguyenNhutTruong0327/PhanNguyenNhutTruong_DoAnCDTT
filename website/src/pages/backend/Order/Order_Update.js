import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderservices from "../../../services/OrderServices";

function Order_Update() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [TrangThai, setTrangThai] = useState();
    const [status, setStatus] = useState();

    const [user_id,setUserId] = useState("");
    const [email,setEmail] = useState("");
    const [note, setNote] = useState(" ");

    useEffect(()=>{
        (async ()=>{
            await orderservices.getById(id).then((res)=>{
                setName(res.data.order.name);
                setPhone(res.data.order.phone);
                setAddress(res.data.order.address);
                setTrangThai(res.data.order.TrangThai);
                setStatus(res.data.order.status);
                setNote(res.data.order.note);
                setUserId(res.data.order.user_id);
                setEmail(res.data.order.email);
            })
        })()
    },[])

    // 
    async function UpdateOrder(event) {
        event.preventDefault();
        const order = new FormData();

        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("user_id", user_id);
        order.append("address", address);
        order.append("note", note);
        order.append("TrangThai", TrangThai);
        order.append("status", status);

        await orderservices.update(id,order).then((res)=>{
            alert(res.data.message);
            navigate('/admin/order', { replace: true });
        });
    }
    return (
        <form action="" method="post" onSubmit={UpdateOrder}>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <h1 class="d-inline">Thay đổi đơn hàng</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/order" class="btn btn-sm btn-info me-2">
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
                                        <label>Họ tên (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                    </div>
                                    {/* <div class="mb-3">
                                    <label>Slug</label>
                                    <input type="text" placeholder="Nhập slug" name="slug" class="form-control" />
                                </div> */}
                                    <div class="mb-3">
                                        <label>Địa chỉ (*)</label>
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" min="" name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Ghi chú (*)</label>
                                        <input value={note} onChange={(e) => setNote(e.target.value)} name="detail" placeholder="Nhập chi tiết sản phẩm" class="form-control"></input>
                                    </div>

                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label>Số địên thoại (*)</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} name="detail"  class="form-control"></input>
                                    </div>

                                    <div class="mb-3">
                                        <label>Trạng thái đơn hàng (*)</label>
                                        <select name="status" class="form-control" value={TrangThai} onChange={(e) => setTrangThai(e.target.value)}>
                                            <option value="0">Chưa giao hàng</option>
                                            <option value="1">Đang giao hàng</option>
                                            <option value="2">Đã giao hàng</option>
                                        </select>
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

export default Order_Update;