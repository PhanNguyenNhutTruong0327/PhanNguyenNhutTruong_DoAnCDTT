import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import orderservices from "../../../services/OrderServices";
import "./style.css"
import { useAuth } from "../../backend/Provider/AuthProvider";

function Form_AddToCart() {
    const Navigate = useNavigate()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');

    const item_pro = [];
    const qty_pro = [];
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const ship = 15;

    const { token } = useAuth();

    async function Checkout(event) {
        event.preventDefault();
        const order = new FormData();

        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("user_id", token);
        order.append("address", address);
        order.append("note", note);
        order.append("status", 1);
        item_pro.forEach((value, key) => {
            order.append(`product[${key}]`, value);
        })
        qty_pro.forEach((value, key) => {
            order.append(`qty[${key}]`, value);
        });

        await orderservices.create(order).then(function (res) {
            emptyCart();
            alert(res.data.message);
            Navigate('/', { replace: true });
        });

    }
    return (
        <div className="all-form-cart">
            {items.map((item) => {
                item_pro.push(item.id);
                qty_pro.push(item.quantity);
            })}

            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="form text-center">
                            <div className="form-all form-cart mb-3">
                                <div className="title-form-cart text-white">
                                    <h6 style={{ fontSize: "20px" }}>Thông tin khách hàng</h6>
                                </div>
                                <form onSubmit={Checkout}>
                                    <div className="form-group">
                                        <div class="input-group">
                                            <label for="username" className="" >Họ Tên :</label>
                                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="username" id="username" placeholder="Nhập họ tên..." />
                                        </div>
                                        <div class="input-group">
                                            <label for="username" className="" >Email :</label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="username" id="username" placeholder="Nhập email..." />
                                        </div>
                                        <div class="input-group">
                                            <label for="username" className="" >Số điện thoại :</label>
                                            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" name="username" id="username" placeholder="Nhập số điện thoại..." />
                                        </div>
                                        <div class="input-group">
                                            <label for="username" className="" >Địa chỉ :</label>
                                            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" name="username" id="username" placeholder="Nhập địa chỉ..." />
                                        </div>
                                        <div class="input-group">
                                            <label for="username" className="" >Ghi chú :</label>
                                            <input onChange={(e) => setNote(e.target.value)} value={note} type="text" name="username" id="username" placeholder="Ghi chú..." />
                                        </div>
                                        <div className="mt-4 btn-order text-center">
                                            <button className="btn btn-danger">Xác nhận đặt hàng</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            {console.log(items)}
        </div>
    );
}

export default Form_AddToCart;