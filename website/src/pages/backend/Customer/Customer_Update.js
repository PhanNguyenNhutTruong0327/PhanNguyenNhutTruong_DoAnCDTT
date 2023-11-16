import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userservices from "../../../services/UserServices";

function Customer_Update() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [name, setName] = useState('');
    const [email, setEmial] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState();
    const [set_password, setSetPassword] = useState();
    const [username, setUserName] = useState('');
    const [status, setStatus] = useState(2);


    useEffect(()=>{
        (async ()=>{
            await userservices.getById(id).then((res)=>{
                setName(res.data.user.name);
                setAddress(res.data.user.address);
                setEmial(res.data.user.email);
                setPhone(res.data.user.phone);
                setPassword(res.data.user.password);
                setUserName(res.data.user.username);
                setStatus(res.data.user.status);
                setSetPassword(res.data.user.password);
            })
        })()
    },[])

    async function userUpdate(event) {
        if(set_password === password){
            event.preventDefault();
            const image = document.querySelector("#image");
            var user = new FormData();
            user.append("name", name);
            user.append("email", email);
            user.append("phone", phone);
            user.append("address", address);
            user.append("username", username);
            user.append("roles", 'customer');
            user.append("password", password);
            user.append("status", status);
            if (image.files.length === 0) {
                user.append("image", "")
            }
            else {
                user.append("image", image.files[0]);
            }
            await userservices.update(id,user).then(function (res) {
                alert(res.data.message);
                navigate('/admin/customer', { replace: true });
            })    
        }
        else{
            alert('Vui lòng xác nhận lại mật khẩu !');
        }
    }



    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Cập nhật khách hàng</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <form onSubmit={userUpdate}>
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/customer" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label>Họ tên (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Điện thoại</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="slug" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input value={email} onChange={(e) => setEmial(e.target.value)} type="text" name="slug" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Tên đăng nhập</label>
                                        <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" name="slug" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mật khẩu</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Xác nhận mật khẩu</label>
                                        <input value={set_password} onChange={(e) => setSetPassword(e.target.value)} type="password" name="password_re" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label>Địa chỉ (*)</label>
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>

                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" name="image" id="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" class="form-control">
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </div>

    );
}

export default Customer_Update;