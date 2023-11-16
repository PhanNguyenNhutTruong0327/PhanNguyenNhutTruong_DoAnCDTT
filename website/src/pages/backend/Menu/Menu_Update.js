import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservices from "../../../services/MenuServices";

function Menu_Update() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [parentId, setParentId] = useState(0);
    const [table, setTable] = useState(0);
    const [type, setType] = useState('');
    const [status, setStatus] = useState(0);

    useEffect(()=>{
        (async ()=>{
            await menuservices.getById(id).then((res)=>{
                setName(res.data.menu.name);
                setLink(res.data.menu.link);
                setPosition(res.data.menu.position);
                setParentId(res.data.menu.parent_id);
                setTable(res.data.menu.table_id);
                setType(res.data.menu.type);
                setStatus(res.data.menu.status);
            })
        })();
    },[])

    async function menuUpdate(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name); //
        topic.append("sort_order", 0);
        topic.append("position",position );//
        topic.append("status", status);//
        topic.append("link", link); //
        topic.append("parent_id", 0);
        topic.append("table_id", 0);//
        topic.append("level", 1);
        topic.append("type", type); //

        await menuservices.update(id,topic).then(function (res) {
            alert(res.data.message);
            navigate('/admin/menu', { replace: true });
        })
    }


    return (
        <div className="col">
            <form onSubmit={menuUpdate}>
                <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-9">
                                    <h1 class="d-inline">Cập nhật menu</h1>
                                </div>
                                <div class="col-sm-3  ">
                                    <div className="text-right ms-5">
                                        <Link to="/admin/menu" class="btn btn-sm btn-info me-3 ">
                                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                            Quay lại
                                        </Link>
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1 " aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="content">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="mb-3">
                                            <label>Tên menu (*)</label>
                                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Liên kết</label>
                                            <input value={link} onChange={(e) => setLink(e.target.value)} type="text" name="slug" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Type</label>
                                            <select value={type} onChange={(e) => setType(e.target.value)} name="status" class="form-control">
                                                <option value="custom">Menu chính</option>
                                                <option value="category">Danh mục</option>
                                                <option value="brand">Thương hiệu</option>
                                                <option value="topic">Chủ đề</option>
                                                <option value="page">Trang đơn</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        
                                        <div class="mb-3">
                                            <label>Vị trí</label>
                                            <select value={position} onChange={(e) => setPosition(e.target.value)} name="status" class="form-control">
                                                <option value="mainmenu">Main Menu</option>
                                                <option value="footermenu">Footer Menu</option>
                                            </select>
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
                    </section>
                </div>

            </form>

        </div>

    );
}

export default Menu_Update;