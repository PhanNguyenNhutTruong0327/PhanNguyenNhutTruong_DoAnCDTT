import httpAxios from '../httpAxios'

function getPost_All(limit,page){
    return httpAxios.get(`post/post_all_fe/${limit}/${page}`);
}


function getById(id){
    return httpAxios.get('post/show/'+id);
}

function getPostDetails(slug){
    return httpAxios.get('post/post_detail/'+slug);
}

function getPostByTopic(topicid,limit,page){
    return httpAxios.get(`post/post_topic/${topicid}/${limit}/${page}`);
}

function getPostNew(type,limit){
    return httpAxios.get(`post/post_new/${type}/${limit}`);
}

function getPostList(type){
    return httpAxios.get(`post/index/${type}`);
}

function create(post){
    return httpAxios.post(`post/store`,post);
}

function updatePost(post,id){
    return httpAxios.post(`post/update/${id}`,post);
}

function getTrash(type){
    return httpAxios.get('post/getTrash/'+ type);
}

function deleteTrash(id){
    return httpAxios.get('post/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('post/rescover_trash/'+id);
}
 
function remove(id){
    return httpAxios.delete('post/destroy/'+id);
}



const postservices = {
    getById:getById,
    getPost_All:getPost_All,
    getPostDetails:getPostDetails,
    getPostByTopic:getPostByTopic,
    getPostNew:getPostNew,
    // 
    
    getPostList:getPostList,
    create:create,
    updatePost:updatePost,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,

    
}
export default postservices;