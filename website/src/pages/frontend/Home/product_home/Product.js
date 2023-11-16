import New_Products from "./New_Products";
import Best_Sallers from "./Best_Sallers";
import Category from "../Category";
import Sale_Products from "./Sale_Products";
import { useEffect, useState } from "react";
import categoryservice from "../../../../services/CategoryServices";
import Product_Show_Home from "../../../../compoment/frontend/Product_Show_Home";



function Product() {
    const [categories, getCategories] = useState([]);

    try {
        useEffect(function () {
            (async function () {
                await categoryservice.getListCategories(0, 3).then(function (result) {
                    getCategories(result.data.categories)
                })
            })();
        }, []);
    } catch (e) {
        console.error(e);
    }



    return (
        <div class="product-container">

            <div class="container">


                {/* <!--
        - SIDEBAR
--> */}

                <div class="sidebar  has-scrollbar" data-mobile-menu>

                    <Category />
                    <Best_Sallers />

                </div>



                <div class="product-box">

                    {/* <!--
            - PRODUCT MINIMAL
--> */}

                    <div class="product-minimal">
                        {categories.map(function (cat, index) {
                            return (
                                <Product_Show_Home key={index} cat={cat} />
                            );
                        })}


                    </div>




                    <div class="product-featured">


                        <div class="showcase-wrapper has-scrollbar">
                            <div class="showcase-container">
                                <div className="showcase slider-item">
                                    {/* <img src={require(`../../../assets/images/banner/banner6.jpg`)} alt="" width="100%" class="banner-img" /> */}
                                    <div className="banner-content">
                                        <div class="banner-title">
                                            <h3 id="title-onl1">Đặt onlline ngay</h3>
                                            <h2 id="title-onl2">Không còn phải chờ đợi nữa</h2>
                                        </div>
                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label-onl text-white fs-6">Tên của bạn:</label>
                                                <input type="email" class="form-control-onl" id="exampleFormControlInput1" placeholder="Họ tên của bạn..." />
                                            </div>

                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label-onl text-white">Địa chỉ email của bạn:</label>
                                                <input type="email" class="form-control-onl" id="exampleFormControlInput1" placeholder="Nhập email..." />
                                            </div>
                                            {/* <div class="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label-onl text-white">Số điện thoại:</label>
                                                <input type="email" class="form-control-onl" id="exampleFormControlInput1" placeholder="Số điện thoại..." />
                                            </div> */}

                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label-onl">Nội dung:</label>
                                                <div></div>
                                                <textarea class="form-control-onl" id="exampleFormControlTextarea1" row="7" placeholder="Nội dung..."></textarea>
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-danger text-center">Đặt ngay</button>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <!--
            - PRODUCT GRID
--> */}
                    <New_Products />
                    <Sale_Products />


                </div>

            </div>

        </div>
    )
}




export default Product;