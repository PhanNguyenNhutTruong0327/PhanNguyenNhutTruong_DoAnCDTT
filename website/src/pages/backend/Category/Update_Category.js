import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";

function Update_Category() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [categories, setCategories] = useState([]);


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    const [parentId, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);

    useEffect(() => {
        (async () => {
            await categoryservice.getById(id).then((res) => {
                setName(res.data.category.name);
                setSortOrder(res.data.category.sort_order);
                setStatus(res.data.category.status);
                setDescription(res.data.category.description);
                setParentId(res.data.category.parent_id);
            })
        })();
    }, [])

    useEffect(()=>{
        (async ()=>{
            await categoryservice.getCatAll().then((res)=>{
                setCategories(res.data.categoies);
            })
        })()
    },[])

    // update
    async function CategoryUpdate(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("description", description);
        category.append("parent_id", parentId);
        category.append("sort_order", sort_order);
        category.append("status", status);
        if (image.files.length === 0) {
            category.append("image", "")
        }
        else {
            category.append("image", image.files[0]);
        }

        await categoryservice.update(id,category).then(function (res) {
            alert(res.data.message);
            navigate('/admin/category', { replace: true });

        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-10">
                            <h1 class="d-inline">Cập nhật danh mục</h1>
                        </div>
                        <div className="col-sm-2 mt-2 text-right">
                            <Link to="/admin/category" class="btn btn-sm btn-info">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-5">
                                <form onSubmit={CategoryUpdate} >
                                    <div class="mb-3">
                                        <label>Tên danh mục (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Nhập tên danh mục" class="form-control"
                                            onkeydown="handle_slug(this.value);" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả</label>
                                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="slug" id="slug" placeholder="Nhập mô tả" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Danh mục cha (*)</label>
                                        <select value={parentId} onChange={(e) => setParentId(e.target.value)} name="parent_id" class="form-control">
                                            <option value="0">None</option>
                                            {categories.map((cat) => {
                                                return (
                                                    <option value={cat.id}>{cat.name}</option>

                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp (*)</label>
                                        <select value={sort_order} onChange={(e) => setSortOrder(e.target.value)} name="parent_id" class="form-control">
                                            {categories.map((cat) => {
                                                return (
                                                    <option value={cat.sort_order + 1}>Sau: {cat.name} {cat.sort_order}</option>
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
                                        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" class="form-control">
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="card-header text-right">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Update_Category;