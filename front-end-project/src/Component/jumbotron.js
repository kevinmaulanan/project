import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    NavLink,
    Card,
    CardBody,
    CardText
} from 'reactstrap'

import Logo from '../Asset/logo.png'

class JumbrotronCostume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: null
        }
    }

    render() {
        return (
            < div className="" >
                <div>
                    {this.state.restaurant &&
                        <>
                            <Jumbotron fluid className="" >
                                <div>
                                    <img src={Logo}></img>
                                    <h1 className="display-3" className="h1">RESTAURANT KEVMAN</h1>
                                    <p className="lead">Ini adalah Restaurant terbaik sedunia</p>
                                </div>
                            </Jumbotron>
                        </>
                    }
                </div>

                <div>
                    {!this.state.restaurant &&
                        <>

                            <Jumbotron fluid  >
                                <Container fluid>
                                </Container>
                            </Jumbotron>

                        </>
                    }
                </div>


            </div >

        )
    }
}

export default JumbrotronCostume