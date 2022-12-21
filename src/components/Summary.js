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
                                    <p>
                                        <strong>1</strong> 조직들이 회계, 조달 및 제조 등 일상 업무 활동을 관리하기 위해 사용하는 시스템 및 소프트웨어를 구축합니다.<br /><br />
                                        <strong>2</strong> 비즈니스에 대한 이해를 바탕으로 사업부와 긴밀하게 소통하며, 한샘 내 총 100여 개의 시스템을 운영합니다.<br /><br />
                                        <strong>3</strong> 한샘의 주요 업무 프로세스를 통합적으로 연계 관리하고, 정보를 공유함으로써 전사적인 업무효율을 향상하고자 합니다.
                                    </p>
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