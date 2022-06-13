import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const deleteType = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:'api/type/'+id});
    return data;
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand);
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
}

export const deleteBrand = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:'api/brand/'+id});
    return data;
}

export const createProduct = async (brand) => {
    const {data} = await $authHost.post('api/product', brand);
    return data;
}

export const fetchProduct = async (typeId, brandId, page, limit = 9) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, brandId, page, limit
        }});
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get(`api/product/${id}`);
    return data;
}

export const fetchDeleteProduct = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:`api/product/${id}`});
    return data;
}

export const updateProducts = async (id, body) => {
    const {data} = await $authHost({method:'PUT', url:`api/product/${id}`, data: body});
    return data;
}

export const getAllProductsInAdminPage = async (name, page = 1, filter = "All") => {
    const {data} = await $authHost({method:'GET', url:`api/product/search?page=${page}&name=${name}&filter=${filter}`});
    return data;
}

export const addProductToBasket = async (product) => {
    const {data} = await $authHost.post('api/basket', product);
    return data;
}

export const getProductFromBasket = async () => {
    const {data} = await $authHost.get('api/basket');
    return data;
}

export const deleteProductFromBasket = async (id) => {
    const {data} = await $authHost.delete(`api/basket/${id}`);
    return data;
}

export const addRating = async (body) => {
    const {data} = await $authHost.post('api/rating', body);
    return data;
}

export const checkRating = async (body) => {
    const {data} = await $authHost.post('api/rating/check-rating', body);
    return data;
}
