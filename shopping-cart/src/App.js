import React, { Component } from 'react'

import { Container } from 'react-bootstrap'

import SubTotal from './components/subtotal/subtotal'
import PickupSavings from './components/pickup-savings/pickup-savings'
import TaxesFees from './components/taxes-fees/taxes-fees'
import EstimatedTotal from './components/estimated-total/estimated-total'
import ItemDetails from './components/item-details/item-details'
import PromoCode from './components/promo-code/promo-code'

import { connect } from 'react-redux'
import { handleChange } from './actions/promo-code'

import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       total: 102.96,
       pickupSavings: -3.85,
       taxes: 0,
       estimatedTotal: 0,
       disabledPromoButton: false
    }
  }

  componentDidMount() {
    this.setState({
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      () => {
        this.setState({
          estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
        })
      }
    )
  }

  giveDiscountHandler = (e) => {
    console.log(this.props.promoCode)
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      }, function() {
        this.setState({
          disabledPromoButton: true
        })
      })
    }
    e.preventDefault()
  }
  
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings pickupSavings={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={(e) => this.giveDiscountHandler(e)}
            isDisabled={this.state.disabledPromoButton}
          />
          <hr />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App)
