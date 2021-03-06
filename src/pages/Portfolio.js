import React from 'react';

import Row from "../components/Row/index"
import Col from "../components/Col/index"
import Project from "../components/Project/index"

// import images
import weatherImg from "../assets/weather-dashboard.png"
import workdayImg from "../assets/workday-calendar.png";
import shop from "../assets/shop-pantry.png";
import password1gen from "../assets/password-generator.png";
import note from "../assets/notetaker.png";
import homegrown from "../assets/homegrown.png"

function Portfolio() {
    return (
        <>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Weather Dashboard"
                        deployedLink="https://caitie-gorham.github.io/weatherDashboard/#"
                        githubLink="https://github.com/caitie-gorham/weatherDashboard"
                        imgName={weatherImg}
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Password Generator"
                        deployedLink="https://caitie-gorham.github.io/passwordGenerator/"
                        githubLink="https://github.com/caitie-gorham/passwordGenerator"
                        imgName={password1gen}
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Workday Calendar"
                        deployedLink="https://caitie-gorham.github.io/workdayCalendar/"
                        githubLink="https://github.com/caitie-gorham/workdayCalendar"
                        imgName={workdayImg}
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Shop Your Pantry"
                        deployedLink="https://caitie-gorham.github.io/shopYourPantry/"
                        githubLink="https://github.com/caitie-gorham/shopYourPantry"
                        imgName={shop}
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Homegrown"
                        deployedLink="https://homegrown-app-grizzlies.herokuapp.com"
                        githubLink="https://github.com/caitie-gorham/project-2"
                        imgName={homegrown}
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Note Taker"
                        deployedLink="https://pure-island-68360.herokuapp.com"
                        githubLink="https://github.com/caitie-gorham/noteTaker"
                        imgName={note}
                    />
                </Col>
            </Row>
        </>
    )
}

export default Portfolio;