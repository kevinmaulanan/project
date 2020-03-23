import React, { Component } from 'react'

import {
    Button,
    Input
} from 'reactstrap'
import '../Asset/fileNavbar.css'

import { Link } from 'react-router-dom'
import Axios from 'axios'
import jwt from 'jsonwebtoken'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',

        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmitLogin = (event) => {
        event.preventDefault()

        const data = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(data)
        if (this.state.username === "" && this.state.password === "") {
            alert("Field tidak boleh kosong")
        }
        else if (this.state.username === "") {
            alert("Usename tidak boleh kosong")
        }
        else if (this.state.password === "") {
            alert("Password tidak boleh kosong")
        }

        else {
            Axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,
                data)
                .then(res => {
                    console.log(res)
                    window.localStorage.setItem('token', res.data.data.token)
                    this.props.history.push('/home', { from: 'login' })
                })
                .catch(error => {
                    console.log(error.response)
                    alert(error.response.data.message)
                })
        }
    }


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
                                                        <Input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => { this.handleUsername(event) }} ></Input>

                                                    </div>
                                                    <div className="form-group">
                                                        <Input type="password" name="password" className="form-control form-control-user" placeholder="Password..." onChange={(event) => { this.handlePassword(event) }} ></Input>

                                                    </div>

                                                    <Button className="btn btn-primary btn-user btn-block" onClick={(event) => this.handleSubmitLogin(event)} type="submit">Login</Button>

                                                </form>
                                                <hr></hr>
                                                <div className="text-center">
                                                    <Link to="/check-username"> Forgot Password?</Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="/register" >  Create an Account!</Link>
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


