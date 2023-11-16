import React from "react";
import { ReactComponent as Quotes } from "../../../assets/images/icons/quotes.svg";
const Testimonials_cta_service = () => (
    <div>

        <div class="container">

            <div class="testimonials-box">

                {/* <!--
                - TESTIMONIALS
         --> */}

                <div class="testimonial">

                    <h2 class="title">Chứng thực an toàn</h2>

                    <div class="testimonial-card">
                        <img src={require("../../../assets/images/chinh_sach/csantp.jpg")} alt="alan doe" class="" width="auto" height={400} />
                    </div>

                </div>

                {/* <!--
                    - CTA
         --> */}

                <div class="cta-container">

                    <img src={require("../../../assets/images/banner/banner4.jpg")} alt="summer collection" class="cta-banner" />

                    <a href="#" class="cta-content">

                        <p class="discount">Giảm giá 25%</p>

                        <h2 class="cta-title">Các sản phẩm mới</h2>

                        <p class="cta-text">Chỉ từ 20.000 đ</p>

                        <button class="cta-btn">Mua ngay</button>

                    </a>

                </div>



                {/* <!--
                    - SERVICE
         --> */}

                <div class="service">

                    <h2 class="title">Dịch vụ cửa hàng</h2>

                    <div class="service-container">

                        <a href="#" class="service-item">

                            <div class="service-icon">
                                <ion-icon name="boat-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                                <h3 class="service-title">Giao hàng mọi nơi</h3>
                                <p class="service-desc">Mọi lúc</p>

                            </div>

                        </a>

                        <a href="#" class="service-item">

                            <div class="service-icon">
                                <ion-icon name="rocket-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                                <h3 class="service-title">Giao hàng trong ngày</h3>
                                <p class="service-desc">Chỉ trong vài phút</p>

                            </div>

                        </a>

                        <a href="#" class="service-item">

                            <div class="service-icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                                <h3 class="service-title">hỗ trợ trực tuyến tốt nhất</h3>
                                <p class="service-desc">Giờ: 8h00 - 20h00</p>

                            </div>

                        </a>

                        <a href="#" class="service-item">

                            <div class="service-icon">
                                <ion-icon name="arrow-undo-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                                <h3 class="service-title">Chính sách hoàn trả</h3>
                                <p class="service-desc">Hoàn trả dễ dàng và miễn phí</p>

                            </div>

                        </a>

                        <a href="#" class="service-item">

                            <div class="service-icon">
                                <ion-icon name="ticket-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                                <h3 class="service-title">Hoàn tiền 20%</h3>
                                <p class="service-desc">Đối với đơn trên 200.000 đ</p>

                            </div>

                        </a>

                    </div>

                </div>

            </div>

        </div>

    </div>

);

export default Testimonials_cta_service;