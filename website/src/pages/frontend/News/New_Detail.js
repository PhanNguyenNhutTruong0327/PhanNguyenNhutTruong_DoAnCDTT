import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postservices from "../../../services/PostServices";
import { urlImage } from "../../../config";
import News_Item from "../../../compoment/frontend/News_Item";

function New_Detail() {
    const {slug} = useParams();
    const [post,setPost] = useState([]);
    const [post_other,setPostOther] = useState([]);
    useEffect(function(){
        (async function(){
            await postservices.getPostDetails(slug).then(function(result){
                setPost(result.data.post);
                setPostOther(result.data.post_other);
            })
        })()
    },[slug]);
    if(post_other.length > 0){
        return (
            <div classNameName="">
                <section className="py-3 bg-title-all">
                    <div className="container">
                        <h3 id="h3-pro" style={{ fontSize: "25px" }}> Chi tiết bài viết</h3>
                    </div>
                </section>
    
                <section className="section-content bg-white padding-y">
                    <div className="container">
    
                        <div className="row">
                            <aside className="col-md-6">
                                <div className="card">
                                    <article className="gallery-wrap">
                                        <div className="img-big-wrap">
                                            <div> <Link href="#"><img src={urlImage + 'Post/' + post.image} style={{ width: "100%" }} /></Link></div>
                                        </div>
                                        
                                    </article>
                                </div>
                            </aside>
                            <main className="col-md-6">
                                <article className="product-info-aside">
    
                                    <h2 className="title mt-3 fs-5">{post.title}</h2>
                                    <p style={{ fontSize: "15px" }}>{post.detail}</p>
                                </article>
                            </main>
                        </div>
                    </div>
                </section >
                <div class="border container"></div>
                <div className="product-other container">
                    <div className="title-product-other mt-3 mb-3">
                        <h5><i>Bài viết cùng chủ đề :</i></h5>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                {post_other.map(function (post, index) {
                                    return (<News_Item post={post} index={index} />);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
    
        );    
    }
    else{
        return (
            <div classNameName="">
                <section className="py-3 bg-title-all">
                    <div className="container">
                        <h3 id="h3-pro" style={{ fontSize: "25px" }}> Chi tiết bài viết</h3>
                    </div>
                </section>
    
                <section className="section-content bg-white padding-y">
                    <div className="container">
    
                        <div className="row">
                            <aside className="col-md-6">
                                <div className="card">
                                    <article className="gallery-wrap">
                                        <div className="img-big-wrap">
                                            <div> <Link href="#"><img src={urlImage + 'Post/' + post.image} style={{ width: "100%" }} /></Link></div>
                                        </div>
                                        
                                    </article>
                                </div>
                            </aside>
                            <main className="col-md-6">
                                <article className="product-info-aside">
    
                                    <h2 className="title mt-3 fs-5">{post.title}</h2>
                                    <p style={{ fontSize: "15px" }}>{post.detail}</p>
                                </article>
                            </main>
                        </div>
                    </div>
                </section >
                <div class="border container"></div>
            </div >
    
        );
    
    }
}

export default New_Detail;