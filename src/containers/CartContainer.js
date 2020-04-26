import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart'
import * as message from '../constants/Messages'
import CartItem from '../components/CartItem'
import CartResult from "../components/CartResult";
import { actionDeleteProductInCart, actionChangeMessage, actionUpdateProductInCart } from '../actions/index'

class CartContainer extends Component {
    showCartItem = (cart) => {
        let result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((cart, index) => {
                return <CartItem
                    key={index}
                    cart={cart}
                    onDeleteProductInCart={this.props.onDeleteProductInCart}
                    onChangeMessage={this.props.onChangeMessage}
                    onUpdateProductInCart={this.props.onUpdateProductInCart}
                />
            })
        }
        return result;
    }
    showTotalMoney = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalMoney(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStatetoProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            return dispatch(actionDeleteProductInCart(product))
        },
        onChangeMessage: (message) => {
            return dispatch(actionChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            return dispatch(actionUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CartContainer)