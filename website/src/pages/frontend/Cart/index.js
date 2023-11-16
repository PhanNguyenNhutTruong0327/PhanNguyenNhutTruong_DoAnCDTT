import { useCart } from "react-use-cart";
import "./style.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { urlImage } from "../../../config";
import orderservices from "../../../services/OrderServices";
import { Link, useNavigate } from "react-router-dom";
import Form_AddToCart from "./Form_AddToCart";
import { useAuth } from "../../backend/Provider/AuthProvider";


function Cart() {
    const navigate = useNavigate()
    const item_pro = [];
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const ship = 10;
    const { token } = useAuth();

    // async function Checkout() {
    //     var order = new FormData();
    //     order.append("name", "Phan Nguyen Nhut Truong");
    //     order.append("phone", '001002008');
    //     order.append("email", "Ahihi@gmail.com");
    //     order.append("user_id", 1);
    //     order.append("address", "200/14 Dương Đình Hội");
    //     order.append("note", "note");
    //     order.append("status", 1);
    //     await orderservices.create(order).then(function (res) {
    //         emptyCart();
    //         alert('Xác nhận đơn hàng thành công');
    //         Navigate('/', { replace: true });
    //     });

    // }
    return (
        <div className="cart">
            {/* container */}
            {token ? (
                <div className="container">
                    <h5 className="pt-5 text-center">
                        {isEmpty ? 'Giỏ hàng của bạn chưa có sản phẩm nào !' : 'Giỏ hàng'}
                    </h5>
                    <div className="row">
                        <div className="col-8">
                            <section className='cart-items'>
                                <div className='container d_flex'>
                                    {items.map(function (item) {
                                        item_pro.push(item.id);
                                        return (
                                            <div className='cart-list product d_flex row' key="">
                                                <div className="col-1 mt-5">
                                                    <input type="checkbox" className="" />
                                                </div>
                                                <div className="col-8 row">
                                                    <div className='img'>
                                                        <img src={urlImage + 'Product/' + item.image} alt='san pham' />
                                                    </div>
                                                    <div className='cart-details'>
                                                        <h3>{item.name}</h3>
                                                        <h4>
                                                            <span>{item.price}.000 đ</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className='cart-items-function col-2'>
                                                    <div className='cartControl row'>
                                                        <div className="btn-add col-4">
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2 mt-2 border"><FiMinus /></button>

                                                        </div>
                                                        <div className="qty col-2">
                                                            <h6 className="text-center mt-1 ms-2">{item.quantity}</h6>
                                                        </div>
                                                        <div className="btn-sub col-4">
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2 mt-2 border "><FiPlus /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="remove-cart col-1">
                                                    <div>
                                                        <button variant="danger" onClick={() => removeItem(item.id)} className="ms-5"><FaRegTrashAlt /></button>
                                                    </div>
                                                </div>

                                                <div className='cart-item-price'></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section >
                        </div>
                        {!isEmpty &&
                            <div className="col-4 cart-items">
                                <div className='container d_flex'>
                                    <div className="cart-list product d_flex">
                                        <div className='cart-total product'>
                                            <h2 className="mt-3">Thông tin đơn hàng</h2>
                                            <div className="d-flex mb-1">
                                                <h4 >Tạm tính :</h4>
                                                <h3>{cartTotal}.000 đ</h3>
                                            </div>
                                            <div className="d-flex mb-1">
                                                <h4>Phí vận chuyển :</h4>
                                                <h3>{ship}.000 đ</h3>
                                            </div>
                                            <div className='d-flex'>
                                                <h4 className="">Tổng tiền :</h4>
                                                <h3>{cartTotal + ship}.000 đ</h3>
                                            </div>
                                            <div className="mt-4 btn-order text-center">
                                                <div>
                                                    <Link to="/pages/cart/form-cart" className="btn btn-danger">Đặt hàng</Link>
                                                    {/* <button onClick={() => Checkout()} className="btn btn-danger">Đặt hàng</button> */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>

                </div>

            ) : (
                <div style={{ height: "300px" }}>
                    <div class="text-center" style={{ paddingTop: "6%" }} >
                        <h6 className="">Bạn chưa đăng nhập vào hệ thống ?</h6>
                        <Link to="/pages/login">Đăng nhập ngay !</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;