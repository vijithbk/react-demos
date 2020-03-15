import React, { Component } from 'react'

import { Row, Col } from 'react-bootstrap'

import './subtotal.css'

class SubTotal extends Component {
    render() {
        return (
            <Row>
                <Col md={6}>
                    Sub total
                </Col>
                <Col md={6} className="amount">
                    {`$${this.props.price}`}
                </Col>
            </Row>
        )
    }
}

export default SubTotal
