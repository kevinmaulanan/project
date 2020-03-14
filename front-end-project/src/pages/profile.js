import React, { Component } from 'react'
import Logo from '../Asset/logo.png'
import { Link } from 'react-router-dom'
import Kevin from '../Asset/kevin.jpg'
import JumbotronCostume from '../Component/jumbotron'
import JumbrotronCostume from '../Component/jumbotron'


class Profile extends Component {
    render() {
        return (
            <div className="bg-secondary">
                <div className="mb-5">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <Link to="/">    <a className="navbar-brand" >
                            <img src={Logo} width="70" height="30" class="d-inline-block align-top" alt=""></img>
                    KEVMAN
                        </a></Link>
                    </nav>
                </div>

                <div className="pb-2">
                    <div class="container card o-hidden border-0 shadow-md my-5 ">
                        <div class="card-body p-0 ">
                            <div className="">
                                <div className="row">
                                    <div className="col-6 col-md-5">
                                        <h1 className="text-center"> Info Profile </h1>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className="row pb-5  ">
                                    <div className="col-md-4 ml-3">
                                        <div className="card o-hidden border-0 shadow-lg my-5">
                                            <div className="card-body p-0">
                                                <div className="text-center">
                                                    <div className="row pt-4">
                                                        <div className="col">
                                                            <img src={Kevin} height="200" width="200" className="rounded-circle"></img>
                                                        </div>
                                                    </div>
                                                    <div className="row pt-2">
                                                        <div className="col">
                                                            <p><strong>Kevin Maulana Nasrullah</strong></p>
                                                            <p>kevinmaulanan</p>
                                                            <p>kevinmaulana2703</p>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>





                                    <div className="col-md-7">
                                        <div className="card o-hidden border-0 shadow-lg my-5 pl-4">
                                            <div className="card-body p-0">
                                                <div className="row">

                                                    <div className="col-md-6">
                                                    </div>
                                                    <div className="col-sm-6 pt-2">
                                                        <i className="fas fa-edit"></i>
                                                        <button className="bg-primary text-white pl-2 pr-2">Edit Profile</button>
                                                    </div>

                                                </div>
                                                <hr></hr>


                                                <div className="row pt-2">
                                                    <div className="col-md-6 ">
                                                        <p className="" >Saldo</p>
                                                        <button>Top Up</button>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p>20000</p>
                                                    </div>

                                                </div>
                                                <hr></hr>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Saldo</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        Kevin Maulana Nasrullah
                                    </div>

                                                </div>
                                                <hr></hr>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        Email :
                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        Kevin Maulana Nasrullah
                                    </div>
                                                </div>
                                                <hr></hr>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        Tall :
                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        Kevin Maulana Nasrullah
                                    </div>
                                                </div>
                                                <hr></hr>

                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        Age :
                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        Kevin Maulana Nasrullah
                                    </div>
                                                </div>
                                                <hr></hr>

                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        <p>Saldo</p>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-md-6 col-xl-6">
                                                        Kevin Maulana Nasrullah
                                    </div>
                                                </div>
                                                <hr></hr>
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

export default Profile