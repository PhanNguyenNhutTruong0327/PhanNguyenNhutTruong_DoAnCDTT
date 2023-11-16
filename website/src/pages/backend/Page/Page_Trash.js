import { useEffect, useState } from "react";
import pageservices from "../../../services/PageServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function Page_Trash() {

    const [trash,setTrash] = useState([]);
    const [countTrash,setCountTrash] = useState(0);
    const [tamp,setTamp] = useState(0);

    useEffect(()=>{
        (async ()=>{
            await pageservices.getTrash().then((res)=>{
                setTrash(res.data.trash);
                setCountTrash(res.data.count_trash);
            })
        })()
    },[tamp])


    function RescoverTrash(id) {
        pageservices.RescoverTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    function deleted(id) {
        pageservices.remove(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    if (trash.length === 0) {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-9">
                                        <h1 class="d-inline">Thùng rác <sup style={{fontSize:"14px"}}>({countTrash})</sup></h1>
                                    </div>
                                    <div class="col-sm-3  ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/page" class="btn btn-sm btn-info me-3 ">
                                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
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

                            <h6>Hiện không có bài viết nào !</h6>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
    else {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-9">
                                        <h1 class="d-inline">Thùng rác <sup style={{fontSize:"14px"}}>({countTrash})</sup></h1>
                                    </div>
                                    <div class="col-sm-3  ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/page" class="btn btn-sm btn-info me-3 ">
                                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
                                            </Link>
                                            {/* <button class="action-btn" style={{ color: "red" }}>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                    <sup class="count ms-1">0</sup>
                                                </button> */}

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
                                        <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                        <th style={{ width: "300px" }}>Tên thương hiệu</th>
                                        <th>Mô tả</th>
                                        <th>Slug</th>
                                        <th>Ngày xóa</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trash.map((tra, index) => {
                                        return (
                                            <tr class="datarow" key={index} >
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>
                                                    <img src={urlImage + 'Post/' + tra.image} style={{ width: "100%" }} />
                                                </td>
                                                <td>
                                                    <div class="name">
                                                        {tra.title}
                                                    </div>
                                                    <div class="function_style d-flex">
                                                        <Link to={`/admin/page/show/${tra.id}`} style={{fontSize:"14px"}}><i className="fa fa-eye me-1"></i>Chi tiết</Link> 
                                                    </div>
                                                </td>
                                                <td>{tra.description}</td>
                                                <td>{tra.slug}</td>
                                                <td>{tra.updated_at}</td>
                                                <td className="text-center">
                                                    <button onClick={() => RescoverTrash(tra.id)} className="btn btn-outline-success me-2">
                                                        <i class="fa fa-history" aria-hidden="true"></i>
                                                    </button>
                                                    <button onClick={() => deleted(tra.id)} className="btn btn-outline-danger">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </td>
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
}

export default Page_Trash;