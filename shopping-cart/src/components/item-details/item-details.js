import React, { Component } from 'react'

import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap'

import './item-details.css'

export class ItemDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            open: false
        }
    }
    
    render() {
        return (
            <div>
                <Button className="itemDetailsButton"
                variant="link"
                onClick={()=>this.setState({open: !this.state.open})}
                >
                    { this.state.open === false ? `See` : `Hide` } item details
                    { this.state.open === false ? `+` : `-` }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src="https://i5.walmartimages.com/asr/9f72befb-51f5-468e-87b0-10cd6ff54b16_1.9d1d9b8c726928be75c73a1dd4b2c04b.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <p>
                                    Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
                                </p>
                                <Row>
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty: 1
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ItemDetails

