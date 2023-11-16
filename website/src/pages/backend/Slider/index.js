import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sliderservices from "../../../services/SliderServices";
import { urlImage } from "../../../config";

function Slider_List() {
    const [slider,setSlider] = useState([]);
    const [count_slider,setCountSlider] = useState(0);
    const [count_trash,setCountTrash] = useState(0);
    const [tamp,setTamp] = useState(0);

    useEffect(()=>{
        (async ()=>{
            await sliderservices.getSliderAll().then((res)=>{
                setSlider(res.data.sliders);
                setCountSlider(res.data.count_slider);
                setCountTrash(res.data.count_trash);
            })
        })()
    },[tamp])

    function sliderTrash(id) {
        sliderservices.deleteTrash(id).then(function (result) {
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
                            <h1 class="d-inline">Tất cả banner <sup style={{fontSize:"14px"}}>({count_slider})</sup></h1>
                        </div>
                        <div class="col-sm-2 text-right ">
                            <div className="d-flex ms-5">
                                <Link to="/admin/slider/create" class="btn btn-sm btn-primary me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link>
                                <Link to="/admin/slider/trash" class="action-btn" style={{ color: "red" }}>
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
                                    <th>Tên banner</th>
                                    <th>Liên kết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slider.map((sli)=>{
                                    return(
                                        <tr class="datarow">
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <img className="img-fluid" src={urlImage + "Slider/" + sli.image} alt="banner.jpg" />
                                        </td>
                                        <td>
                                            <div class="name">
                                                {sli.name}
                                            </div>
                                            <div class="function_style d-flex" style={{fontSize:"14px"}}>
                                                <a href="#" style={{ margin: "0px 2px" }} class="">Hiện</a> |
                                                <Link to={`/admin/slider/update/${sli.id}`} style={{ margin: "0px 2px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                <Link to={`/admin/slider/show/${sli.id}`} style={{ margin: "0px 2px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                <button onClick={() => sliderTrash(sli.id)} style={{ margin: "0px 2px" }}><i class="fa fa-trash"></i> Xoá</button>
                                            </div>
                                        </td>
                                        <td>{sli.link}</td>
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

export default Slider_List;