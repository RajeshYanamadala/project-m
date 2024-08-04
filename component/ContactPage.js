import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBars from "./NavBarComponent"
import './../appStyles/contact.scss'
import { ConactBanner } from "./MainPage";
import { Container } from "react-bootstrap";

function ContactPage() {
    return (
        <div>
            <ConactBanner />
            <NavBars />
            <Container>
                .   <Row className="contact-container" >
                    <h2 className="contact-heading">HEAD OFFICE</h2>
                    <Col sm={4} >
                        <h4 className="contact-address"> Location Unit-I</h4>
                        <p>SRINIVASA ENGINEERING WORKS
                            Plot No:2-A Vellala Street,
                            Ambattur Industrial Estate,
                            Athipet, Chennai-600 058.
                            Tel: +91 44 2625 3746 / +91 44 4386 7374
                            Mob: +91 94448 73746
                            Mr. Sivasubramanian </p>
                    </Col>
                    <Col sm={4}>
                        <h4 className="contact-address">Location Unit-II</h4>
                        <p>
                            SRINIVASA ENGINEERING WORKS
                            14B, Vivekanandha Road,
                            SubbaNaicken Pudur,
                            ManiyakaramPalayam,
                            Ganapathy Post,
                            Coimbatore-641006.
                            Mob: +91 98400 82224
                            Mr.Sivasubramanian P
                            E-Mail: info@amengineeringworks.com
                            Website: www.amengineeringworks.com
                        </p>
                    </Col>
                    <Col sm={4}>
                        <img src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_1280.png" alt="img" className="contact-image" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ContactPage;



