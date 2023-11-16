import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import "./style.css";
import "../../assets/backend/dist/js/adminlte.min.js";


function LayoutAdmin() {
    return (
        // <div className="all-admin">
        //     <div className="row">
        //         <div className="col-3">
        //             <Menu />
        //         </div>
        //         <div className="col-9">
        //             <Header />
        //             <section className="maincontent">
        //                 <div className="container-fluid my-3">
        //                     <Outlet />
        //                 </div>
        //             </section>
        //             <Footer />
        //         </div>
        //     </div>

        // </div>
        <div class="admin hold-transition sidebar-mini">
            <div class="wrapper">
                <Header />
                <Menu/>
                <Outlet/>
                <Footer />
            </div>
        </div>
    );
}

export default LayoutAdmin;