import React, { Component } from 'react'


import { Link } from 'react-router-dom'

import Axios from 'axios'
import '../Asset/fileNavbar.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verify: '',
            username: '',
            newPassword: '',
            confirmPassword: ''
        }
    }



    handleCode(event) {
        this.setState({ verify: event.target.value })
    }

    handleName(event) {
        this.setState({ username: event.target.value })
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
    }



    handleNewPassword(event) {
        this.setState({ newPassword: event.target.value })
    }

    handleConfirmPassword(event) {
        this.setState({ confirmPassword: event.target.value })
    }



    async handleSubmit(event) {
        const data = {
            verify: this.state.verify,
            username: this.state.username,
            newPassword: this.state.newPassword,
            confirmPassword: this.state.confirmPassword
        }
        console.log(data)
        console.log(this.state.code)
        await Axios.post(`${process.env.REACT_APP_API_URL}/forgot-password`, data)
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.message)
                } else {
                    alert(res.data.message)
                    this.props.history.push('/login')
                }
            })
            .catch(error => {
                alert(error.response.data.message)
            })
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
                                                    <h1 className="h4 text-gray-900 mb-4">FORGOT PASSWORD PAGE</h1>
                                                </div>
                                                <form className="user">

                                                    <div className="form-group">
                                                        <input type="text" name="code" className="form-control form-control-user" placeholder="Code..." onChange={(event) => { this.handleCode(event) }}></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => { this.handleName(event) }}></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" name="newPassword" className="form-control form-control-user" placeholder="New Password..." onChange={(event) => { this.handleNewPassword(event) }}></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" name="confirmPassword" className="form-control form-control-user" placeholder="Confirm Password..." onChange={(event) => { this.handleConfirmPassword(event) }}></input>
                                                    </div>
                                                    <button type="button" className="btn btn-primary btn-user btn-block" onClick={(event) => this.handleSubmit(event)}>
                                                        Submit
                                                        </button>



                                                </form>
                                                <hr></hr>
                                                <div class="text-center">
                                                    <Link to="/Login"> <a class="small" href="">Login Page</a></Link>
                                                </div>
                                                <div class="text-center">
                                                    <Link to="/check-username"> <a class="small" href="">Check Username Page</a></Link>
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

export default ForgotPassword


