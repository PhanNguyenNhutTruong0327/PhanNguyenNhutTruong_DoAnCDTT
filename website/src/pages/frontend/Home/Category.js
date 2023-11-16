import React, { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryServices";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";

function Category() {
    const [Categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCategories().then(function (result) {
                setCategories(result.data.categoies)
            })
        })();
    }, []);
    return (
        <div class="sidebar-category">

            <div class="sidebar-top">
                <h2 class="sidebar-title">Category</h2>

                <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul class="sidebar-menu-category-list">
                {Categories.map(function (cat, index) {
                    return (
                        <li class="sidebar-menu-category">

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <Link to={`/pages/san-pham/${cat.slug}`}>
                                        <img src={urlImage + 'Category/' + cat.image} alt="clothes" width={50} height={50} class="menu-title-img" />

                                    </Link>
                                    <Link to={`/pages/san-pham/${cat.slug}`}>
                                        <p class="menu-title">{cat.name}</p>

                                    </Link>
                                </div>

                                {/* <div>
                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                            </div> */}

                            </button>

                            {/* <ul class="sidebar-submenu-category-list" data-accordion>
    
                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shirt</p>
                                    <data value="300" class="stock" title="Available Stock">300</data>
                                </a>
                            </li>
    
                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">shorts & jeans</p>
                                    <data value="60" class="stock" title="Available Stock">60</data>
                                </a>
                            </li>
    
                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">jacket</p>
                                    <data value="50" class="stock" title="Available Stock">50</data>
                                </a>
                            </li>
    
                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">dress & frock</p>
                                    <data value="87" class="stock" title="Available Stock">87</data>
                                </a>
                            </li>
    
                        </ul> */}

                        </li>

                    );
                })}
                {/* <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                            <img src={require(`../../../assets/images/products/banh-cuoi.jpg`)} alt="clothes" width={50} height={50}
                                class="menu-title-img" />

                            <p class="menu-title">Bánh kem</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">Shirt</p>
                                <data value="300" class="stock" title="Available Stock">300</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">shorts & jeans</p>
                                <data value="60" class="stock" title="Available Stock">60</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">jacket</p>
                                <data value="50" class="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">dress & frock</p>
                                <data value="87" class="stock" title="Available Stock">87</data>
                            </a>
                        </li>

                    </ul>

                </li> */}

                {/* <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                            <img src={require(`../../../assets/images/categories/banh-bong-lan.jpg`)} alt="clothes" width={50} height={50}
                                class="menu-title-img" />

                            <p class="menu-title">Bánh bông lan</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">Shirt</p>
                                <data value="300" class="stock" title="Available Stock">300</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">shorts & jeans</p>
                                <data value="60" class="stock" title="Available Stock">60</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">jacket</p>
                                <data value="50" class="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">dress & frock</p>
                                <data value="87" class="stock" title="Available Stock">87</data>
                            </a>
                        </li>

                    </ul>

                </li>

                <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                            <img src={require(`../../../assets/images/categories/banh-mi.jpg`)} alt="clothes" width={50} height={50}
                                class="menu-title-img" />

                            <p class="menu-title">Bánh mì</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">Shirt</p>
                                <data value="300" class="stock" title="Available Stock">300</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">shorts & jeans</p>
                                <data value="60" class="stock" title="Available Stock">60</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">jacket</p>
                                <data value="50" class="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">dress & frock</p>
                                <data value="87" class="stock" title="Available Stock">87</data>
                            </a>
                        </li>

                    </ul>

                </li>

                <li class="sidebar-menu-category">

                    <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                            <img src={require(`../../../assets/images/categories/banh_ngot.jpg`)} alt="clothes" width={50} height={50}
                                class="menu-title-img" />

                            <p class="menu-title">Bánh ngọt</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                    </button>

                    <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">Shirt</p>
                                <data value="300" class="stock" title="Available Stock">300</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">shorts & jeans</p>
                                <data value="60" class="stock" title="Available Stock">60</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">jacket</p>
                                <data value="50" class="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li class="sidebar-submenu-category">
                            <a href="#" class="sidebar-submenu-title">
                                <p class="product-name">dress & frock</p>
                                <data value="87" class="stock" title="Available Stock">87</data>
                            </a>
                        </li>

                    </ul>

                </li> */}


            </ul>

        </div>

    );
}

export default Category;