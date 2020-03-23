import React, { Component } from 'react'


import { Link } from 'react-router-dom'
import Axios from 'axios'
import '../Asset/fileNavbar.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data_restaurant: []
        }
    }

    componentDidMount() {
        this.postRegister()
    }

    postRegister() {
        Axios.POST(`${process.env.REACT_APP_API_URL}/register`)
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.message)
                }
                else {
                    let dataArr = res.data.result
                    this.setState({ data_restaurant: dataArr })
                }
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
                                                        <input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => { this.handleUsername(event) }}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="email" className="form-control form-control-user" placeholder="Email..." onChange={(event) => { this.handleEmail(event) }}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" className="form-control form-control-user" placeholder="Password..." onChange={(event) => { this.handlePassword(event) }}></input>
                                                    </div>
                                                    <Link to="/"><a href="" className="btn btn-primary btn-user btn-block">
                                                        Daftar
                                                    </a></Link>


                                                </form>
                                                <hr></hr>
                                                <div class="text-center">
                                                    <Link to="/Login"> <a class="small" href="">Login Page</a></Link>
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


