import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import topicservice from "../../../services/TopicServices";

function Show_Topic() {
    const {id} = useParams();

    const [topic,setTopic] = useState([]);
    let status = 'Chưa xuất bản';

    useEffect(()=>{
        (async ()=>{
            await topicservice.getBySlug(id).then((res)=>{
                setTopic(res.data.topic);
            })
        })();
    },[])

    if(topic.status === 1){
        status = 'Xuất bản';
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
                        <Link to="/admin/topic" class="btn btn-sm btn-info">
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
                                    <td>{topic.id}</td>
                                </tr>
                                <tr>
                                    <th>Tên thương hiệu</th>
                                    <td>{topic.name}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{topic.slug}</td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{topic.metadesc}</td>
                                </tr>
                                <tr>
                                    <th>Thứ tự</th>
                                    {/* <td>{topic.sort_order}</td> */}
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{topic.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Show_Topic;