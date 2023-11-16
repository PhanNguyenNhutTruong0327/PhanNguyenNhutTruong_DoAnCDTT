import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservices from "../../../../services/ProductServices";
import { urlImage } from "../../../../config";
import { useCart } from "react-use-cart";

function Sale_Products() {

    
    const [ProductSale, setProductSale] = useState([]);
    useEffect(function () {
        (async function () {
            await productservices.getProductSale(4).then(function (result) {
                setProductSale(result.data.products);
            })
        })();
    }, []);

    const { addItem } = useCart();
    const addToCart = (pro) => {
        addItem(pro);
    }

    if (ProductSale.length > 0) {
        return (

            <div class="product-main">

                <h2 class="title">Sản phẩm khuyến mãi</h2>

                <div class="product-grid">
                    {ProductSale.map(function (pro, index) {
                        return (
                            <div class="showcase">

                                <div class="showcase-banner">
                                    <Link to={"/pages/san-pham/chi-tiet-san-pham/" + pro.id} >
                                        <img src={urlImage + `Product/` + pro.image} alt="Bánh" style={{ height: "150px", width: "100%" }} class="product-img default image-fluid" />
                                        <img src={urlImage + `Product/` + pro.image} alt="Bánh" style={{ height: "150px", width: "100%" }} class="product-img hover image-fluid" />

                                    </Link>


                                    {/* <p class="showcase-badge">15%</p> */}

                                    <div class="showcase-actions">

                                        <button class="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <Link to={"/pages/san-pham/chi-tiet-san-pham/" + pro.id} class="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </Link>


                                        <button class="btn-action" onClick={() => addToCart(pro)}>
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>

                                    </div>

                                </div>

                                <div class="showcase-content">

                                    <Link to={"/pages/san-pham/chi-tiet-san-pham/" + pro.id} class="showcase-category">{pro.name}</Link>

                                    <Link to={"/pages/san-pham/chi-tiet-san-pham/" + pro.id}>
                                        <h3 class="showcase-title">{pro.name}</h3>
                                    </Link>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">{pro.price_sale}.000 đ</p>
                                        <del>{pro.price}.000 đ</del>
                                    </div>

                                </div>
                            </div>
                        );
                    })}


                </div>

            </div>
        )
    }
    else{
        <></>
    }
}

export default Sale_Products;