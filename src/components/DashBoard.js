import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Footer } from './Footer';

export const DashBoard = () => {
    return (
        <div className="dashboard">
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <div className="dashboard-bx">

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
        
    )

}