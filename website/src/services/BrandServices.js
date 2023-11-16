import httpAxios from "../httpAxios";

function getBrandList(status){
    return httpAxios.get(`brand/index/${status}`);
}

function getBySlug(slug){
    return httpAxios.get('brand/show/'+slug);
}
// backend

function getBrands(){
    return httpAxios.get('brand/brand_all');
}

function create(brand){
    return httpAxios.post('brand/store', brand);
}

function remove(id){
    return httpAxios.delete('brand/destroy/'+id);

}

function getById(id){
    return httpAxios.get('brand/show/'+id);
}

function update(brand,id){
    return httpAxios.post('brand/update/'+id,brand);
}

function getTrash(){
    return httpAxios.get('brand/trash');
}

function deleteTrash(id){
    return httpAxios.get('brand/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('brand/rescover_trash/'+id);
}



const brandservices = {
    getBrandList: getBrandList,
    getBySlug:getBySlug,

    getBrands:getBrands,
    create:create,
    remove:remove,
    getById:getById,
    update:update,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    

};

export default brandservices;