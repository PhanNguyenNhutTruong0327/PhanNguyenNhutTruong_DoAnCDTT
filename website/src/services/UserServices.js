import httpAxios from "../httpAxios";

function AddUser(user){
    return httpAxios.post('user/adduser',user);
}

function Login(user){
    return httpAxios.post('user/login',user);
}


// customer

function getUserAll(roles){
    return httpAxios.get('user/index/' + roles);
}

function getTrash(roles){
    return httpAxios.get('user/getTrash/' + roles);
}

function deleteTrash(id){
    return httpAxios.get('user/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('user/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('user/destroy/'+id);
}

function create(user){
    return httpAxios.post('user/store', user);
}

function getById(id){
    return httpAxios.get('user/show/'+id);
}

function update(id,user){
    return httpAxios.post('user/update/' + id, user);
}

function getUserInfo(id){
    return httpAxios.get(`user/getUserId/${id}`);
}
// 
const userservices = {
    AddUser:AddUser,
    Login:Login,
    getUserInfo:getUserInfo,
    

    // 
    getUserAll:getUserAll,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    create:create,
    getById:getById,
    update:update,
    

    
};

export default userservices;