import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu";
import { useCart } from "react-use-cart";
import { useAuth } from "../../pages/backend/Provider/AuthProvider";



function Header() {
    const [key, setKey] = useState('');
    const { isEmpty, items } = useCart();
    const { token, setToken } = useAuth();

    const handleLogout = () => {
        // Xóa token khỏi trạng thái
        setToken(null);
      };

    return (
        <header>

            <div class="header-top">

                <div class="container">

                    <ul class="header-social-container">

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                    <div class="header-alert-news">
                        <p>
                            <b>GIAO HÀNG MIỄN PHÍ TRONG TUẦN NÀY CHO TẤT CẢ ĐƠN HÀNG</b>
                        </p>
                    </div>

                    <div class="header-alert-news">
                        {/* <Link to="/">login</Link> */}
                    </div>

                </div>

            </div>

            <div class="header-main">

                <div class="container">

                    <Link to="/" class="header-logo">
                        <img src={require("../../assets/images/logo/Tr-Cake.jpg")} alt="logo" width={130} height={70} />
                    </Link>

                    <div class="header-search-container">
                        <form action={"/pages/tim-kiem/" + key} method="">

                            <input onChange={(e) => setKey(e.target.value)} type="text" value={key} class="search-field" placeholder="Tìm kiếm sản phẩm..." />

                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </form>
                    </div>

                    <div class="header-user-actions">


                        <div class="action-btn1">
                            {token ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to="/pages/login">Login</Link>
                            )}
                        </div>

                        <button class="action-btn">
                            <Link to="/pages/profile"><ion-icon name="person-outline"></ion-icon></Link>
                        </button>

                        <button class="action-btn">
                            <Link to="/cart"><ion-icon name="bag-handle-outline"></ion-icon></Link>
                            <span class="count">{items.length}</span>
                        </button>

                    </div>

                </div>

            </div>

            <Menu />
            <div class="mobile-bottom-navigation">

                <button class="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <button class="action-btn">
                    <ion-icon name="bag-handle-outline"></ion-icon>

                    <span class="count">0</span>
                </button>

                <button class="action-btn">
                    <ion-icon name="home-outline"></ion-icon>
                </button>

                <button class="action-btn">
                    <ion-icon name="heart-outline"></ion-icon>

                    <span class="count">0</span>
                </button>

                <button class="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="grid-outline"></ion-icon>
                </button>

            </div>

            <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                <div class="menu-top">
                    <h2 class="menu-title">Menu</h2>

                    <button class="menu-close-btn" data-mobile-menu-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>

                <ul class="mobile-menu-category-list">

                    <li class="menu-category">
                        <a href="#" class="menu-title">Home</a>
                    </li>

                    <li class="menu-category">

                        <button class="accordion-menu" data-accordion-btn>
                            <p class="menu-title">Men's</p>

                            <div>
                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul class="submenu-category-list" data-accordion>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Shirt</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Shorts & Jeans</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Safety Shoes</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Wallet</a>
                            </li>

                        </ul>

                    </li>

                    <li class="menu-category">

                        <button class="accordion-menu" data-accordion-btn>
                            <p class="menu-title">Women's</p>

                            <div>
                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul class="submenu-category-list" data-accordion>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Dress & Frock</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Earrings</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Necklace</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Makeup Kit</a>
                            </li>

                        </ul>

                    </li>

                    <li class="menu-category">

                        <button class="accordion-menu" data-accordion-btn>
                            <p class="menu-title">Jewelry</p>

                            <div>
                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul class="submenu-category-list" data-accordion>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Earrings</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Couple Rings</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Necklace</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Bracelets</a>
                            </li>

                        </ul>

                    </li>

                    <li class="menu-category">

                        <button class="accordion-menu" data-accordion-btn>
                            <p class="menu-title">Perfume</p>

                            <div>
                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul class="submenu-category-list" data-accordion>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Clothes Perfume</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Deodorant</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Flower Fragrance</a>
                            </li>

                            <li class="submenu-category">
                                <a href="#" class="submenu-title">Air Freshener</a>
                            </li>

                        </ul>

                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Blog</a>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Hot Offers</a>
                    </li>

                </ul>

                <div class="menu-bottom">

                    <ul class="menu-category-list">

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Language</p>

                                <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">English</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Espa&ntilde;ol</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Fren&ccedil;h</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">
                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Currency</p>
                                <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                            </button>

                            <ul class="submenu-category-list" data-accordion>
                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">USD $</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">EUR &euro;</a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <ul class="menu-social-container">

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>

            </nav>

        </header>

    );
}

export default Header;