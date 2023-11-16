import { useEffect, useState } from "react";
import productServices from "../../services/ProductServices";
import { urlImage } from "../../config";
import { Link } from "react-router-dom";

function Product_Show_Home(props) {
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);

    try {
        useEffect(function () {
            (async function () {
                await productServices.getProductHome(props.cat.id, 3, 'DESC').then(function (result) {
                    setProducts1(result.data.products);
                });
            })();
        }, []);
    } catch (e) { console.error(e); }

    try {
        useEffect(function () {
            (async function () {
                await productServices.getProductHome(props.cat.id, 3, 'ASC').then(function (result) {
                    setProducts2(result.data.products);
                });
            })();
        }, []);
    } catch (e) { console.error(e); }


    return (
        <div class="product-showcase">

            <h2 class="title">{props.cat.name}</h2>

            <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">
                    {products1.map(function (pro, index) {
                        return (
                            <div class="showcase" key={index}>
                                <Link to={`/pages/san-pham/chi-tiet-san-pham/${pro.id}`} class="showcase-img-box">
                                    <img src={urlImage + 'Product/' + pro.image} alt="bánh" width="70" height="60" class="showcase-img" />
                                </Link>

                                <div class="showcase-content">

                                    <Link to={`/pages/san-pham/chi-tiet-san-pham/${pro.id}`}>
                                        <h4 class="showcase-title">{pro.name}</h4>
                                    </Link>
                                    <div class="price-box">
                                        <p class="price">{pro.price}.000 đ</p>
                                        <del></del>
                                    </div>

                                </div>

                            </div>

                        );
                    })}

                </div>
                <div class="showcase-container">

                    {products2.map(function (pro2, index) {
                        return (
                            <div class="showcase" key={index}>
                                <Link to={`/pages/san-pham/chi-tiet-san-pham/${pro2.id}`} class="showcase-img-box">
                                    <img src={urlImage + 'Product/' + pro2.image} alt="bánh" width="70" height="60" class="showcase-img" />
                                </Link>

                                <div class="showcase-content">

                                    <a to={`/pages/san-pham/chi-tiet-san-pham/${pro2.id}`}>
                                        <h4 class="showcase-title">{pro2.name}</h4>
                                    </a>
                                    <div class="price-box">
                                        <p class="price">{pro2.price}.000 đ</p>
                                        <del></del>
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

export default Product_Show_Home;