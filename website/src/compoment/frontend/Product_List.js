import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css"
import { useCart } from "react-use-cart";

function Product_List(props) {
    const { addItem } = useCart();
    const addToCart = () => {
        addItem(props.product);
    }

    return (
        <div className="product-list">
            <article class="card card-product-list">
                <div class="row no-gutters">
                    <aside class="col-md-4">
                        <Link to={`/pages/san-pham/chi-tiet-san-pham/${props.product.id}`} class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                            <img src={urlImage + "Product/" + props.product.image} alt="san pham" style={{width:"100%"}}/>
                        </Link>
                    </aside>
                    <div class="col-md-5">
                        <div class="info-main">
                            <Link to={`/pages/san-pham/chi-tiet-san-pham/${props.product.id}`} class="h5 title">{props.product.name}</Link>
                            {/* <div class="rating-wrap mb-2">
                                 <ul class="rating-stars">
                                    <li style={{width:"100%"}} class="stars-active">
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <div class="label-rating">9/10</div>
                            </div>  */}

                            <p class="mb-2">
                                <span class="tag"> <i class="fa fa-check"></i> Verified</span>
                                <span class="tag"> 5 Years </span>
                                <span class="tag"> 80 reviews </span>
                                <span class="tag"> Russia </span>
                            </p>

                            <p className="list-item-detail">{props.product.detail}</p>

                        </div>
                    </div>
                    <aside class="col-sm-3">
                        <div class="info-aside">
                            <div class="price-wrap">
                                <span class="h5 price">{props.product.price}.000 đ</span>
                                {/* <small class="text-muted">.000 đ</small> */}
                            </div>
                            <small class="text-warning">Paid shipping</small>

                            <p class="text-muted mt-2">Grand textile Co</p>
                            <p class="mt-3 d-flex">
                                <Link to="/pages/lien-he" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Liên hệ </Link>
                                <button class="btn btn-outline-warning ms-2" onClick={() => addToCart()}><AiOutlineShoppingCart/></button>
                            </p>

                            {/* <label class="custom-control mt-3 custom-checkbox">
                                
                                <input type="checkbox" class="custom-control-input d-flex" />
                                <div class="custom-control-label" style={{fontSize:"13px"}}>
                                    Add to compare
                                </div>
                            </label> */}

                        </div>
                    </aside>
                </div>
            </article>

        </div>
    );
}

export default Product_List;