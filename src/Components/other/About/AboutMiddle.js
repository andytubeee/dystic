import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import AboutUs2Image from '../../../assets/img/aboutus2.svg'

export default class AboutMiddle extends Component {
    render() {
        return (
            <div className="container-white">
                <Row className="justify-content-md-center">
                    <Col>
                        <div>
                            <h5 className="paragraph"><strong>That's right, everyone</strong><br></br>When you use our platform, we connect you with thousands of employers, regardless of accessibility.</h5>
                        </div>
                    </Col>
                    <Col>
                        <div class="img-2">
                            <Image src={AboutUs2Image} fluid  />
                        </div>
                    </Col>
                 </Row>
            </div>
        )
    }
}
