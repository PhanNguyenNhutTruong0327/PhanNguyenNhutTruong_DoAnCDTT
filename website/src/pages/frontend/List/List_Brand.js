import { useState } from "react";
import categoryservice from "../../../services/CategoryServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";
import brandservices from "../../../services/BrandServices";

function List_Brand() {
    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brandservices.getBrandList(1);
                setBrand(result.data.brands)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);
    return (
        <div class="sidebar-category" >

            <div class="sidebar-top">
                <h2 class="sidebar-title">Thương hiệu</h2>

                <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul class="sidebar-menu-category-list">
                {brands.map(function (brand, index) {
                    return (
                        <li class="sidebar-menu-category" key={index}>

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex d-flex">
                                    <div className="img-cat ">
                                        <Link to={`/pages/thuong-hieu/${brand.slug}`}>

                                            <img src={urlImage + 'Brand/' + brand.image} alt="thuong hieu" width={50} height={50} class="menu-title-img" />
                                        </Link>
                                    </div>
                                    <div className="title-cat ms-3">
                                        <Link to={`/pages/thuong-hieu/${brand.slug}/grid`}>
                                            <p class="menu-title">{brand.name}</p>
                                        </Link>
                                    </div>

                                </div>



                            </button>



                        </li>

                    );
                })}



            </ul>

        </div>
    );
}

export default List_Brand;