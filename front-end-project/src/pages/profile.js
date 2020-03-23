import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Kevin from '../Asset/kevin.jpg'

import Background from '../Asset/Background.jpg'
import Axios from 'axios'
import '@fortawesome/free-solid-svg-icons'

import { FaEdit, FaCode, FaCheck } from 'react-icons/fa'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataProfile: {
            },
            ViewTopUp: {
            },

            topup: {
            },
            name: null,
            email: null,
            age: null,
            tall: null,
            weight: null,
            images: null,
            modalUpdate: false
        }
        this.updateDataProfile = this.updateDataProfile.bind(this)

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

    toogleUpdate() {
        this.setState({ modalUpdate: !this.state.modalUpdate })
    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handleEmail(event) {
        this.setState({ email: event.target.value })
    }

    handleAge(event) {
        this.setState({ age: event.target.value })
    }

    handleTall(event) {
        this.setState({
            tall: event.target.value
        })
    }

    handleWeight(event) {
        this.setState({ weight: event.target.value })
    }

    handleImagesProfile(event) {
        this.setState({ images: event.target.files[0] })
    }

    async  updateDataProfile() {
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.age)
        console.log(this.state.tall)
        console.log(this.state.weight)
        console.log(this.state.images)
        var formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('age', this.state.age)
        formData.append('tall', this.state.tall)
        formData.append('weight', this.state.weight)
        formData.append('images', this.state.images)
        console.log(formData)

        const data2 = await Axios.patch(`${process.env.REACT_APP_API_URL}/profile`, formData, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
            .then(res => {
                console.log(res)
                console.log('woi')
                this.setState({ modalUpdate: !this.state.modalUpdate })
                alert(res.data.message)
                this.getDataProfile()
            })
            .catch(error => {
                console.log('woi')
                console.log(error.response)
                console.log(error.response)
            })
        console.log(data2)
    }


    getDataProfile() {
        Axios.get(`${process.env.REACT_APP_API_URL}/profile`, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    dataProfile: res.data.data,
                    images: res.data.data.image,
                    name: res.data.data.nama,
                    email: res.data.data.email,
                    age: res.data.data.age,
                    tall: res.data.data.tall,
                    weight: res.data.data.weight,
                    images: res.data.data.image,

                })
                console.log(this.state.images)

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
                console.log(error.response.data)
                alert(error.response.data.message)
                this.props.history.push('/login')
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

                                        <img src={`${process.env.REACT_APP_API_URL}${this.state.dataProfile.image}`} className="rounded-circle border border-light img-center mx-auto d-block" style={{ height: "160px", width: "160px", marginTop: "-85px", marginBottom: "20px" }}></img>
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

                                            <Link onClick={() => this.toogleUpdate()}>
                                                <FaEdit style={{ height: "25px", width: "30px", marginRight: "5px" }} className="ml-2"></FaEdit>
                                            </Link>

                                            <Link onClick={() => this.toogleUpdate()}>
                                                <h5>Edit Profile</h5>
                                            </Link>
                                            <Modal size="md" className="" isOpen={this.state.modalUpdate} toggle={() => this.toogleUpdate()} >
                                                <div className="mr-5 ml-5">
                                                    <ModalHeader toggle={() => this.toogleUpdate()} >Update Profile</ModalHeader>
                                                    <ModalBody>

                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Name</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" placeholder="Name"
                                                                    onChange={(event) => this.handleName(event)}
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Email</label>
                                                            <div className="col-sm-9">
                                                                <input type="email" class="form-control" placeholder="Email"
                                                                    onChange={(event) => this.handleEmail(event)}
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Age</label>
                                                            <div className="col-sm-9">
                                                                <input min="0" type="number" class="form-control" placeholder="Age"

                                                                    onChange={(event) => this.handleAge(event)}
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Tall</label>
                                                            <div className="col-sm-9">
                                                                <input min="0" type="number" class="form-control" placeholder="Tall"

                                                                    onChange={(event) => this.handleTall(event)}
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-3 col-form-label">Weight</label>
                                                            <div className="col-sm-9">
                                                                <input min="0" type="number"
                                                                    class="form-control" placeholder="Weight"
                                                                    onChange={(event) => this.handleWeight(event)}
                                                                ></input>
                                                            </div>
                                                        </div>



                                                        <div class="form-row">
                                                            <label for="exampleFormControlFile1" class=" col-sm-3 col-form-label" >Image Profile</label>
                                                            <div class="col-sm-9">
                                                                <input type="file" class="form-control-file" id="exampleFormControlFile1"

                                                                    onChange={(event) => { this.handleImagesProfile(event) }}></input>
                                                            </div>
                                                        </div>

                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleUpdate()}>Close</button>
                                                            <Link > <button type="button" class="btn btn-primary" onClick={() => this.updateDataProfile()} >Update Profile</button></Link>
                                                        </div>
                                                    </ModalBody>
                                                </div>
                                            </Modal>


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




                </div>
            </div >

        )
    }
}

export default Profile