import React, { Component } from "react";
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actionAddToCart, actionChangeMessage } from '../actions/index'

class ProductsContainer extends Component {
    showProducts(products) {
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            })
        }
        return result;
    }
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            return dispatch(actionAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            return dispatch(actionChangeMessage(message))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer)