import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import { useState } from "react";
import contactservices from "../../../services/ContactServices";
function Contact() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function AddContact(event) {
        event.preventDefault();
        const contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("replay_id", 0);
        contact.append("content", content);
        contact.append("status", 1);
        await contactservices.AddContact(contact).then(function (result) {
            if (result.data.success === true) {
                alert(result.data.message);
                navigate('/', { replace: true });
            }
            else {
                alert(result.data.message);
                navigate('/pages/lien-he', { replace: true });
            }

        })
    }

    return (
        <div class="">
            <div class="contact mb-3">
                <div class="contact-header">
                    <div class="title-contact">
                        <h2 class="text-center">Liên hệ với chúng tôi</h2>
                    </div>
                    <div className="text-center">
                        <div class="d-inline-flex inline-ct">
                            <p class="m-0"><Link className="Link-contact" to="/">Home</Link></p>
                            <p class="m-0 px-2">-</p>
                            <p class="m-0">Contact</p>
                        </div>
                    </div>

                </div>

                <div class="container content-contact ">
                    <div class="row">
                        <div class="col-7">
                            <div class="form-contact">
                                <div className="form-contact mt-2 mb-4">
                                    <form method="" action="" onSubmit={AddContact}>
                                        <div class="form-group-contact">
                                            <label for="Name" className="mb-2 mt-2">Tên:</label>
                                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} class="form-control" id="name" placeholder="Nhập tên..." />
                                        </div>
                                        <div class="form-group-contact">
                                            <label for="Email" className="mb-2 mt-2" >Email:</label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-control" id="email" placeholder="Nhập email..." />
                                        </div>
                                        <div class="form-group-contact">
                                            <label for="phone" className="mb-2 mt-2" >Số điện thoại:</label>
                                            <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} class="form-control" id="phone" placeholder="Nhập số điện thoại..." />
                                        </div>
                                        <div class="form-group-contact">
                                            <label for="title" className="mb-2 mt-2">Tiêu đề:</label>
                                            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} class="form-control" id="title" placeholder="Nhập tiêu đề..." />
                                        </div>
                                        <div class="form-group-contact mb-2">
                                            <label for="content" className="mb-2 mt-2">Nội dung:</label>
                                            <textarea class="form-control" onChange={(e) => setContent(e.target.value)} value={content} id="content" placeholder="Nhập nội dung..." />
                                        </div>
                                        <button type="submit" class="btn btn-submit">Gửi liên hệ</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div class="col-5 mt-4">
                            <div class="map-contact">
                                <iframe title="mapContact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8286034107664!2d106.77829757517989!3d10.824425189327256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526fc0cbeb173%3A0x3ff0b19dbd095051!2zMTU2IETGsMahbmcgxJDDrG5oIEjhu5lpLCBQaMaw4bubYyBMb25nIEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1685092907656!5m2!1svi!2sus"
                                    width="600" height="500" style={{ marginRight: 'em' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="">
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;