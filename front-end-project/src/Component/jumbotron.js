import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container
} from 'reactstrap'

import Logo from '../Asset/logo.png'

class JumbrotronCostume extends Component {

    render() {
        return (
            <div className="text-center">

                <Jumbotron fluid >

                    <Container fluid>
                        <img src={Logo}></img>
                        <h1 className="display-3">Restaurant Kevman</h1>
                        <p className="lead">Ini adlaah Restaurant terbaik sedunia</p>
                    </Container>

                </Jumbotron>

            </div>
        )
    }
}

export default JumbrotronCostume