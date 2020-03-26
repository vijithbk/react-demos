import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from '../item/item';
import CartItem from '../cart-item/cart-item'

import './container.css'

export class container extends Component {    
    render() {
        const { products, cart } = this.props
        let total = 0
        cart.map(item => {
            total = total + item.price 
        })

        return (
            <section className="page">
                <section className="items">
                    {
                        products.map(item => (
                            <Item {...item} />
                        ))
                    }
                </section>
                <section className="cart">
                <div>My Cart<h3> ₹ {total}</h3></div>
                {
                    cart.map(item => (
                            <CartItem {...item} />
                        ))
                    }
                </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cart: state.products.cart
    }
}

export default connect(mapStateToProps)(container)
