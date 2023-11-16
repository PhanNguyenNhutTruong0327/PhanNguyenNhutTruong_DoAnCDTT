import { useEffect, useState } from "react";
import userservices from "../../../services/UserServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function User_List() {
    const [users, setUsers] = useState([]);
    const [count_trash, setCountTrash] = useState(0);
    const [count_user, setCountUser] = useState(0);
    const [tamp, setTamp] = useState(0);


    useEffect(() => {
        (async () => {
            await userservices.getUserAll('admin').then((res) => {
                setUsers(res.data.users);
                setCountTrash(res.data.count_trash);
                setCountUser(res.data.count_user);
            })
        })()
    }, [tamp])

    function UserTrash(id) {
        userservices.deleteTrash(id).then(function (result) {
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
                            <h1 class="d-inline">Tất cả thành viên <sup style={{ fontSize: "14px" }}>({count_user})</sup></h1>
                        </div>

                        <div class="col-sm-2 text-right ">
                            <div className="d-flex ms-5">
                                <Link to="/admin/user/create" class="btn btn-sm btn-primary me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link>
                                <Link to="/admin/user/trash" class="action-btn" style={{ color: "red" }}>
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
                    <div class="card-header">
                        Noi dung
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered" id="mytable">
                            <thead>
                                <tr>
                                    <th class="text-center" style={{ width: "30px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                    <th>Họ tên</th>
                                    <th>Điện thoại</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((cus) => {
                                    return (
                                        <tr class="datarow">
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img className="img-fluid" src={urlImage + "User/" + cus.image} alt="user.jpg" />
                                            </td>
                                            <td>
                                                <div class="name">
                                                    {cus.name}
                                                </div>
                                                <div class="function_style d-flex" style={{ fontSize: "14px" }}>
                                                    <a href="#" style={{ margin: "0px 2px" }} class="">Hiện</a> |
                                                    <Link to={`/admin/user/update/${cus.id}`} style={{ margin: "0px 2px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                    <Link to={`/admin/user/show/${cus.id}`} style={{ margin: "0px 2px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                    <button onClick={() => UserTrash(cus.id)} style={{ margin: "0px 2px" }}><i class="fa fa-trash"></i> Xoá</button>
                                                </div>
                                            </td>
                                            <td>{cus.phone}</td>
                                            <td>{cus.email}</td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default User_List;