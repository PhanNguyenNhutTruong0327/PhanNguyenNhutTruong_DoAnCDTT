import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postservices from "../../../services/PostServices";
import { urlImage } from "../../../config";
import pageservices from "../../../services/PageServices";
import "./style.css";

function Page() {
    const [pages, setPages] = useState([]);
    const [countPage, setCountPage] = useState(0);
    const [countTrash, setCountTrash] = useState(0);
    const [tamp, setTamp] = useState(0);

    useEffect(() => {
        (async () => {
            await pageservices.getPageAll().then((res) => {
                setPages(res.data.page);
                setCountPage(res.data.count_page);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])

    function pageTrash(id) {
        postservices.deleteTrash(id).then(function (result) {
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
                            <h1 class="d-inline">Tất cả trang đơn <sup style={{ fontSize: "14px" }}>({countPage})</sup></h1>
                        </div>
                        <div class="col-sm-2 text-right ">
                            <div className="d-flex ms-5">
                                <Link to="/admin/page/create" class="btn btn-sm btn-primary me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link>
                                <Link to="/admin/page/trash" class="action-btn" style={{ color: "red" }}>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                    <sup class="count ms-1">{countTrash}</sup>
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
                                    <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                    <th style={{ width: "400px" }}>Tên trang đơn </th>
                                    <th class="" >Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pages.map((page) => {
                                    return (
                                        <tr class="datarow">
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img className="img-fluid" src={urlImage + "Post/" + page.image} alt="page.jpg" />
                                            </td>
                                            <td>
                                                <div class="name">
                                                    {page.title}
                                                </div>
                                                <div class="function_style d-flex" style={{ fontSize: "14px" }}>
                                                    <a href="#" style={{ margin: "0px 2px" }} class="">Hiện</a> |
                                                    <Link to={`/admin/page/update/${page.id}`} style={{ margin: "0px 2px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                    <Link to={`/admin/page/show/${page.id}`} style={{ margin: "0px 2px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                    <button onClick={() => pageTrash(page.id)} style={{ margin: "0px 2px" }}><i class="fa fa-trash"></i> Xoá</button>
                                                </div>
                                            </td>
                                            <td>
                                                <p id="page-detail">{page.detail}</p>
                                            </td>
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

export default Page;