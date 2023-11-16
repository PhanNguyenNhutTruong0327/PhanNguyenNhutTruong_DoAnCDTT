import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import topicservice from "../../../services/TopicServices";
import postservices from "../../../services/PostServices";

function Update() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [topicId, setTopicId] = useState();
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(2);

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        (async () => {
            await postservices.getById(id).then((res)=>{
                setTitle(res.data.post.title);
                setDetail(res.data.post.detail);
                setStatus(res.data.post.status);
                setTopicId(res.data.post.topic_id);
            })
            await topicservice.topicAll().then((res) => {
                setTopics(res.data.topics);
            })
        })()
    }, [])

    async function PostUpdate(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id", topicId);
        post.append("title", title);
        post.append("detail", detail);
        post.append("status", status);
        post.append("type", "post");
        if (image.files.length === 0) {
            post.append("image", "")
        }
        else {
            post.append("image", image.files[0]);
        }

        await postservices.updatePost(post,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/post', { replace: true });
        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Thêm mới bài viết</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <form onSubmit={PostUpdate}>
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/post" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-arrow-left me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
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
                                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" />
                                    </div>
                                    {/* <div class="mb-3">
                                    <label>Slug</label>
                                    <input type="text" name="slug" class="form-control" />
                                </div> */}
                                    <div class="mb-3">
                                        <label>Chi tiết (*)</label>
                                        <textarea name="detail" rows="5" class="form-control" value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label>Chủ đề (*)</label>
                                        <select name="topic_id" class="form-control" value={topicId} onChange={(e) => setTopicId(e.target.value)}>
                                            <option value="">None</option>
                                            {topics.map((top) => {
                                                return (
                                                    <option value={top.id}>{top.name}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" name="image" id="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
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

export default Update;