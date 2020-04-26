import * as types from '../constants/ActionType';

export const actionAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actionChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message
    }
}

export const actionDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product: product
    }
}

export const actionUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product: product,
        quantity: quantity
    }
}