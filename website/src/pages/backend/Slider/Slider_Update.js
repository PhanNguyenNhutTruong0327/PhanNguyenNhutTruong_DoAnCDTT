import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import sliderservices from "../../../services/SliderServices";

function Slider_Update() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [sliders,setSliders] = useState([]);

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [link,setLink] = useState('');
    const [sub_title,setSubTitle] = useState('');
    const [sort_order,setSortOrder] = useState(0);
    const [position,setPosition] = useState('');
    const [status,setStatus] = useState(2);

    useEffect(()=>{
        (async ()=>{
            await sliderservices.getById(id).then((res)=>{
                setName(res.data.slider.name);
                setStatus(res.data.slider.status);
                setDescription(res.data.slider.description);
                setLink(res.data.slider.link);
                setSortOrder(res.data.slider.sort_order);
                setPosition(res.data.slider.position);
            })
            await sliderservices.getSliderAll().then((res)=>{
                setSliders(res.data.sliders);
            })
        })()
    },[])

    async function sliderUpdate(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("description", description);
        slider.append("link", link);
        slider.append("sub_title", sub_title);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "")
        }
        else {
            slider.append("image", image.files[0]);
        }
        await sliderservices.update(id,slider).then(function (res) {
            alert(res.data.message);
            navigate('/admin/slider', { replace: true });
        })
    }


    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Thêm mới banner</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <form onSubmit={sliderUpdate}>
                    <div class="card">
                        <div class="card-header text-right">
                            <Link href="/admin/slider" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button type="submit" class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label>Tên banner (*)</label>
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Liên kết</label>
                                        <input value={link} onChange={(e)=>setLink(e.target.value)} type="text" name="link" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả (*)</label>
                                        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} name="detail" rows="5" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label>Vị trí (*)</label>
                                        <select value={position} onChange={(e)=>setPosition(e.target.value)} name="position" class="form-control">
                                            <option value="">None</option>
                                            <option value="slider_main">Slider Main</option>
                                            <option value="footer">Footer</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp</label>
                                        <select value={sort_order} onChange={(e)=>setSortOrder(e.target.value)} name="position" class="form-control">
                                            <option value="">None</option>
                                            {sliders.map((sli)=>{
                                                return(
                                                    <option value={sli.sort_order + 1}>Sau: {sli.name}</option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label>Hình (*)</label>
                                        <input type="file" name="image" id="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select value={status} onChange={(e)=>setStatus(e.target.value)} name="status" class="form-control">
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

export default Slider_Update;