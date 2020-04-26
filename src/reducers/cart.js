import * as types from '../constants/ActionType';
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    let { product, quantity } = action
    switch (action.type) {
        case types.ADD_TO_CART: {
            let check = state.find((state) => state.product.id === action.product.id);
            if (check) {
                state[state.indexOf(check)].quantity += quantity
            } else {
                state.push({
                    product: product,
                    quantity: quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        }
        case types.DELETE_PRODUCT_IN_CART: {
            let check = state.find((state) => state.product.id === action.product.id);
            if (check) {
                state.splice(state.indexOf(check), 1)
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_PRODUCT_IN_CART: {
            let check = state.find((state) => state.product.id === action.product.id);
            if (check) {
                state[state.indexOf(check)].quantity += quantity
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        default: return [...state]
    }
}
export default cart;