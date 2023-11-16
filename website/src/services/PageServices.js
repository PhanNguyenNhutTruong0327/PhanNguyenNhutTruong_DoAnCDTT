import httpAxios from "../httpAxios";

function getPageFE(slug){
    return httpAxios.get(`page/getPageFE/${slug}`);
}

// 

function getPageAll(){
    return httpAxios.get('page/getPageAll');
}

function create(page){
    return httpAxios.post('page/store',page);
}

function getPageById(id){
    return httpAxios.get('page/showPage/'+id);
}

function updatePage(id,page){
    return httpAxios.post('page/update/'+id,page);
}

function getTrash(){
    return httpAxios.get('page/getTrash');
}

function deleteTrash(id){
    return httpAxios.get('page/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('page/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('page/destroy/'+id);
}

const pageservices = {

    getPageFE:getPageFE,
    

    // 
    getPageAll:getPageAll,
    create:create,
    getPageById:getPageById,
    updatePage:updatePage,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    
};

export default pageservices