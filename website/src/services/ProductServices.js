import httpAxios from "../httpAxios";

function getProductNew(limit){
    return httpAxios.get(`product/ProductNew/${limit}`);
}

function getProductHome(category_id,limit,orderby){
    return httpAxios.get(`product/product_home/${category_id}/${limit}/${orderby}`);
}

function getProductDetail(id){
    return httpAxios.get(`product/product_detail/${id}`);
}

function getProductAll(limit,page,filter,filter_price){
    return httpAxios.post(`product/product_all/${limit}/${page}/${filter}`,filter_price);
}

function getProductByCategoryId(category_id,limit,page, filter,filter_price){
    return httpAxios.post(`product/product_category/${category_id}/${limit}/${page}/${filter}`,filter_price);
}

function getProductByBrandId(brand_id,limit,page,filter,filter_price){
    return httpAxios.post(`product/product_brand/${brand_id}/${limit}/${page}/${filter}`,filter_price);
}

function getSearchProduct(key,limit,page){
    return httpAxios.get(`product/search_product/${key}/${limit}/${page}`);
}

function getBestSaler(){
    return httpAxios.get(`product/getBestProSaler`);
}

// backend

function getProducts(limit,page){
    return httpAxios.get(`product/index/${limit}/${page}`);
}

function getById(id){
    return httpAxios.get(`product/show/${id}`);
}

function create(product){
    return httpAxios.post(`product/store`,product);
}

function update(id,product){
    return httpAxios.post(`product/update/${id}`,product);
}

function getTrash(){
    return httpAxios.get('product/trash');
}

function deleteTrash(id){
    return httpAxios.get(`product/trash/${id}`);
}

function RescoverTrash(id){
    return httpAxios.get('product/rescover_trash/'+id);
}

function deletedProduct(id){
    return httpAxios.delete('product/destroy/'+id);
}
// import product
function getProStoreImport(){
    return httpAxios.get('product/getProStoreImport');
}

function getProductImport(page,name){
    return httpAxios.get(`product/getImport/${page}/${name}`);
}

function getImportCatid(catid,page){
    return httpAxios.get(`product/getImportCatId/${catid}/${page}`);
}

function getImportBrandid(brand_id,page){
    return httpAxios.get(`product/getImportBrandId/${brand_id}/${page}`);
}

function importPro(data){
    return httpAxios.post('product/addImportPro',data);
}

function deleteTrashImport(id){
    return httpAxios.get(`product/deleteTrashImport/${id}`);
}
// product sale

function getProductSale(limit){
    return httpAxios.get('product_sale/index/'+limit);
}

function getProductSaleAll(limit,page){
    return httpAxios.get(`product_sale/getSaleAll/${limit}/${page}`);
}

function getTrashSale(){
    return httpAxios.get('product_sale/trash');
}

function deleteTrashSale(idsale,id){
    return httpAxios.get(`product_sale/trash/${idsale}/${id}`);
}

function RescoverTrashSale(id){
    return httpAxios.get('product_sale/rescover_trash/'+id);
}

function deletedProductSale(id){
    return httpAxios.delete('product_sale/destroy/'+id);
}

function getSaleById(id){
    return httpAxios.get('product_sale/show/'+id);
}


const productServices = {
    getProductNew:getProductNew,
    getProductHome:getProductHome,
    getProductDetail:getProductDetail,
    getProductAll:getProductAll,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getSearchProduct:getSearchProduct,
    getProducts:getProducts,
    getById:getById,
    create:create,
    update:update,
    getBestSaler:getBestSaler,
    
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    deletedProduct:deletedProduct,

    getProductImport:getProductImport,
    getImportCatid:getImportCatid,
    getImportBrandid:getImportBrandid,
    getProStoreImport:getProStoreImport,
    importPro:importPro,
    deleteTrashImport:deleteTrashImport,

    
    
    // sale
    getProductSale:getProductSale,
    getProductSaleAll:getProductSaleAll,
    getTrashSale:getTrashSale,
    deleteTrashSale:deleteTrashSale,
    RescoverTrashSale:RescoverTrashSale,
    deletedProductSale:deletedProductSale,
    getSaleById:getSaleById,
    


}
export default productServices;