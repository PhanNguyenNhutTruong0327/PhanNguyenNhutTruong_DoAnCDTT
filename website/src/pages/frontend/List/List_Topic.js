import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import topicservice from "../../../services/TopicServices";

function List_Topic() {
    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await topicservice.getListTopic(0);
                setTopics(result.data.topics)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);
    return (
        <div class="sidebar-category" >

            <div class="sidebar-top">
                <h2 class="sidebar-title">Tiêu đề</h2>

                <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul class="sidebar-menu-category-list">
                {topics.map(function (top, index) {
                    return (
                        <li class="sidebar-menu-category" key={index}>

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex d-flex">
                                    <div className="img-cat ">
                                        {/* <img src={urlImage + 'Category/' + cat.image} alt="clothes" width={50} height={50} class="menu-title-img" /> */}

                                    </div>
                                    <div className="title-cat ms-3">
                                        <Link to={`/pages/tin-tuc/${top.slug}`}>
                                            <p class="menu-title">{top.name}</p>
                                        </Link>
                                    </div>

                                </div>

                               

                            </button>



                        </li>

                    );
                })}



            </ul>

        </div>
    );
}

export default List_Topic;