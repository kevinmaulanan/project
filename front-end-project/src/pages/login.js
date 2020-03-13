import React, { Component } from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Card,
    NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'
import '../Asset/fileNavbar.css'

class Login extends Component {


    render() {
        return (


            // <div className="row">
            //     <div className="col-sm-12 col-sm-offset-2">

            <div className="bg">
                <div className="container p-5 mt-5">


                    <div className="row justify-content-center">

                        <div className="col-lg-6">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">

                                        <div className="col-lg-10 mx-auto">
                                            <div className="p-4">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">LOGIN PAGE</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user" placeholder="Username..."></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" placeholder="Password..."></input>
                                                    </div>
                                                    <Link to="/"><a href="" className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </a></Link>


                                                </form>
                                                <hr></hr>
                                                <div class="text-center">
                                                    <Link to="/forgot-password">  <a class="small">Forgot Password?</a></Link>
                                                </div>
                                                <div class="text-center">
                                                    <Link to="/register" >  <a class="small" href="register.html">Create an Account!</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div >

            </div >



        )
    }


}

export default Login


