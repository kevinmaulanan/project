import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Button, Container, Row, Col } from 'reactstrap'
import Logo from '../Asset/logo.png'

export default class EditProfile extends Component {



    render() {
        return (
            <div>
                <Container>
                    <h1>Edit Profile</h1>
                    <hr></hr>
                    <Row>
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <Col md="8">
                                    <Form className="m-5">
                                        <FormGroup>
                                            <Label for="exampleName">Name</Label>
                                            <Input type="text" name="name" id="exampleName" placeholder="Name....." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Email....." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAge">Age</Label>
                                            <Input type="text" name="age" id="exampleAge" placeholder="Age....." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleTall">Tall</Label>
                                            <Input type="text" name="tall" id="exampleTall" placeholder="Tall....." />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleWeight">Weight</Label>
                                            <Input type="text" name="weight" id="exampleWeight" placeholder="Weight....." />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="exampleFile">File</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                Pilih File
                                    </FormText>
                                        </FormGroup>
                                        <Button>Submit</Button>

                                    </Form>

                                </Col>

                            </div>

                        </div>

                    </Row>


                </Container>
            </div >
        )
    }
}
