import React, { Component } from 'react'


import { Link } from 'react-router-dom'
import Axios from 'axios'
import '../Asset/fileNavbar.css'
import { Button } from 'reactstrap'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: '',
            email: '',
        }
    }


    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
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

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    handleSubmitRegister = (event) => {
        event.preventDefault()

        const data = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        console.log(data)
        Axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
            .then(res => {
                console.log(res.data)
                alert(res.data.msg)
                if (res.data.success === true) {

                    this.props.history.push('/login', { from: 'login' })
                }

            })
            .catch(error => {
                console.log(error)
                console.log('wpo')
                alert(error.response)

            })
    }
    render() {
        return (


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
                                                    <h1 className="h4 text-gray-900 mb-4">REGISTER PAGE</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control form-control-user" placeholder="Name..." onChange={(event) => { this.handleName(event) }}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => { this.handleUsername(event) }}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" className="form-control form-control-user" placeholder="Password..." onChange={(event) => { this.handlePassword(event) }}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="email" className="form-control form-control-user" placeholder="Email..." onChange={(event) => { this.handleEmail(event) }}></input>
                                                    </div>

                                                    <Button block type="submit" onClick={(event) => this.handleSubmitRegister(event)}>
                                                        Daftar
                                                    </Button>


                                                </form>
                                                <hr></hr>
                                                <div class="text-center">
                                                    <Link to="/login" > <a class="small" href="">Login Page</a></Link>
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

export default Register


