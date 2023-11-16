import { useEffect, useState } from "react";
import "./style.css"
import postservices from "../../../services/PostServices";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import pageservices from "../../../services/PageServices";

function Policy() {
    const { slug } = useParams();
    const [pages, setPages] = useState([]);

    useEffect(function () {
        (async function () {
            await pageservices.getPageFE(slug).then(function (result) {
                setPages(result.data.page);
            })
        })();
    }, [slug]);

    if (pages === null) {
        return (
            <div className="gioi-thieu"></div>
        );

    }
    else {
        return (
            <div className="gioi-thieu">
                <div className="container">
                    <h3 id="title-gt" className="text-center">{pages.title}</h3>
                    <div className="content-gt">

                        <div className="content-item">
                            <h6 className="title-item fs-5"></h6>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <div className="img-content">
                                        <img src={urlImage + 'Post/' + pages.image} height="auto" width="90%" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="conten-item-text">
                                        <p id="p">{pages.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        );

    }
}

export default Policy;