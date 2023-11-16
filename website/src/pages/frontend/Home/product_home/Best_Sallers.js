import { useEffect, useState } from "react";
import productServices from "../../../../services/ProductServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../../../config";


function Best_Sallers(props) {
    const [products, setProducts] = useState([]);

    try {
        useEffect(() => {
            (async () => {
                await productServices.getBestSaler().then((res) => {
                    setProducts(res.data.products);
                })
            })()
        }, [])

    } catch (e) { console.error(e); }
    return (
        <div class="product-showcase">

            <h3 class="showcase-heading">Sản phẩm bán chạy</h3>

            <div class="showcase-wrapper">

                <div class="showcase-container">
                    {products.map((pro) => {
                        return (
                            <div class="showcase">

                                <Link to={`/pages/san-pham/chi-tiet-san-pham/${pro.id}`} class="showcase-img-box">
                                    <img src={urlImage + "Product/" + pro.image} alt="bông lan" width="75" height="75"
                                        class="showcase-img" />
                                </Link>

                                <div class="showcase-content">

                                    <Link to={`/pages/san-pham/chi-tiet-san-pham/${pro.id}`}>
                                        <h4 class="showcase-title">{pro.name}</h4>
                                    </Link>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <del></del>
                                        <p class="price">{pro.price}.000 đ</p>
                                    </div>

                                </div>

                            </div>

                        );
                    })}



                </div>

            </div>

        </div>

    )
}

export default Best_Sallers;