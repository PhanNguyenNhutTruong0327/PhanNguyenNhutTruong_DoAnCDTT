import { useEffect, useState } from "react";
import configservices from "../../../services/ConfigServices";
import { useNavigate } from "react-router-dom";

function Config() {
    const navigate = useNavigate();
    const [id,setId] = useState();
    const [author,setAuthor] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [fb,setFb] = useState("");
    const [zalo,setZalo] = useState("");
    const [address,setAddress] = useState("");
    const [youtube,setYoutube] = useState("");
    const [status,setStatus] = useState(1);

    try{
        useEffect(()=>{
            (async ()=>{
                await configservices.getConfigBE().then((res)=>{
                    setAuthor(res.data.config.author);
                    setEmail(res.data.config.email);
                    setPhone(res.data.config.phone);
                    setFb(res.data.config.facebook);
                    setZalo(res.data.config.zalo);
                    setAddress(res.data.config.address);
                    setYoutube(res.data.config.youtube);
                    setStatus(res.data.config.status);
                    setId(res.data.config.id);
                })
            })()
        },[])
    }catch(e){console.error(e);}

    // update
    async function configEdit(event) {
        event.preventDefault();
        var config = new FormData();
        config.append("author", author);
        config.append("email", email);
        config.append("phone", phone);
        config.append("zalo", zalo);
        config.append("facebook", fb);
        config.append("address", address);
        config.append("youtube", youtube);
        config.append("status", status);

        await configservices.update(id,config).then(function (res) {
            alert(res.data.message);
            navigate('/admin/config', { replace: true });
        })

    }




    return ( 
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <h1 className="d-inline">Cấu hình</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="content">
            <div className="card">
                {/* <div className="card-header text-right">
                    <Link className="action-btn" to="/admin/topic/trash" style={{ color: "red" }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <sup className="count ms-1">{dem}</sup>
                    </Link>
                </div> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md">
                            <form onSubmit={configEdit}>
                                <div className="mb-3">
                                    <label>Tác giả (*)</label>
                                    <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" name="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="slug" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="slug" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Zalo</label>
                                    <input value={zalo} onChange={(e) => setZalo(e.target.value)} type="text" name="slug" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Facebook</label>
                                    <input value={fb} onChange={(e) => setFb(e.target.value)} type="text" name="slug" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Địa chỉ</label>
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="slug" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Youtube</label>
                                    <input value={youtube} onChange={(e) => setYoutube(e.target.value)} type="text" name="slug" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label>Trạng thái</label>
                                    <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" className="form-control">
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Chưa xuất bản</option>
                                    </select>
                                </div>
                                <div className="mb-3 ">
                                    <button className="btn btn-sm btn-success">
                                        <i className="fa fa-save me-1 " aria-hidden="true"></i>
                                        Lưu
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

     );
}

export default Config;