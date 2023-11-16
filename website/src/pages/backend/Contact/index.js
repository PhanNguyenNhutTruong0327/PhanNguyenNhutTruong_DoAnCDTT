import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contactservices from "../../../services/ContactServices";

function Contact_List() {
    const [contact, setContact] = useState([]);
    const [count_trash, setCountTrash] = useState(0);
    const [count_contact, setCountContact] = useState(0);
    const [tamp,setTamp] = useState(0);

    useEffect(() => {
        (async () => {
            await contactservices.getContactAll().then((res) => {
                setContact(res.data.contacts);
                setCountContact(res.data.count_contact);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])

    function contactTrash(id) {
        contactservices.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-11">
                                    <h1 class="d-inline">Tất cả liên hệ <sup>({count_contact})</sup></h1>
                                </div>
                                <div class="col-sm-1 text-right ">
                                    <div className="d-flex ms-5">
                                        <Link to="/admin/contact/trash" class="action-btn" style={{ color: "red" }}>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                            <sup class="count ms-1">{(count_trash)}</sup>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-9 d-flex">
                                <select name="" id="" class="form-control d-inline" style={{ width: "100px" }}>
                                    <option value="">Xoá</option>
                                </select>
                                <button class="btn btn-sm btn-success ms-2">Áp dụng</button>
                            </div>
                            <div class="col-3 ">
                                <div className="d-flex float-right">
                                    <input type="text" class="form-control" style={{ width: "100%", height: "70%" }} />
                                    <button className="btn"><i class="fa fa-search "></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered" id="mytable">
                            <thead>
                                <tr>
                                    <th class="text-center" style={{ width: "30px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th>Họ tên</th>
                                    <th>Điện thoại</th>
                                    <th>Email</th>
                                    <th>Tiêu đề</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contact.map((con) => {
                                    return (
                                        <tr class="datarow">
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <div class="name">
                                                    {con.name}
                                                </div>
                                                <div class="function_style d-flex" style={{ fontSize: "14px" }}>
                                                    <a href="#" style={{margin:"0px 3px"}}>Hiện</a> |
                                                    <a href="#" style={{margin:"0px 3px"}}>Trả lời</a> |
                                                    <Link to={`/admin/contact/show/${con.id}`} style={{margin:"0px 3px"}}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                    <button onClick={()=>contactTrash(con.id)}  style={{margin:"0px 3px"}}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                </div>
                                            </td>
                                            <td>{con.phone}</td>
                                            <td>{con.email}</td>
                                            <td>{con.title}</td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination justify-content-center">
                        {/* <Pagination page={page} count={end_page} onChange={handleChange} /> */}

                    </div>

                </div>
            </section>
        </div>

    );
}

export default Contact_List;