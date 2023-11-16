import httpAxios from "../httpAxios";

function getSliderMain(position){
    return httpAxios.get(`slider/getSliderMain/${position}`);
}

// 
function getSliderAll(){
    return httpAxios.get(`slider/index`);
}

function create(slider){
    return httpAxios.post(`slider/store`, slider);
}

function getById(id){
    return httpAxios.get(`slider/show/${id}`);
}

function update(id,slider){
    return httpAxios.post(`slider/update/${id}`, slider);
}

function getTrash(){
    return httpAxios.get('slider/trash');
}

function deleteTrash(id){
    return httpAxios.get('slider/trash/'+id);
}

function RescoverTrash(id){
    return httpAxios.get('slider/rescover_trash/'+id);
}

function remove(id){
    return httpAxios.delete('slider/destroy/'+id);
}


const sliderservices = {
    getSliderMain:getSliderMain,
    getSliderAll:getSliderAll,
    create:create,
    getById:getById,
    update:update,

    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    remove:remove,
    
}
export default sliderservices;