import { Link } from "react-router-dom";
import { BsPencil,BsTrash3 } from "react-icons/bs";
function Profile_Address() {

    return (
        <div className="">
            {/* <!-- ========================= SECTION PAGETOP ========================= --> */}
            <section class="section-pagetop" style={{ backgroundColor: "#fff0e5", height: "115px" }}>
                <div class="container">
                    <h2 class="title-page fs-4">Tài khoản của tôi</h2>
                </div>{/* <!-- container //  -->*/}
            </section>
            {/*  <!-- ========================= SECTION PAGETOP END// ========================= -->*/}


            {/*   <!-- ========================= SECTION CONTENT ========================= -->*/}
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">
                            <nav class="list-group">
                                <Link class="list-group-item active" to="/pages/profile">Quản lý tài khoản</Link>
                                <Link class="list-group-item" to="/pages/profile/address-profile"> Địa chỉ </Link>
                                <Link class="list-group-item" to="/pages/profile/order-profile"> Đơn hàng </Link>
                                <Link class="list-group-item" to="/pages/profile/setting-profile"> Cài đặt </Link>
                            </nav>
                        </aside> {/* <!-- col.// -->*/}
                        <main class="col-md-9">
                        
                            <a href="#" class=" border border-danger btn btn-light mb-3"><i class="fa fa-plus  text-danger">+  Thêm địa chỉ</i> </a>

                            <div class="row">
                                <div class="col-md-6">
                                    <article class="box mb-4">                                        
                                        <h6>Địa chỉ :</h6>
                                        <p>15A, Tân Hòa 2, Phường Hiệp Phú, Quận 9, Tp Hồ Chí Minh</p>
                                        <a href="#" class="btn btn-light bg-warning disabled"> <i class="fa fa-check"></i> Mặc định</a> 
                                        <a href="#" class="btn btn-light ms-2"> <i class="fa fa-pen"><BsPencil/></i> </a>   
                                        <a href="#" class="btn btn-light ms-2"> <i class="text-danger fa fa-trash"><BsTrash3/></i>  </a>
                                    </article>
                                </div>  
                            </div> 

                        </main> 
                    </div>

                </div> 
            </section>
            {/*  <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}




export default Profile_Address;