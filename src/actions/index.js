import * as types from './types';

export function addProductData(data) {
    return { type: types.SAVE_PRODUCT_DATA, data }
}

export function setSelectedVariant(id, data, isDefault) {
    return { type: types.SET_SELECTED_VARIANT, id, data, isDefault }
}

export function setFilter(data) {
    return { type: types.SET_FILTER, data }
}