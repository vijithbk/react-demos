import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../../redux'

import './cart-item.css'

class CartItem extends React.Component {
    render() {
        return (
            <div class="cart-item">
                <div class="cart-item-title">{this.props.title}</div>
                <div>INR {this.props.price}</div>
                <div><button class="btn btn-primary" onClick={() => this.props.removeFromCart(this.props)}>Remove from cart</button></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)