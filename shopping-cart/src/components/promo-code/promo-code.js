import React, { Component } from 'react'

import { Row, Col, Button, Collapse, Well, Form } from 'react-bootstrap'

import { connect } from 'react-redux';
import { handleChange } from '../../actions/promo-code'

class PromoCode extends Component {
    constructor(props, context) {
        super(props, context)
    
        this.state = {
             open: false
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.props.handleChange(e)
    }
    
    render() {
        return (
            <div>
                <Button
                    className="promo-code-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `Apply` : `Hide`} promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Promo code</Form.Label>
                                        <Form.Control type="text" placeholde="Enter Promo Code"
                                            value={this.props.promocode}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Button
                                        block
                                        variant="success"
                                        className="btn btn-round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                        type="submit">
                                        Apply 
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode)
