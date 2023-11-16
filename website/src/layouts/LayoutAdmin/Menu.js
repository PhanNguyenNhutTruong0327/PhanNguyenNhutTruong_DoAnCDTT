import { Link } from "react-router-dom";
import "./style.css";
import urlImage from "../../config.js";

function Menu() {
    return (
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="../backend/index.html" class="brand-link">
           <img src="http://localhost/PhanNguyenNhutTruong_Laravel/public/images/User/avt.jpg" alt="AdminLTE Logo"
              class="brand-image img-circle elevation-3" style={{opacity:" .8"}}/>
           <span class="brand-text font-weight-light">QUẢN TRỊ</span>
        </a>
        <div class="sidebar">
           <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                 <img src="http://localhost/PhanNguyenNhutTruong_Laravel/public/images/User/avt.jpg" class="img-circle elevation-2" alt="User Image"/>
              </div>
              <div class="info">
                 <a href="#" class="d-block">Nhựt Trường</a>
              </div>
           </div>
           <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                 data-accordion="false">
                 <li class="nav-item">
                    <Link href="#" class="nav-link">
                       <i class="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Sản phẩm
                          <i class="right fas fa-angle-left"></i>
                       </p>
                    </Link>
                    <ul class="nav nav-treeview">
                       <li class="nav-item">
                          <Link to="/admin/product" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Tất cả sản phẩm</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/category" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Danh mục</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/brand" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Thương hiệu</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/product/sale" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Sản phẩm khuyến mãi</p>
                          </Link>
                       </li>

                    </ul>
                 </li>
                 <li class="nav-item">
                    <a href="#" class="nav-link">
                       <i class="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Bài viết
                          <i class="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul class="nav nav-treeview">
                       <li class="nav-item">
                          <Link to="/admin/post" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Tất cả bài viết</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/topic" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Chủ đề</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/page" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Trang đơn</p>
                          </Link>
                       </li>
                    </ul>
                 </li>
                 <li class="nav-item">
                    <a href="#" class="nav-link">
                       <i class="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Quản lý bán hàng
                          <i class="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul class="nav nav-treeview">
                       <li class="nav-item">
                          <Link to="/admin/order" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Tất cả đơn hàng</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/product/import" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Nhập hàng</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/product/export" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Xuất hàng</p>
                          </Link>
                       </li>
                    </ul>
                 </li>
                 <li class="nav-item">
                    <Link to="/admin/customer" class="nav-link">
                       <i class="nav-icon far fa-circle text-danger"></i>
                       <p class="text">Khách hàng</p>
                    </Link>
                 </li>
                 <li class="nav-item">
                    <Link to="/admin/contact" class="nav-link">
                       <i class="nav-icon far fa-circle text-danger"></i>
                       <p class="text">Liên hệ</p>
                    </Link>
                 </li>
                 <li class="nav-item">
                    <a href="#" class="nav-link">
                       <i class="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Giao diện
                          <i class="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul class="nav nav-treeview">
                       <li class="nav-item">
                          <Link to="/admin/menu" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Menu</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/slider" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Banner</p>
                          </Link>
                       </li>
                    </ul>
                 </li>
                 <li class="nav-item">
                    <a href="#" class="nav-link">
                       <i class="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Hệ thống
                          <i class="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul class="nav nav-treeview">
                       <li class="nav-item">
                          <Link to="/admin/user" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Thành viên</p>
                          </Link>
                       </li>
                       <li class="nav-item">
                          <Link to="/admin/config" class="nav-link">
                             <i class="far fa-circle nav-icon"></i>
                             <p>Cấu hình</p>
                          </Link>
                       </li>
                    </ul>
                 </li>
              </ul>
           </nav>
        </div>
     </aside>
    );
}

export default Menu;