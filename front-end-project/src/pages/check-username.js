import React, { Component } from 'react'
import { Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class CheckUsername extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }


    handleCheckUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            username: this.state.username
        }
        console.log(this.state.username)
        Axios.post(`${process.env.REACT_APP_API_URL}/verify`, data)
            .then(res => {
                console.log(res)
                if (res.data.success === false) {
                    alert(res.data.message)
                } else {
                    alert("Copy Code ini " + res.data.Code)
                    this.props.history.push('/forgot-password')
                }
            })
            .catch(error => {
                console.log('pppp')
                console.log(error)
                console.log(error.response)
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
                                                    <h1 className="h4 text-gray-900 mb-4">CHECK USERNAME PAGE</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <Input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => this.handleCheckUsername(event)} ></Input>

                                                    </div>


                                                    <Button className="btn btn-primary btn-user btn-block" onClick={(event) => this.handleSubmit(event)} type="submit">Check Username</Button>

                                                </form>
                                                <hr></hr>
                                                <div className="text-center">
                                                    <Link to="/login"> Login</Link>
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


export default CheckUsername