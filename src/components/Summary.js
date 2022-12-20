import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import introduceImg from "../assets/img/introduce_img_girl.png";

export const Summery = () => {
    return (
        <section className="summary" id="summary">
            <Container>
                <Row>
                    <Col>
                        <div className="summary-bx">
                            <h2>About Us</h2>
                            <Row className="align-items-center">
                                <Col md={6}>
                                    <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy</p>
                                    <button type="submit"><span>Load more</span></button>
                                </Col>
                                <Col md={6}>
                                    <img src={introduceImg} alt="Contact Us" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}