import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from './ProjectsCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import partFE1 from '../assets/img/partFE1.png';
import partFE2 from '../assets/img/partFE2.png';
import partFE3 from '../assets/img/partFE3.png';
import partBE1 from '../assets/img/partBE1.png';
import partDM1 from '../assets/img/partDM1.png';
import partDM2 from '../assets/img/partDM2.png';
import partDM3 from '../assets/img/partDM3.png';
import partDM4 from '../assets/img/partDM4.png';
import partDM5 from '../assets/img/partDM5.png';
import partDM6 from '../assets/img/partDM6.png';
import partQA1 from '../assets/img/partQA1.png';
import partQA2 from '../assets/img/partQA2.png';
import teamLeaderImg from "../assets/img/teamLeader.png";

export const Projects = () => {
    const manage = [
        {
            title: "Kim Hyeongtak",
            description: "Part Leader & Domain Manager",
            imgUrl: partDM1,
        },
        {
            title: "Ahn Daehoon",
            description: "Domain Manager & Developer",
            imgUrl: partDM2,
        },
        {
            title: "Lee Sooyoung",
            description: "Domain Manager & Developer",
            imgUrl: partDM3,
        },
        {
            title: "Kim moonyoung",
            description: "Domain Manager & Developer",
            imgUrl: partDM4,
        },
        {
            title: "Min Seonhong",
            description: "Domain Manager & Developer",
            imgUrl: partDM5,
        },
        {
            title: "Kim yunji",
            description: "Domain Manager & Developer",
            imgUrl: partDM6,
        }
    ];

    const fronEnd = [
        {
            title: "Son Soohyun",
            description: "Part Leader & Publisher & Developer",
            imgUrl: partFE1,
        },
        {
            title: "Lee Seungyeon",
            description: "Domain Manager & Developer",
            imgUrl: partFE2,
        },
        {
            title: "Kim Daewan",
            description: "Domain Manager & Developer",
            imgUrl: partFE3,
        }
    ];

    const backEnd = [
        {
            title: "Jang Gyeongmin",
            description: "Part Leader & Developer",
            imgUrl: partBE1,
        }
    ];

    const qa = [
        {
            title: "Lee Daewon",
            description: "Part Leader & Quality Assurance",
            imgUrl: partQA1,
        },
        {
            title: "Yun Mira",
            description: "Quality Assurance",
            imgUrl: partQA2,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Member</h2>
                        <p>ERP 개발팀은 현재 총 인원 13명으로 구성되어 있으며, 각 4개의 파트로 구분되어 있습니다.</p>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <img src={teamLeaderImg} alt="Contact Us" />
                            </Col>
                            <Col md={6}>
                                <h3>Team Leader</h3>
                                <h4>Kim Yutaek</h4>
                                <br />
                                <p className="txtLeft">언제나 밝은 미소로 직원들을 맞이하여 주시며, 팀원들을 이끌어주시고 소통에 힘써주시는 팀장님의 사랑 속에서 늘 가족적인 분위기로 웃음이 끊일 날이 없습니다.</p>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                                <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Manage</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">FrontEnd</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">BackEnd</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">QA</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                manage.map((project, index) => {
                                                    return (
                                                        <ProjectsCard 
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                fronEnd.map((project, index) => {
                                                    return (
                                                        <ProjectsCard 
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                backEnd.map((project, index) => {
                                                    return (
                                                        <ProjectsCard 
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Row>
                                            {
                                                qa.map((project, index) => {
                                                    return (
                                                        <ProjectsCard 
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}