import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pageservices from "../../../services/PageServices";

function Page_Update() {
    const navigate = useNavigate();
    const {id} = useParams('id');
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(2);

    useEffect(()=>{
        (async ()=>{
            await pageservices.getPageById(id).then((res)=>{
                setTitle(res.data.page.title);
                setDetail(res.data.page.detail);
                setStatus(res.data.page.status);
            })
        })();
    },[])

    async function PageStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var page = new FormData();
        page.append("topic_id", 0);
        page.append("title", title);
        page.append("detail", detail);
        page.append("status", status);
        page.append("type", "page");
        if (image.files.length === 0) {
            page.append("image", "")
        }
        else {
        page.append("image", image.files[0]);
        }

        await pageservices.updatePage(id,page).then(function (res) {
            alert(res.data.message);
            navigate('/admin/page', { replace: true });
        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Cập nhật trang đơn</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <form onSubmit={PageStore}>
                    <div class="card">
                        <div class="card-header text-right">
                            <a href="/admin/page" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </a>
                            <button class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label>Tiêu đề bài viết (*)</label>
                                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" class="form-control" />
                                    </div>
                                    {/* <div class="mb-3">
                                        <label>Slug</label>
                                        <input type="text" name="slug" class="form-control" />
                                    </div> */}
                                    <div class="mb-3">
                                        <label>Chi tiết (*)</label>
                                        <textarea value={detail} onChange={(e)=>setDetail(e.target.value)} name="detail" rows="5" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
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

export default Page_Update;