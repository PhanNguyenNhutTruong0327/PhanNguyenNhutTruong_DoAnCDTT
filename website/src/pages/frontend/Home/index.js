import Product from "./product_home/Product";
import Testimonials_cta_service from "./Testimonials_cta_service";
import Blog from "./Blog";
import Banner from "./Banner";
function Home() {
    return (
        <div className="container">
            <div className="all-home">
                <Banner />
                <Product />
                <Testimonials_cta_service />
                <Blog />
            </div>
        </div>
    );
}

export default Home;