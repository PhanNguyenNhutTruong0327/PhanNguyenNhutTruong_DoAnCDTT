import { useState } from "react";
import categoryservice from "../../../services/CategoryServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function List_Category() {
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getListCategories(0, 6);
                setCategories(result.data.categories)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);
    return (
        <div class="sidebar-category" >

            <div class="sidebar-top">
                <h2 class="sidebar-title">Danh mục sản phẩm</h2>

                <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul class="sidebar-menu-category-list">
                {categories.map(function (cat, index) {
                    return (
                        <li class="sidebar-menu-category">

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex d-flex">
                                    <div className="img-cat ">
                                        <img src={urlImage + 'Category/' + cat.image} alt="clothes" width={50} height={50} class="menu-title-img" />

                                    </div>
                                    <div className="title-cat ms-3">
                                        <Link to={`/pages/san-pham/${cat.slug}/grid`}>
                                            <p class="menu-title">{cat.name}</p>
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

export default List_Category;