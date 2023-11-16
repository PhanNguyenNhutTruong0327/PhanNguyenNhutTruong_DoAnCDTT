import httpAxios from "../httpAxios";

function getConfig(){
    return httpAxios.get(`/config/getConfig`);
}

function update(id,config){
    return httpAxios.post(`/config/update/${id}`,config);
}

function getConfigBE(){
    return httpAxios.get(`/config/getConfigAll`);
}

const configservices = {
    getConfig:getConfig,
    update:update,
    getConfigBE:getConfigBE
}
export default configservices;