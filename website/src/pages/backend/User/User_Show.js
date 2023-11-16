import { useEffect, useState } from "react";
import userservices from "../../../services/UserServices";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";

function User_Show() {
    const {id} = useParams();
    const [user,setUser] = useState([]);
    let status = "Chưa xuất bản";

    useEffect(()=>{
        (async ()=>{
            await userservices.getById(id).then((res)=>{
                setUser(res.data.user);
            })
        })();
    },[])

    if(user.status === 1){
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết thành viên</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/user" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
                        </Link>
                    </div>
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
                                    <td>{user.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "User/" + user.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Họ tên</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>
                                </tr>

                                <tr>
                                    <th>Số điện thoại</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Tên đăng nhập</th>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <th>Mật khẩu</th>
                                    <td>{user.password}</td>
                                </tr>
                                <tr>
                                    <th>Địa chỉ</th>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{user.created_at}</td>
                                </tr>
                                <tr>
                                    <th>Ngày cập nhật</th>
                                    <td>{user.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default User_Show;