import httpAxios from '../httpAxios'

function getCategories(){
    return httpAxios.get('category/getCategory');
}

function getListCategories(parent_id,limit){
    return httpAxios.get(`category/category_list/${parent_id}/${limit}`);
}

function getBySlug(slug){
    return httpAxios.get('category/show/'+slug);
}

// backend

function getById(id){
    return httpAxios.get('category/show/'+id);
}
function getCatAll(){
    return httpAxios.get('category/index');
}

function create(category){
    return httpAxios.post('category/store', category);
}

function update(id,category){
    return httpAxios.post('category/update/'+ id, category);
}

function getTrash(){
    return httpAxios.get('category/trash');
}

function deleteTrash(id){
    return httpAxios.get('category/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('category/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('category/destroy/'+id);
}

const categoryservice = {
    getCategories: getCategories,
    getListCategories:getListCategories,
    getBySlug:getBySlug,
    getById:getById,
    // 
    getCatAll:getCatAll,
    create:create,
    update:update,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    
}
export default categoryservice;