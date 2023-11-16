 import { useEffect, useState } from "react";
import "./style.css"
import postservices from "../../../services/PostServices";
function GioiThieu() {
    const [GioiThieu,setGioiThieu] = useState([]);
    useEffect(function(){
        (async function(){
            await postservices.getPage().then(function(result){
                setGioiThieu(result.data.post);
            })
        })();
    },[]);

    return (
        <div className="gioi-thieu">
            <div className="container">
                <h3 id="title-gt" className="text-center">Giới thiệu</h3>
                <div className="content-gt">

                    <div className="content-item">
                        <h6 className="title-item fs-5">Câu chuyện thương hiệu</h6>
                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="img-content">
                                    <img src={require("../../../assets/images/post/gioi-thieu-1.jpg")} height="300px" width="90%" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="conten-item-text">
                                    <p id="p">Thành lập vào tháng 12/2010 từ tình yêu với những chiếc bánh, Tr Cake khởi nguồn cùng slogan “Bánh tươi mỗi ngày” và sứ mệnh xuyên suốt về mang tới những sản phẩm thơm ngon nhất.
                                        Trong mỗi dịp lễ hay sinh nhật, bánh kem của Tr Cake luôn là một trong những lựa chọn hàng đầu, bởi độ ngọt vừa phải, mẫu bánh đẹp, giá thành hợp lý.
                                        Bên cạnh đó, đồng hành mỗi ngày của khách hàng là các sản phẩm bánh mì tươi dinh dưỡng, thơm ngon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="content-item">
                        <h6 className="title-item fs-5">Sứ mệnh và tầm nhìn</h6>
                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="img-content">
                                    <img src={require("../../../assets/images/post/gioi-thieu-2.jpg")} height="300px" width="90%" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="conten-item-text">
                                    <p>Đi cùng quy trình làm bánh nghiêm ngặt, khép kín, đòi hỏi nhân viên phải cẩn thận,
                                        tỉ mỉ và chăm chút trong từng công đoạn nhỏ nhất. Fresh Garden cam kết mang đến những sản
                                        phẩm đạt chất lượng cao nhất như một lời tri ân đối với sự yêu mến và tin dùng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="content-item">
                        <h6 className="title-item fs-5">Những giá trị tạo nên Tr Cake</h6>
                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="img-content">
                                    <img src={require("../../../assets/images/post/gioi-thieu-3.jpg")} height="300px" width="90%" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="conten-item-text text-center">
                                    <p>Từng sản phẩm Tr Cake được đầu tư rất kỹ ngay từ khâu chọn nguyên liệu, đó là những thành phần tươi mới nhất và
                                         chủ yếu đang sử dụng đều đến từ những nhãn hiệu có uy tín như Anchor, 
                                        Vivo, Meiji, Komplet… Một số dòng sốt của Ý như sốt pizza, sốt mayonaise cũng được nhập trực tiếp từ Ý.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GioiThieu;