import React, { Component } from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Card
} from 'reactstrap'

import axios from 'axios'
import '../Asset/fileNavbar.css'

class Login extends Component {


    render() {
        return (


            // <div className="row">
            //     <div className="col-sm-12 col-sm-offset-2">
            <div>
                <Row className="justify-content-md-center">

                    <Col md={{ span: 4, offset: 4 }}>
                        <Form>
                            <div className="form-grup">
                                <Label for="Name" >Name
                                <Input type="text" className="form-control" placeholder="Masukkan Namanya">Nama</Input>
                                </Label>
                            </div>
                            <div className="form-grup">
                                <Label for="Paswword" >Paswword
                                <Input type="text" className="form-control" placeholder="Masukkan Password" >Password</Input>
                                </Label>
                            </div>
                        </Form>
                    </Col>
                </Row>




            </div>
            // </div>


        )
    }


}

export default Login


