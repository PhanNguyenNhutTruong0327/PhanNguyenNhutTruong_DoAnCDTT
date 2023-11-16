import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menuservices from "../../../services/MenuServices";

function Menu_List() {

    const [menus, setMenus] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [topics, setTopics] = useState([]);
    const [pages, setPage] = useState([]);
    const [tamp, setTamp] = useState(0);
    const [count_trash, setCountTrash] = useState(0);
    const [count_menu, setCountMenu] = useState(0);

    const [name, setName] = useState('');
    const [link, setLink] = useState('');



    useEffect(() => {
        (async () => {
            await menuservices.getMenuAll().then((res) => {
                setMenus(res.data.menus);
                setCountMenu(res.data.count_menu);
                setCountTrash(res.data.count_trash);
                setBrands(res.data.brands);
                setTopics(res.data.topics);
                setPage(res.data.pages);
                setCategories(res.data.categories);
            })
        })()
    }, [tamp])

    // create 
    // async function menuCreate(event) {
    //     event.preventDefault();
    //     var menu = new FormData();
    //     menu.append("name", name);
    //     menu.append("link", link);
    //     menu.append("position","mainmenu");
    //     menu.append("address", address);
    //     menu.append("menuname", menuname);
    //     menu.append("roles", 'customer');
    //     menu.append("password", password);
    //     menu.append("status", status);
    //     menu.append("image", image.files[0]);

    //     await menuservices.create(menu).then(function (res) {
    //         alert(res.data.message);
    //         navigate('/admin/customer', { replace: true });
    //     })
    // }
    // checkbox

    const [isChecked, setIsChecked] = useState();


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Checkbox value:', isChecked);
        // Thực hiện các thao tác khác với dữ liệu đã lấy được từ checkbox
    };



    // trash
    function menuTrash(id) {
        menuservices.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-11">
                            <h1 class="d-inline">Tất cả menu <sup style={{ fontSize: "14px" }}>({count_menu})</sup></h1>
                        </div>
                        <div class="col-sm-1 text-right ">
                            <div className="d-flex ms-5">
                                {/* <Link to="/admin/menu/create" class="btn btn-sm btn-primary me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thêm
                                </Link> */}
                                <Link to="/admin/menu/trash" class="action-btn" style={{ color: "red" }}>
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
                    <div class="card-header text-right">
                        Noi dung
                    </div>
                    <div class="card-body p-2">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="accordion" id="accordionExample">
                                    <div class="card mb-0 p-3">
                                        <select name="postion" class="form-control">
                                            <option value="mainmenu">Main Menu</option>
                                            <option value="footermenu">Footer Menu</option>
                                        </select>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingCategory">
                                            <strong data-toggle="collapse" data-target="#collapseCategory" aria-expanded="true"
                                                aria-controls="collapseCategory">
                                                Danh mục sản phẩm
                                            </strong>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div id="collapseCategory" class="collapse" aria-labelledby="headingCategory"
                                                data-parent="#accordionExample">
                                                <div class="card-body p-3">
                                                    {categories.map((cat) => {
                                                        return (
                                                            <div class="form-check">
                                                                <input name="categoryId[]" class="form-check-input" type="checkbox" value={cat.id}
                                                                    id="categoryId" onChange={handleCheckboxChange} />
                                                                <label class="form-check-label" for="categoryId">
                                                                    {cat.name}
                                                                </label>
                                                            </div>

                                                        );
                                                    })}
                                                    <div class="my-3">
                                                        <button name="ADDCATEGORY" class="btn btn-sm btn-success form-control">Thêm</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingBrand">
                                            <strong data-toggle="collapse" data-target="#collapseBrand" aria-expanded="true"
                                                aria-controls="collapseBrand">
                                                Thương hiệu
                                            </strong>
                                        </div>
                                        <div id="collapseBrand" class="collapse" aria-labelledby="headingBrand"
                                            data-parent="#accordionExample">
                                            <div class="card-body p-3">
                                                {brands.map((brand) => {
                                                    return (
                                                        <div class="form-check">
                                                            <input name="BrandId[]" class="form-check-input" type="checkbox" value=""
                                                                id="BrandId" />
                                                            <label class="form-check-label" for="BrandId">
                                                                {brand.name}
                                                            </label>
                                                        </div>

                                                    );
                                                })}
                                                <div class="my-3">
                                                    <button name="ADDBRAND" class="btn btn-sm btn-success form-control">Thêm</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingTopic">
                                            <strong data-toggle="collapse" data-target="#collapseTopic" aria-expanded="true"
                                                aria-controls="collapseTopic">
                                                Chủ đề bài viết
                                            </strong>
                                        </div>
                                        <div id="collapseTopic" class="collapse" aria-labelledby="headingTopic"
                                            data-parent="#accordionExample">
                                            <div class="card-body p-3">
                                                {topics.map((top) => {
                                                    return (
                                                        <div class="form-check">
                                                            <input name="TopicId[]" class="form-check-input" type="checkbox" value=""
                                                                id="TopicId" />
                                                            <label class="form-check-label" for="TopicId">
                                                                {top.name}
                                                            </label>
                                                        </div>

                                                    );
                                                })}
                                                <div class="my-3">
                                                    <button name="ADDTOPIC" class="btn btn-sm btn-success form-control">Thêm</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingPage">
                                            <strong data-toggle="collapse" data-target="#collapsePage" aria-expanded="true"
                                                aria-controls="collapsePage">
                                                Trang đơn
                                            </strong>
                                        </div>
                                        <div id="collapsePage" class="collapse" aria-labelledby="headingPage"
                                            data-parent="#accordionExample">
                                            <div class="card-body p-3">
                                                {pages.map((page) => {
                                                    return (
                                                        <div class="form-check">
                                                            <input name="PageId[]" class="form-check-input" type="checkbox" value=""
                                                                id="PageId" />
                                                            <label class="form-check-label" for="PageId">
                                                                {page.title}
                                                            </label>
                                                        </div>

                                                    );
                                                })}
                                                <div class="my-3">
                                                    <button name="ADDPAGE" class="btn btn-sm btn-success form-control">Thêm</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingCustom">
                                            <strong data-toggle="collapse" data-target="#collapseCustom" aria-expanded="true"
                                                aria-controls="collapseCustom">
                                                Tuỳ liên kết
                                            </strong>
                                        </div>
                                        <div id="collapseCustom" class="collapse" aria-labelledby="headingCustom"
                                            data-parent="#accordionExample">
                                            <form >
                                                <div class="card-body p-3">
                                                    <div class="mb-3">
                                                        <label>Tên menu</label>
                                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" class="form-control" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label>Liên kết</label>
                                                        <input value={link} onChange={(e) => setLink(e.target.value)} type="text" name="link" class="form-control" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <button name="ADDCUSTOM" class="btn btn-sm btn-success form-control">Thêm</button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th>Tên menu</th>
                                            <th>Liên kết</th>
                                            <th>Vị trí</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {menus.map((menu) => {
                                            return (
                                                <tr class="datarow">
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {menu.name}
                                                        </div>
                                                        <div class="function_style d-flex" style={{ fontSize: "14px" }}>
                                                            <a href="#" style={{ margin: "0px 2px" }} class="">Hiện</a> |
                                                            <Link to={`/admin/menu/update/${menu.id}`} style={{ margin: "0px 2px" }}><i class="fas fa-edit"></i> Chỉnh sửa</Link> |
                                                            <Link to={`/admin/menu/show/${menu.id}`} style={{ margin: "0px 2px" }}><i class="fa fa-eye"></i> Chi tiết</Link> |
                                                            <button onClick={() => menuTrash(menu.id)} style={{ margin: "0px 2px" }}><i class="fa fa-trash"></i> Xoá</button>
                                                        </div>
                                                    </td>
                                                    <td>{menu.link}</td>
                                                    <td>{menu.position}</td>
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

export default Menu_List;