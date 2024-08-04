import React from "react";
import Card from 'react-bootstrap/Card';
import HomePage from "./HomePage";
import NavBars from "./NavBarComponent"


export const MainPage = () => {
    return (
        <div>
            <ConactBanner />
            <NavBars />
            <HomePage />
        </div>
    )
}

export const ConactBanner = () => {
    return (
        <div>
            <Card style={{ backgroundColor: "#142763", borderRadius: '0px' }}>
                <Card.Body style={{ color: "white", marginLeft: "6rem" }}>srinivasaengineers9591@gmail.com |   91 93812 06568</Card.Body>
            </Card>
        </div>
    )


}