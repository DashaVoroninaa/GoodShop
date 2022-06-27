import {request} from './request'

const host = '/api/goods';
const hostPopularCategories = '/api/popular_categories'
const hostCategories = '/api/categories'

export const getGoods = (categoryTypeId) => {
    const url = `${host}${categoryTypeId}`
    return request(url)
}

export const getPopularCategories = () => {
    return request(`${hostPopularCategories}`)
}

export const getCategories = () => {
    return request(`${hostCategories}?categoryTypeId=`)
}

export const getCategoriesById = (categoryTypeId) => {
    return request(`${host}?categoryTypeId=${categoryTypeId}`)
}
