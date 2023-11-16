import httpAxios from '../httpAxios'

function AddContact(contact){
    return httpAxios.post('contact/addcontact',contact);
}

// 
function getContactAll(){
    return httpAxios.get('contact/index');
}

function getById(id){
    return httpAxios.get('contact/show/' + id);
}

function getTrash(){
    return httpAxios.get('contact/trash');
}

function deleteTrash(id){
    return httpAxios.get('contact/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('contact/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('contact/destroy/'+id);
}

const contactservices = {
    AddContact:AddContact,

    // 
    getContactAll:getContactAll,
    getById:getById,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    

};
export default contactservices;