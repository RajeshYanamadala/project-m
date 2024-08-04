import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../appStyles/homePage.scss'

function HomePage() {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <h1>Fabrication work in Hyderabad</h1>
                    <p>We are offering Residential,Industrial and
                        commercial Fabrication work in Hyderabad or
                        welding work in Hyderabad.This service is executed by
                        our skilled professionals using high grade tools and
                        advanced technology. Our professionals Fabricators
                        in Hyderabad check all the quality parameters associated
                        with Metal Fabrication in Hyderabad or steel Fabrication
                        in Hyderabad to this service and perform the service in the
                        best possible manner. We offer this service as per the requirements
                        of our clients. Further, the offered service is highly demanded
                        by our clients for its cost-effectiveness and promptness features.
                        We offer our clients the premium quality manufacturing with Heavy
                        Steel Sections in workshop and on site. Offered service is widely
                        demanded by our clients owing to its high reliability and perfect
                        execution. So if you are searching for Fabrication shop in Hyderabad,Welding
                        services in Hyderabad,sheet metal Fabrication in Hyderabad,sheet metal Fabrication near me
                        in Hyderabad,welding Fabrication in Hyderabad,welding and Fabrication in Hyderabad,General Fabrication
                        in Hyderabad,Fabrication service in Hyderabad.Then Call us,this service is carried out under the supervision of our team expert.</p>
                </Col>
                <Col sm={4}>
                    <img src="https://www.serviceonwheel.com/uploads/service/324731584076339.jpg" alt="img" className="home-page-image" />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;