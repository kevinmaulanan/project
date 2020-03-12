import React, { Component } from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col
} from 'reactstrap'

import axios from 'axios'
import '../Asset/fileNavbar.css'

class Login extends Component {


    render() {
        return (
            <div className="login-container Image">


                <div className="from">
                    <div className="rows">
                        <Row>

                            <Col >
                                <Form >
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </FormGroup>
                                </Form>
                            </Col>


                        </Row>
                    </div>
                </div>
            </div>

        )
    }


}

export default Login


