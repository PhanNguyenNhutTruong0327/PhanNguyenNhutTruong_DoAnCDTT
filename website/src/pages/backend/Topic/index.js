import { useEffect, useState } from "react";
import topicservice from "../../../services/TopicServices";
import { Link } from "react-router-dom";

function Topic_List() {
    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort, setSort] = useState('');
    const [status, setStatus] = useState(2);
    const [cuont, setCuont] = useState(0);

    const [tamp, setTamp] = useState(false);
    const [countdel, setCountDel] = useState(0);
    const [dem,setDem] = useState(0);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        (async () => {
            await topicservice.topicAll().then((res) => {
                setTopics(res.data.topics);
                setCuont(res.data.count);
                setDem(res.data.count_trash);
                setTamp(false);
            })
        })();
    }, [tamp, countdel])


    async function TopicStore(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name);
        topic.append("sort_order", sort);
        topic.append("status", status);
        topic.append("metadesc", metadesc);

        await topicservice.create(topic).then(function (res) {
            alert(res.data.message);
            // navigate('/admin/brand', { replace: true });
            setTamp(res.data.success);
        })
    }


    // delete
    function topicTrash(id) {
        topicservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setCountDel(id);
        })
    }



    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Tất cả chủ đề <sup style={{ fontSize: "1rem" }}>({cuont})</sup></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link class="action-btn" to="/admin/topic/trash" style={{ color: "red" }}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <sup class="count ms-1">{dem}</sup>
                        </Link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <form onSubmit={TopicStore}>
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
                            {/* table */}
                            <div class="col-md-8">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }} >
                                                <input type="checkbox" />
                                            </th>
                                            <th>Tên chủ đề</th>
                                            <th>Tên slug</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topics.map((top) => {
                                            return (
                                                <tr class="datarow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        <div class="name">{top.name}</div>
                                                        <div class="function_style d-flex ">
                                                            <a href="#" style={{ fontSize: "14px" }} className="pt-1">Hiện</a> |
                                                            <Link to={`/admin/topic/update/${top.id}`} className="pt-1" style={{ fontSize: "14px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                            <Link to={`/admin/topic/show/${top.id}`} className="pt-1" style={{ fontSize: "14px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                            <button  onClick={() => topicTrash(top.id)} style={{ fontSize: "14px" }}><i class="fa fa-trash"></i> Xoá</button>
                                                        </div>
                                                    </td>
                                                    <td>{top.slug}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Topic_List;
