import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBars from "./NavBarComponent"
import { ConactBanner } from "./MainPage";
import { Container } from "react-bootstrap";

function LinkPage() {
    return (
        <div>
            <ConactBanner />
            <NavBars />
            <Container>
                <Row>
                    <Col>
                        <h1>INTRODUCTION TO STEEL FABRICATION</h1>
                        <p>Steel has been one of the most desired materials for a while now, and it has a plethora of different appliances. The impressive toughness and other factors are the reason why steel components are used in pretty much anything, from transportation appliances to structures or entire buildings.
                            In its nature, steel is an alloy of iron and other materials – and the abundance of materials that can be added into the alloy creates a wide variety of steel types, with their own downsides and benefits. As such, steel fabrication is the process of turning said steel into a specific shape – a process of transformation, for all intents and purposes.
                            There are three basic parts of steel fabrication – melting raw materials, mixing melted materials into steel, and forming the desired shape using said steel. The entire process is rather complicated, has little to no room for error, and requires a person of specific skills to operate it all properly. This process is widely used by steel fabricators to generate all kinds of steel parts and details, such as:
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default LinkPage;