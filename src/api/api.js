import {request} from './request'

const host = '/api/goods';
const hostCategories = '/api/popular_categories'

export const getGoods = (categoryTypeId) => {
    const url = `${host}${categoryTypeId}`
    return request(url)
}

export const getPopularCategories = () => {
    return request(`${hostCategories}`)
}
