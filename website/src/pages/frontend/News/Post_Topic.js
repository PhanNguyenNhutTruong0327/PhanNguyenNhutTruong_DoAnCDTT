import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import topicservice from "../../../services/TopicServices";
import postservices from "../../../services/PostServices";
import List_Topic from "../List/List_Topic";
import News_Item from "../../../compoment/frontend/News_Item";
import { Pagination } from "@mui/material";

function Post_Topic() {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");

    const [page,setPage] = useState(1);
    const [end_page, setEnd] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const response = await topicservice.getBySlug(slug);
                const topicid = response.data.topic.id;
                setTitle(response.data.topic.name);
                const response2 = await postservices.getPostByTopic(topicid, limit,page);
                setPosts(response2.data.posts);
                setEnd(response2.data.end_page);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [slug,page]);
    return (
        <div className="product-all">
            <div className="container mb-5">
                <div className="title-proall mb-3">
                    <h3 id="h3-pro" className="text-center">{title}</h3>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="sidebar  has-scrollbar" data-mobile-menu="true">
                            <List_Topic />

                        </div>
                    </div>
                    <div className="col-9 row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                {posts.map((post, index) => {
                                    return (
                                        <News_Item post={post} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="page-navigation ">
                        <div className="pagination justify-content-center">
                            <Pagination page={page} count={end_page} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Post_Topic;