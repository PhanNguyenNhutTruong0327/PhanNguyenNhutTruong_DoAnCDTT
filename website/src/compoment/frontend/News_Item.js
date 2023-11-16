import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import "./style.css"
function News_Item(props) {
    return (
        <div className="col-md-4 mb-3">
            <div className="post-item border">
                <div className="post-image">
                    <Link to={`/pages/tin-tuc/chi-tiet-bai-viet/${props.post.id}`} className="link-chi-tiet"><img style={{ height: "300px", width: "100%" }} src={urlImage + 'Post/' + props.post.image} className="img-fluid" alt="tin tuc" /></Link>
                </div>
                <div className="post-name p-2">
                    <Link style={{ textDecoration: 'none' }} to={`/pages/tin-tuc/chi-tiet-bai-viet/${props.post.id}`}><h2 id="title-post-h2" className="text-center fs-5 text-danger">{props.post.title}</h2></Link>
                </div>
                <div className="PostDetail">
                    <div className="row ps-2 fs-6">
                        <p id="text-post">{props.post.detail}</p>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default News_Item;