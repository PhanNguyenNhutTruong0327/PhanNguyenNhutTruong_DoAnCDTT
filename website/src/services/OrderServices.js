import httpAxios from "../httpAxios";

function create(order){
    return httpAxios.post('order/store',order);
}
function update(id,order){
    return httpAxios.post('order/update/'+id,order);
}
function getOrderAll(page){
    return httpAxios.get(`order/index/${page}`);
}

function getById(id){
    return httpAxios.get(`order/show/${id}`);
}

function getTrash(page){
    return httpAxios.get(`order/getTrash/${page}`);
}

function deleteTrash(id){
    return httpAxios.get('order/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('order/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('order/destroy/'+id);
}

const orderservices = {
    create:create,
    getOrderAll:getOrderAll,
    getById:getById,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    update:update,



}
export default orderservices;