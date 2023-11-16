import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import menuservices from "../../../services/MenuServices";

function Menu_Show() {
    const {id} = useParams();
    const [menu,setMenu] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(()=>{
        (async ()=>{
            await menuservices.getById(id).then((res)=>{
                setMenu(res.data.menu);
            })
        })()
    },[])
    if(menu.status === 1){
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết thương hiệu</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                <div class="card-header text-right">
                        <Link to="/admin/menu" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                             Quay lại
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{width:"30%"}}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{menu.id}</td>
                                </tr>
                                <tr>
                                    <th>Tên menu</th>
                                    <td>{menu.name}</td>
                                </tr>
                                <tr>
                                    <th>Liên kết</th>
                                    <td>{menu.link}</td>
                                </tr>
                                <tr>
                                    <th>Vị trí</th>
                                    <td>{menu.position}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>{menu.type}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{menu.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Menu_Show;