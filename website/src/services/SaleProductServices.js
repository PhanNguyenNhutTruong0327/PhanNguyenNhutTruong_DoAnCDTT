import httpAxios from "../httpAxios";

function update(id,product){
    return httpAxios.post(`product_sale/update/${id}`,product);
}

function getSaleById(id){
    return httpAxios.get('product_sale/show/'+id);
}

function store(sale){
    return httpAxios.post(`product_sale/store`,sale);
}

const saleproductservices = {
    update: update,
    getSaleById:getSaleById,
    store:store

}
export default saleproductservices;