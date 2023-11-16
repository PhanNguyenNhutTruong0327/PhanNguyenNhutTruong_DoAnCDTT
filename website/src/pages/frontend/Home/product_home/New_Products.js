import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservices from "../../../../services/ProductServices";
import Product_Item from "../../../../compoment/frontend/Product_Item";
import { urlImage } from "../../../../config";

function New_Products({ productItems, addToCart }) {

    const [ProductNew, setProductNew] = useState([]);
    useEffect(function () {
        (async function () {
            await productservices.getProductNew(4).then(function (result) {
                setProductNew(result.data.products);
            })
        })();
    }, []);
    return (

        <div class="product-main">

            <h2 class="title">Sản phẩm mới</h2>

            <div class="product-grid">
                {ProductNew.map(function (pro, index) {
                    return (
                        <Product_Item key={index} product={pro} />
                    );
                })}




            </div>

        </div>
    )
}

export default New_Products;