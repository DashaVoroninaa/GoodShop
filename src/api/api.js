import {request} from './request'

const host = '/api/goods';
const hostPopularCategories = '/api/popular_categories'
const hostCategories = '/api/categories'

export const getSearch = (text) => {
    return request(`${host}?text=${text}`);
}

export const getPopularCategories = () => {
    return request(`${hostPopularCategories}`)
}

export const getCategories = () => {
    return request(`${hostCategories}?categoryTypeId=`)
}

export const getCategoriesById = (categoryTypeId) => {
    return request(`${host}?categoryTypeIds=${categoryTypeId}`)
}

export const getProductById = (id) => {
    return request(`${host}?ids=${id}`)
}

export const getAllCategories = () => {
    return request(`${host}`)
}
