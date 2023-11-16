import React, { Component } from "react"



class NotificationToast extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div class="notification-toast" data-toast>

                <button class="toast-close-btn" data-toast-close>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="toast-banner">
                    <img src={require("../../src/assets/images/products/banh-bong-lan-cha-bong.jpg")} alt="Rose Gold Earrings" width="80" height="70" />
                </div>

                <div class="toast-detail">

                    <p class="toast-message">
                        Someone in new just bought
                    </p>

                    <p class="toast-title">
                        Rose Gold Earrings
                    </p>

                    <p class="toast-meta">
                        <time datetime="PT2M">2 Minutes</time> ago
                    </p>

                </div>

            </div>

        );
    }
}
export default NotificationToast;