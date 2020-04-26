import React, { Component } from "react";
import * as Message from '../constants/Messages'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProductInCart = this.onDeleteProductInCart.bind(this)
        this.onUpdateProductInCartUp = this.onUpdateProductInCartUp.bind(this)
        this.onUpdateProductInCartD = this.onUpdateProductInCartD.bind(this)
    }

    onDeleteProductInCart = () => {
        this.props.onDeleteProductInCart(this.props.cart.product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showTotal = (quantity, price) => {
        return `${quantity * price}$`
    }

    onUpdateProductInCartUp = () => {
        this.props.onUpdateProductInCart(this.props.cart.product, 1);
        this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
    onUpdateProductInCartD = () => {
        if (this.props.cart.quantity > 1) {
            this.props.onUpdateProductInCart(this.props.cart.product, -1);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    render() {
        let { cart } = this.props
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={this.onUpdateProductInCartD}
                        >
                            <a href="/#">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={this.onUpdateProductInCartUp}
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(cart.quantity, cart.product.price)}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={this.onDeleteProductInCart}
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem