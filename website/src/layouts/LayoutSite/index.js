import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function LayoutSite(props) {
    return (
        <div className="layout_site">
            <Header />
            <Outlet />
            <Footer />
        </div>


    )
}

export default LayoutSite;