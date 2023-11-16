import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import menuservices from "../../services/MenuServices";
import categoryservice from "../../services/CategoryServices";
import configservices from "../../services/ConfigServices";



function Footer() {
    const [pages, setPages] = useState([]);
    const [categoris, setCategories] = useState([]);
    const [config,setConfig] = useState([]);


    useEffect(() => {
        (async function () {
            await menuservices.getCSFooter('page', 'footermenu').then(function (res) {
                setPages(res.data.cs);
            });
        })()
    }, []);

    useEffect(function () {
        (async function () {
            await categoryservice.getCategories().then(function (result) {
                setCategories(result.data.categoies)
            })
        })();
    }, []);

    useEffect(function(){
        (async function(){
            await configservices.getConfig().then(function(res){
                setConfig(res.data.config);
            })
        })()
    },[])
    return (
        <footer>
            <div class="footer-nav">
                <div class="container">
                    <ul class="footer-nav-list">

                        <li class="footer-nav-item">
                            <h2 class="nav-title">Danh mục</h2>
                        </li>
                        {categoris.map(function (cat) {
                            return (
                                <li class="footer-nav-item">
                                    <Link to={`/pages/san-pham/${cat.slug}`} class="footer-nav-link">{cat.name}</Link>
                                </li>
                            );
                        })}

                    </ul>


                    <ul class="footer-nav-list">

                        <li class="footer-nav-item">
                            <h2 class="nav-title">Chính sách mua hàng</h2>
                        </li>

                        {pages.map(function (page) {
                            return (
                                <li class="footer-nav-item">
                                    <Link to={page.link} class="footer-nav-link">{page.name}</Link>
                                </li>

                            );
                        })}



                    </ul>

                    <ul class="footer-nav-list">

                        <li class="footer-nav-item">
                            <h2 class="nav-title">Liên kết</h2>
                        </li>

                        <li class="footer-nav-item">
                            <Link to="/" class="footer-nav-link">Trang chủ</Link>
                        </li>

                        <li class="footer-nav-item">
                            <Link to="pages/gioi-thieu" class="footer-nav-link">Giới thiệu</Link>
                        </li>

                        <li class="footer-nav-item">
                            <Link to="pages/lien-he" class="footer-nav-link">Liên hệ</Link>
                        </li>

                        <li class="footer-nav-item">
                            <Link to="pages/tin-tuc" class="footer-nav-link">Tin tức</Link>
                        </li>

                    </ul>

                    <ul class="footer-nav-list">

                        <li class="footer-nav-item">
                            <h2 class="nav-title">Liên hệ</h2>
                        </li>

                        <li class="footer-nav-item flex">
                            <div class="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <address class="content">
                                {config.address}
                            </address>
                        </li>

                        <li class="footer-nav-item flex">
                            <div class="icon-box">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>

                            <a href="tel:+607936-8058" class="footer-nav-link">{config.phone}</a>
                        </li>

                        <li class="footer-nav-item flex">
                            <div class="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <a href="" class="footer-nav-link">{config.email}</a>
                        </li>

                        <li>
                            <ul class="social-link">

                                <li class="footer-nav-item">
                                    <a href="#" class="footer-nav-link">
                                        <ion-icon name="logo-facebook"></ion-icon>

                                    </a>
                                </li>

                                <li class="footer-nav-item">
                                    <a href="#" class="footer-nav-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li class="footer-nav-item">
                                    <a href="#" class="footer-nav-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                                <li class="footer-nav-item">
                                    <a href="#" class="footer-nav-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>

                    <ul><li></li></ul>

                </div>

            </div>

            <div class="footer-bottom">

                <div class="container">

                    <img src={require("../../assets/images/payment.png")} alt="payment method" class="payment-img" />

                    <p class="copyright">
                        Phan Nguyễn Nhựt Trường
                    </p>

                </div>

            </div>

        </footer>

    );
}

export default Footer;


