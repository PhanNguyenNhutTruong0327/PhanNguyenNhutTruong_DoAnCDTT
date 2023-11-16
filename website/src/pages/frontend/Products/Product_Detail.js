import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import Product_Item from "../../../compoment/frontend/Product_Item";
import { useCart } from "react-use-cart";
import ratingservices from "../../../services/RatingServices";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons";

function Product_Detail() {
    const { slug } = useParams();
    const {addItem} = useCart();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);

    // danh gia + comment
    // const [start,setStart] = useState(0);
    // const [comment,setComment] = useState('');
    // const [countStart,setCountStart] = useState(0);

    // const handleRatingChange = (rating) =>{
    //     setStart(rating);
    // }
    // const handleCommentChange = (e) =>{
    //     setComment(e.target.value);
    // }
    // const handleSubmitRating = () => {
    //     if(start === 0){
    //         alert('Vui lòng đánh giá số sao !');
    //         return;
    //     }
    // }

    // async function Checkout(event) {
    //     event.preventDefault();
    //     const rating = new FormData();
    //     rating.append("used_id", 1);
    //     rating.append("product_id", 1);
    //     rating.append("number_rating", countStart);
    //     rating.append("comment",comment);
    //     await ratingservices.create(rating).then(function (res) {
    //         if(res.data.success == true){
    //             alert('Thanh cong');
    //         }
    //         setComment('');
    //         setStart(0);
    //     });
    // }

    // useEffect(()=>{
    //     (async function(){
    //         await ratingservices.getStar(product.id,1).then((res)=>{
    //             setCountStart(res.data.number_starts);
    //         })
    //     })();
    // },[])


    // const renderStarts = () =>{
    //     const isRated = countStart !== 0;
    // }


    useEffect(function () {
        (async function () {
            await productServices.getProductDetail(slug).then(function (result) {
                setProduct(result.data.product);
                setProductOther(result.data.product_other);
            })
        })()
    }, [slug]);

    return (

        <div classNameName="">
            <section className="py-3 bg-title-all">
                <div className="container">
                    <h3 id="h3-pro" style={{ fontSize: "25px" }}> Chi tiết sản phẩm</h3>
                </div>
            </section>

            {/* <!-- ========================= SECTION CONTENT ========================= --> */}
            <section className="section-content bg-white padding-y">
                <div className="container">

                    {/* <!-- ============================ ITEM DETAIL ======================== --> */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div> <Link href="#"><img src={urlImage + 'Product/' + product.image} style={{ width: "100%" }} /></Link></div>
                                    </div>
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb"> <img src={urlImage + 'Product/' + product.image} style={{ height: "100%", width: "100%" }} /></a>
                                        <a href="#" className="item-thumb"> <img src={urlImage + 'Product/' + product.image} style={{ height: "100%", width: "100%" }} /></a>
                                        <a href="#" className="item-thumb"> <img src={urlImage + 'Product/' + product.image} style={{ height: "100%", width: "100%" }} /></a>
                                        <a href="#" className="item-thumb"> <img src={urlImage + 'Product/' + product.image} style={{ height: "100%", width: "100%" }} /></a>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">

                                <h2 className="title mt-3 fs-5">{product.name}</h2>

                                <div className="rating-wrap my-3">
                                    {/* <ul className="rating-stars">
                                        <div class="showcase-content">
                                            <div class="showcase-rating d-flex">
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star"></ion-icon></div>
                                                <div class=" start me-1"><ion-icon name="star-outline"></ion-icon></div>
                                                <div class="start" ><ion-icon name="star-outline"></ion-icon></div>
                                            </div>
                                        </div>
                                        <li>
                                            <i className="fa fa-star mr-1"></i> <i className="fa fa-star mr-1"></i>
                                            <i className="fa fa-star mr-1"></i> <i className="fa fa-star mr-1"></i>
                                            <i className="fa fa-star mr-1"></i>
                                        </li>
                                    </ul> */}
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                                </div> {/*<!-- rating-wrap.// -->*/}

                                <div className="mb-3">
                                    <var className="price h4">{product.price}.000 đ</var>
                                    {/* <span className="text-muted ms-1">USD 562.65 incl. VAT</span> */}
                                </div> {/*<!-- price-detail-wrap .// -->*/}

                                <p style={{ fontSize: "15px" }}>{product.detail}</p>


                                <dl className="row" style={{ fontSize: "15px" }}>
                                    <dt className="col-sm-3">Manufacturer</dt>
                                    <dd className="col-sm-9"><a href="#">Great textile Ltd.</a></dd>

                                    <dt className="col-sm-3">Article number</dt>
                                    <dd className="col-sm-9">596 065</dd>

                                    <dt className="col-sm-3">Guarantee</dt>
                                    <dd className="col-sm-9">2 year</dd>

                                    <dt className="col-sm-3">Delivery time</dt>
                                    <dd className="col-sm-9">3-4 days</dd>

                                    <dt className="col-sm-3">Availabilty</dt>
                                    <dd className="col-sm-9">in Stock</dd>
                                </dl>

                                <div className="form-row  mt-4 d-flex">
                                    <div className="form-group col-md flex-grow-0 me-4">
                                        {/* <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-append">
                                                <button className="btn btn-light" type="button" id="button-minus" style={{borderTopRightRadius:"0",borderBottomRightRadius: 0}}> &minus; </button>
                                            </div>
                                            <input type="text" className="form-control" value="1" style={{height:"42px"}}  />
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" type="button" id="button-plus" style={{borderTopLeftRadius:"0",borderBottomLeftRadius: 0}}> + </button>
                                            </div>

                                        </div> */}
                                        
                                    </div>
                                    <div className="form-group col-md">
                                        <button className="btn" style={{ backgroundColor: "orange" }} onClick={()=>addItem(product)}>
                                            <i className="fas fa-shopping-cart"></i> <span className="text text-white">Add to cart</span>
                                        </button>
                                        <Link to="/pages/lien-he" className="btn btn-light ms-2   ">
                                            <i className="fas fa-envelope"></i> <span className="text">Contact supplier</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="start-comment">
                                    {/* {[1,2,3,4,5].map((index) =>(
                                        <FontAwesomeIcon 
                                            key={index}
                                            className="icon-star"
                                            icon = {isRated ? solidStar : regularStar}
                                            onClick = {()=>handleRatingChange(index)}
                                            style = {{
                                                cursor : 'pointer',
                                                padding:'10px',
                                                fontSize:'30px',
                                                color : isRated ? (index <= countStart ? 'yellow' : 'black') : (index <= start ? 'yellow' : 'black'),
                                            }}
                                        />
                                    ))} */}
                                </div>
                            </article>
                        </main>
                    </div>


                </div>
            </section >
            <div class="border container"></div>
            <div className="product-other container">
                <div className="title-product-other mt-3">
                    <h5><i>Sản phẩm cùng loại :</i></h5>
                </div>
                <div className="item-product-other mt-4 mb-4">
                    <div className="content-pro">
                        <div class="product-grid">
                            {product_other.map(function (product, index) {
                                return (<Product_Item product={product} index={index} />);
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Product_Detail;