import React, { Component } from 'react'
import Logo from '../Asset/logo.png'
import { Link } from 'react-router-dom'
import Kevin from '../Asset/kevin.jpg'
import Restaurant from '../Asset/restaurant.png'
import Background from '../Asset/Background.jpg'
import Axios from 'axios'
import '@fortawesome/free-solid-svg-icons'
import EditIcon from '../Asset/edit_icon.png'
import Instagram from '../Asset/instagram_logo.svg'
import { FaEdit, FaCode, FaCheck } from 'react-icons/fa'



class DetailUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataProfile: {
            },
            ViewTopUp: {
            },

            topup: {
            }
        }

    }
    componentDidMount() {
        this.getDataProfile()
        this.getTopUp()
        // console.log(this.state.dataProfile)
    }

    componentDidUpdate() {
        if (this.state.dataProfile !== this.state.topup) {
            this.getTopUp()
        }
    }

    getDataProfile() {
        Axios.get(`${process.env.REACT_APP_API_URL}/profile`, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
            .then(res => {

                this.setState({
                    dataProfile: res.data.data
                })
            })
            .catch(error => {

            })
    }


    handleTopUp(event) {
        this.setState({
            topup: event.target.value
        })
    }


    async handleSubmitTopUp(event) {
        const data = {
            topup: this.state.topup
        }

        await Axios.post(`${process.env.REACT_APP_API_URL}/topup/add`, data, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
            .then(res => {

                alert(res.data.message)
            })
            .catch(error => {

                alert(error.response.data.message)
            })
    }


    getTopUp() {
        Axios.get(`${process.env.REACT_APP_API_URL}/topup`, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
            .then(res => {
                this.setState({
                    ViewTopUp: res.data.data
                })
            })
            .catch(error => {
                alert(error.response)
            })
    }


    render() {
        return (



            <div>
                <div className="container" style={{ height: "2000px" }}>
                    <div className="row">
                        <div className="col">
                            <h2>Info Profile</h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow mb-5 bg-white rounded">
                                <div className=" img-response">
                                    <img src={Background} className="img-response" style={{ height: "200px", width: "350px" }}></img>
                                    <div className="img-center">
                                        <img src={Kevin} className="rounded-circle border border-light img-center mx-auto d-block" style={{ height: "160px", width: "160px", marginTop: "-85px", marginBottom: "20px" }}></img>
                                    </div>

                                    <h4 className="text-center">{this.state.dataProfile.nama}</h4>
                                    <h5 className="text-center text-secondary">{this.state.dataProfile.email}</h5>
                                    <div className="text-center m-3">
                                        <div className="btn rounded-pill bg-warning text-white center-block" style={{}}>
                                            <h2 className="text-center">Rp. {this.state.ViewTopUp.topup},- </h2>
                                        </div>
                                    </div>

                                    <div className="text-center m-3">
                                        Rp. <input min="0" type="number" style={{ height: "29px", width: "150px" }} onChange={(event) => { this.handleTopUp(event) }}></input>

                                        <button type="submit" className="ml-2" onClick={(event) => this.handleSubmitTopUp(event)} >Top Up</button>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-8 ">
                            <div className="card shadow p-3 mb-5 bg-white rounded ">
                                <div className="row">
                                    <div className="col">
                                        <div className="row ">

                                            <Link>
                                                <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2"></FaEdit>
                                            </Link>

                                            <Link>
                                                <h5>Edit Profile</h5>
                                            </Link>


                                        </div>


                                        <hr></hr>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <FaCheck style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" /><h5 className="mb-2">Name</h5>
                                        </div>
                                        <h5 className="text-right text-primary">{this.state.dataProfile.nama}</h5>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <FaCheck style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" /><h5 className="mb-2">Email</h5>
                                        </div>
                                        <h5 className="text-right text-primary">{this.state.dataProfile.email}</h5>
                                        <hr></hr>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <FaCheck style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" /><h5 className="mb-3">Age</h5>
                                        </div>
                                        <h5 className="text-right text-primary">{this.state.dataProfile.age} Year</h5>
                                        <hr></hr>

                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <FaCheck style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" />
                                            <h5 className="mb-3">Tall</h5>
                                        </div>
                                        <i class="fas fa-edit"></i>
                                        <h5 className="text-right text-primary">{this.state.dataProfile.tall} cm</h5>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <FaCheck style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" />
                                            <h5 className="mb-3">Weight</h5>
                                        </div>
                                        <h5 className="text-right text-primary">{this.state.dataProfile.weight} kg</h5>
                                        <hr></hr>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>


                    {/* Update Profile */}
                    <div className="col-md-8 ">
                        <div className="card shadow p-3 mb-5 bg-white rounded ">
                            <div className="row">
                                <div className="col">
                                    <div className="row ">

                                        <Link>
                                            <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2"></FaEdit>
                                        </Link>

                                        <Link>
                                            <h5>Edit Profile</h5>
                                        </Link>


                                    </div>


                                    <hr></hr>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" />
                                        <h5 className="mb-2">Name</h5>
                                    </div>
                                    <input type="text" value={this.state.dataProfile.nama} className="text-right text-primary"></input>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" /><h5 className="mb-2">Email</h5>
                                    </div>
                                    <h5 className="text-right text-primary">{this.state.dataProfile.email}</h5>
                                    <hr></hr>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" /><h5 className="mb-3">Age</h5>
                                    </div>
                                    <h5 className="text-right text-primary">{this.state.dataProfile.age} Year</h5>
                                    <hr></hr>

                                </div>
                            </div>



                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2" />
                                        <h5 className="mb-3">Tall</h5>
                                    </div>

                                    <h5 className="text-right text-primary">{this.state.dataProfile.tall} cm</h5>
                                    <hr></hr>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <div className="row">

                                        <div className="col-md-8">
                                            <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="" />
                                            <h5 className="mb-3">Weight</h5>
                                        </div>

                                        <div className="col-md-4" style={{ marginTop: "30px" }}>
                                            <input type="text" class="form-control" placeholder="Last name" style={{ border: "none", height: "60px", width: "200px" }} className="text-right"></input>
                                        </div>
                                    </div>

                                    <hr></hr>
                                </div>
                            </div>



                        </div>
                    </div>



                </div>
            </div >

        )
    }
}

export default DetailUser