import React from 'react';

import Row from "../components/Row/index"
import Col from "../components/Col/index"
import Project from "../components/Project/index"

function Portfolio() {
    return (
        <>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Weather Dashboard"
                        deployedLink="https://caitie-gorham.github.io/weatherDashboard/#"
                        githubLink="https://github.com/caitie-gorham/weatherDashboard"
                        imgName="weather-dashboard"
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Password Generator"
                        deployedLink="https://caitie-gorham.github.io/passwordGenerator/"
                        githubLink="https://github.com/caitie-gorham/passwordGenerator"
                        imgName="password-generator"
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Workday Calendar"
                        deployedLink="https://caitie-gorham.github.io/workdayCalendar/"
                        githubLink="https://github.com/caitie-gorham/workdayCalendar"
                        imgName="workday-calendar"
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Shop Your Pantry"
                        deployedLink="https://caitie-gorham.github.io/shopYourPantry/"
                        githubLink="https://github.com/caitie-gorham/shopYourPantry"
                        imgName="shop-pantry"
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <Project
                        title="Homegrown"
                        deployedLink="https://homegrown-app-grizzlies.herokuapp.com"
                        githubLink="https://github.com/caitie-gorham/project-2"
                        imgName="homegrown"
                    />
                </Col>
                <Col size="md-6">
                    <Project
                        title="Note Taker"
                        deployedLink="https://pure-island-68360.herokuapp.com"
                        githubLink="https://github.com/caitie-gorham/noteTaker"
                        imgName="notetaker"
                    />
                </Col>
            </Row>
        </>
    )
}

export default Portfolio;