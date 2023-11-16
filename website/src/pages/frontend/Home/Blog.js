import React, { useEffect, useState } from "react";
import postservices from "../../../services/PostServices";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";
function Blog() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        (async function(){
            await postservices.getPostNew('post',4).then(function(res){
                setPosts(res.data.posts);
            })
        })();
    },[]);
    return ( 
        <div class="blog">

        <div class="container">

            <div class="blog-container has-scrollbar">
                {posts.map(function(post,index){
                    return(
                        <div class="blog-card">

                        <Link to={`/pages/tin-tuc/chi-tiet-bai-viet/${post.id}`}>
                            <img src={urlImage + 'Post/' + post.image} alt="" width="300" class="blog-banner"/>
                        </Link>
    
                        <div class="blog-content">
    
                            {/* <a href="#" class="blog-category"></a> */}
    
                            <Link to={`/pages/tin-tuc/chi-tiet-bai-viet/${post.id}`}>
                                <h3 class="blog-title">GATEAUX MOUSSE - MANG CẢ THẾ GIỚI TRONG MIỆNG BẠN</h3>
                            </Link>
    
                            <p class="blog-meta">
                                 <cite>Tr Shop</cite> / <time >{post.created_at}</time>
                            </p>
    
                        </div>
    
                    </div>
    
                    );
                })}

            </div>

        </div>

    </div>

     );
}



export default Blog;