import React, { Component } from 'react'
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        };
    }

    render() {
    return (
        <div>
            <Button
                className="item-details-button"
                variant="link"
                onClick={() => this.setState({open: !this.state.open })}
            >
                { this.state.open === false ? `See` : `Hide` } item details
                { this.state.open === false ? ` +` : ` -` }
            </Button>
            <Collapse in={this.state.open}>
                <div>
                <Media>
                        <img 
                            width={100}
                            height={100}
                            alt="thumbnail"
                            src="https://i5.walmartimages.com/asr/94b3e4ef-1bda-4269-aa86-6f8dac0eba49_1.a361bf64163420b4381a5c430718d938.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                        />
                        <Media.Body>
                            <p>Essentials for Ozark Trail 30-Ounce Double-Wall, Vacuum-Sealed Tumbler</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong> {`$${this.props.price}`} </strong>
                                    <br />
                                    <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                </Col>
                                <Col md={6} >Qty: 1</Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </div>
            </Collapse>
        </div>
    )
  }
}
