import httpAxios from "../httpAxios";

function create(rating){
    return httpAxios.post('rating/store', rating);
}

function getStar(product_id,user_id,){
    return httpAxios.get(`rating/number_start/${product_id}/${user_id}`);
}
const ratingservices = {
    create:create,
    getStar:getStar,

};
export default ratingservices;
