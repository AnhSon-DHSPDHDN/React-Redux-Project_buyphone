import React, { Component } from "react";
import * as Messages from '../constants/Messages'

class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this)
    }
    showRating(rating) {
        let i = 0, result = [];
        while (i < rating) {
            result.push(<i key={i} className="fa fa-star"></i>)
            i++;
        }
        while (i < 5) {
            result.push(<i key={i} className="fa fa-star-o"></i>)
            i++;
        }
        //while(i<rating)
        return result;
    }
    onAddToCart() {
        this.props.onAddToCart(this.props.product);
        this.props.onChangeMessage(Messages.MSG_ADD_TO_CART_SUCCESS);
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt="" />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {/* <li>
                                <i className="fa fa-star"></i>
                            </li> */}
                            <li>{this.showRating(product.rating)}</li>
                        </ul>
                        <p className="card-text">{product.description}</p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href="/#"
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={this.onAddToCart}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product