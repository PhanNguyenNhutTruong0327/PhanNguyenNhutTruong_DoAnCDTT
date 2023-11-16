import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sliderservices from "../../../services/SliderServices";
import { urlImage } from "../../../config";

function Slider_Show() {
    const {id} = useParams();
    const [slider,setSlider] = useState([]);

    useEffect(()=>{
        (async ()=>{
            await sliderservices.getById(id).then((res)=>{
                setSlider(res.data.slider);
            })
        })()
    },[])

    let status = "Chưa xuất bản";
    if(slider.status === 1){
        status = "Xuất bản"
    }

    return ( 
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <h1 class="d-inline">Chi tiết banner</h1>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section class="content">
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/slider" class="btn btn-sm btn-info">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
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
                                        <td>{slider.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Hình ảnh </th>
                                        <td>
                                            <img src={urlImage + "Slider/" + slider.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Tên Banner</th>
                                        <td>{slider.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Mô tả</th>
                                        <td>{slider.description}</td>
                                    </tr>
    
                                    <tr>
                                        <th>Liên kết</th>
                                        <td>{slider.link}</td>
                                    </tr>
                                    <tr>
                                        <th>Vị trí</th>
                                        <td>{slider.position}</td>
                                    </tr>
                                    <tr>
                                        <th>Sắp xếp</th>
                                        <td>{slider.sort_order}</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng thái</th>
                                        <td>{status}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày thêm</th>
                                        <td>{slider.created_at}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày cập nhật</th>
                                        <td>{slider.updated_at}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
    
        );
    
     
}

export default Slider_Show;