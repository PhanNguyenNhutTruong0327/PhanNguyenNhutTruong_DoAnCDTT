import httpAxios from '../httpAxios'

function getByParentId(position, parentId) {
    return httpAxios.get(`menu/getByParentId/${position}/${parentId}`);
}

function getCSFooter(type,position) {
    return httpAxios.get(`menu/getMenuFooter/${type}/${position}`);
}

// backend
function getMenuAll(){
    return httpAxios.get(`menu/index`);
}


function getById(id){
    return httpAxios.get(`menu/show/${id}`);
}

function update(id,menu){
    return httpAxios.post(`menu/update/${id}`,menu);
}

function getTrash(){
    return httpAxios.get('menu/trash');
}

function deleteTrash(id){
    return httpAxios.get('menu/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('menu/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('menu/destroy/'+id);
}



// 


const menuservices = {
    getByParentId: getByParentId,
    getCSFooter:getCSFooter,

    // 
    getMenuAll:getMenuAll,
    getById:getById,
    update:update,
    
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,


}
export default menuservices;