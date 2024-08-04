import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import listOfImages from './../utils/imageFormate'
import NavBars from "./NavBarComponent";
import './../appStyles/gallery.scss'
import { ConactBanner } from "./MainPage";


const GallerySelection = () => {
    return (
        <>
            <ConactBanner />
            <NavBars />
            <Container>
                <Row>
                    <Col>
                        <ul className="gallery-container">
                            {listOfImages.map((image, index) =>
                                <li key={index} className="list-of-images"><img src={image} alt="img" className="gallery-image" /></li>
                            )}
                        </ul>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GallerySelection