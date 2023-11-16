import httpAxios from "../httpAxios";

function getBySlug(slug) {
    return httpAxios.get('topic/show/' + slug);
}

function getListTopic(parent_id) {
    return httpAxios.get('topic/list_topic/' + parent_id);
}

// backend
function create(topic){
    return httpAxios.post('topic/store', topic);
}

function topicAll(){
    return httpAxios.get('topic/index');
}


function getTrash(){
    return httpAxios.get('topic/trash');
}

function deleteTrash(id){
    return httpAxios.get('topic/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('topic/rescover_trash/'+id);
}

function deleteTopic(id){
    return httpAxios.delete('topic/destroy/'+id);
}

function updateTopic(id,topic){
    return httpAxios.post('topic/update/'+id,topic);
}


const topicservice = {
    getBySlug: getBySlug,
    getListTopic:getListTopic,

    // 
    create:create,
    topicAll:topicAll,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    deleteTopic:deleteTopic,
    updateTopic:updateTopic,

    

}
export default topicservice;