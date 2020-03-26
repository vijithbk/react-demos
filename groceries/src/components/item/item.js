import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../../redux'

import './item.css'

class Item extends React.Component {
    render() {
        return (
            <div class="item">
                <div class="title">{this.props.title}</div>
                <div>₹ {this.props.price}</div>
                <div><button class="btn btn-primary" onClick={() => this.props.addToCart(this.props)}>Add to cart</button></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Item)