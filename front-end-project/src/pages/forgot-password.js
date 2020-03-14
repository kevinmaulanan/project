import React, { Component } from 'react'


import { Link } from 'react-router-dom'

import axios from 'axios'
import '../Asset/fileNavbar.css'

class ForgotPassword extends Component {


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
                                                        <input type="text" className="form-control form-control-user" placeholder="Username..."></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user" placeholder="Email..."></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" placeholder="New Password..."></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" placeholder="Confirm Password..."></input>
                                                    </div>
                                                    <Link to="/Login"><button type="button" className="btn btn-primary btn-user btn-block">
                                                        Submit
                                                        </button>
                                                    </Link>


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

export default ForgotPassword


