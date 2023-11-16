import { useEffect, useState } from "react";
import topicservice from "../../../services/TopicServices";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update_Topic() {
    const { id } = useParams('id');
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort, setSort] = useState('');
    const [status, setStatus] = useState(2);

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        (async () => {
            await topicservice.getBySlug(id).then((res) => {
                setName(res.data.topic.name);
                setMetadesc(res.data.topic.metadesc);
                setStatus(res.data.topic.status);
                setSort(res.data.topic.sort_order);
            })

            await topicservice.topicAll().then((res) => {
                setTopics(res.data.topics);
            })
        })();
    }, [])


    async function TopicUpdate(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name);
        topic.append("sort_order", sort);
        topic.append("status", status);
        topic.append("metadesc", metadesc);

        await topicservice.updateTopic(id,topic).then(function (res) {
            alert(res.data.message);
            navigate('/admin/topic', { replace: true });
        })
    }


    return (
        <div className="col">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-9">
                                <h1 class="d-inline">Cập nhật chủ đề</h1>
                            </div>
                            <div class="col-sm-3  ">
                                <div className="text-right ms-5">
                                    <Link to="/admin/topic" class="btn btn-sm btn-info me-3 ">
                                        <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                        Quay lại
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-4">
                                    <form onSubmit={TopicUpdate}>
                                        <div class="mb-3">
                                            <label>Tên chủ đề (*)</label>
                                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Mô tả</label>
                                            <input value={metadesc} onChange={(e) => setMetadesc(e.target.value)} type="text" name="slug" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Sắp xếp</label>
                                            <select value={sort} onChange={(e) => setSort(e.target.value)} name="status" class="form-control">
                                                {topics.map((top) => {
                                                    return (
                                                        <option value={top.sort_order + 1}>Sau: {top.name}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Trạng thái</label>
                                            <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" class="form-control">
                                                <option value="1">Xuất bản</option>
                                                <option value="2">Chưa xuất bản</option>
                                            </select>
                                        </div>
                                        <div class="mb-3 text-right">
                                            <button class="btn btn-sm btn-success">
                                                <i class="fa fa-save me-1 " aria-hidden="true"></i>
                                                Lưu
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Update_Topic;