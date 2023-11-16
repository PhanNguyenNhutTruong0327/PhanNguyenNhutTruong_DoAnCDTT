import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../../services/CategoryServices";
import { urlImage } from "../../../config";

function Category_List() {

    const [categories, setCategories] = useState([]);
    const [countCat, setCountCat] = useState(0);
    const [countTrash, setCountTrash] = useState(0);
    const [tamp1, setTamp1] = useState(false);
    const [tamp2, setTamp2] = useState();

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [status, setStatus] = useState(2);
    const [parentId,setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);

    useEffect(() => {
        (async () => {
            await categoryservice.getCatAll().then((res) => {
                setCategories(res.data.categoies);
                setCountCat(res.data.count_cat);
                setCountTrash(res.data.count_trash);
                setTamp1(false);
            })
        })();
    }, [tamp1, tamp2])

    // luu
    async function CategoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("description", description);
        category.append("parent_id", parentId);
        category.append("sort_order", sort_order);
        category.append("status", status);
        category.append("image", image.files[0]);

        await categoryservice.create(category).then(function (res) {
            alert(res.data.message);
            setTamp1(res.data.success);
            
        })
    }



    // trash
    function catTrash(id) {
        categoryservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp2(id);
        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-11">
                            <h1 class="d-inline">Tất cả danh mục <sup style={{ fontSize: "14px" }}>({countCat})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link class="action-btn" to="/admin/category/trash" style={{ color: "red" }}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <sup class="count ms-1">{countTrash}</sup>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <form onSubmit={CategoryStore}>
                                    <div class="mb-3">
                                        <label>Tên danh mục (*)</label>
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Nhập tên danh mục" class="form-control"
                                            onkeydown="handle_slug(this.value);" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả</label>
                                        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name="slug" id="slug" placeholder="Nhập mô tả" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Danh mục cha (*)</label>
                                        <select value={parentId} onChange={(e)=>setParentId(e.target.value)} name="parent_id" class="form-control">
                                            <option value="0">None</option>
                                            {categories.map((cat)=>{
                                                return(
                                                    <option value={cat.id}>{cat.name}</option>

                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp (*)</label>
                                        <select value={sort_order} onChange={(e) => setSortOrder(e.target.value)} name="parent_id" class="form-control">
                                            {categories.map((cat)=>{
                                                return(
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
                                        <select value={status} onChange={(e)=>setStatus(e.target.value)} name="status" class="form-control">
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
                            <div class="col-md-8">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th>Tên danh mục</th>
                                            <th>Tên Slug</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map((cat) => {
                                            return (
                                                <tr class="datarow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        <img src={urlImage + "Category/" + cat.image} alt="category.jpg" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {cat.name}
                                                        </div>
                                                        <div class="function_style d-flex" style={{ fontSize: "14px" }}>
                                                            {/* <button className="">Hiện</button> | */}
                                                            <Link to={`/admin/category/update/${cat.id}`} style={{ margin: "0px 3px" }}><i className="fa fa-edit me-1"></i>Chỉnh sửa</Link> |
                                                            <Link to={`/admin/category/show/${cat.id}`} style={{ margin: "0px 3px" }}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                            <button onClick={() => catTrash(cat.id)} style={{ margin: "0px 3px" }}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                        </div>
                                                    </td>
                                                    <td>{cat.slug}</td>
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

export default Category_List;