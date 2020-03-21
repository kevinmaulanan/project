import React, { Component } from 'react'
import Axios from 'axios'

import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class EditRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            AllRestaurant: [

            ],
            modal: false,
            restaurant: '',
            description: '',
            id_admin: 1,
            images: null,
            id: this
        }
        this.toogle = this.toogle.bind(this)
        this.handleSubmitAddRestaurant = this.handleSubmitAddRestaurant.bind(this)
    }

    componentDidMount() {
        this.getRestaurant()

    }


    toogle() {
        this.setState({ modal: !this.state.modal })
    }


    handleRestaurant(event) {
        this.setState({ restaurant: event.target.value })
    }

    handleDescription(event) {
        this.setState({ description: event.target.value })
    }

    handleIdAdmin(event) {
        this.setState({ id_admin: event.target.value })
    }


    handleImageRestaurant(event) {
        this.setState({
            images: event.target.files[0]
        })
    }

    async handleDeleteRestaurant(id) {
        console.log(id)
        let data = await Axios.delete(`http://localhost:3333/restaurant/${id}`, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        this.getRestaurant()
        console.log(data)
    }

    handleSubmitAddRestaurant(event) {
        event.preventDefault()
        var formData = new FormData()
        formData.append('restaurant', this.state.restaurant)
        formData.append('description', this.state.description)
        formData.append('id_admin', this.state.id_admin)
        formData.append('images', this.state.images)
        Axios.post(`http://localhost:3333/restaurant`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data)
                console.log('woi' + formData)
                if (res.data.success === false) {

                    alert(res.data.message)
                } else {
                    alert(res.data.msg)
                    this.setState({ modal: !this.state.modal })
                    this.getRestaurant()
                }
            })
            .catch(error => {
                console.log('popop')
                console.log(error.response)
            })
    }

    getRestaurant() {
        Axios.get(`http://localhost:3333/restaurant`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.msg)
                    this.props.history.push('/home')
                } else {
                    this.setState({ AllRestaurant: res.data.data })
                }
            })
            .catch(error => {
                console.log(error)
                alert(error.response)
            })
    }



    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link onClick={this.toogle}>Add Restaurant++</Link>
                        </div>

                        <Modal size="md" className="" isOpen={this.state.modal} toggle={this.toogle} >
                            <div className="mr-5 ml-5">
                                <ModalHeader toggle={this.toogle} >Create Restaurant</ModalHeader>
                                <ModalBody>

                                    <div class="form-group row">
                                        <label for="" class="col-sm-3 col-form-label">Restaurant</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Restaurant" onChange={(event) => { this.handleRestaurant(event) }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="" class="col-sm-3 col-form-label">Desciption</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Description" onChange={(event) => { this.handleDescription(event) }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="" class="col-sm-3 col-form-label">Id Admin</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="1" onChange={(event) => { this.handleIdAdmin(event) }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="exampleFormControlFile1" class=" col-sm-3 col-form-label">Image Restaurant</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(event) => { this.handleImageRestaurant(event) }}></input>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={this.handleSubmitAddRestaurant} >Add Restaurant</button>
                                    </div>


                                </ModalBody>
                            </div>
                        </Modal>

                    </div>


                    <div className="row mt-2">
                        <div className="col-md ">
                            <div className="row mb-4 text-center" style={{ backgroundColor: "#DCDCDC", height: "60px", }}>

                                <div className="col-md-1 " style={{ marginTop: "15px" }}>
                                    <h5> id </h5>
                                </div>


                                <div className="col-md-3" style={{ marginTop: "15px" }}>
                                    <h5>Image</h5>
                                </div>

                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Restaurant </h5>
                                </div>


                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Desciption</h5>
                                </div>

                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Created-At </h5>
                                </div>


                                <div className="col-md-1" style={{ marginTop: "15px" }} >
                                    <h5>Edit</h5>
                                </div>


                                <div className="col-md-1" style={{ marginTop: "15px" }}>
                                    <h5>Delete</h5>
                                </div>
                            </div>

                            {this.state.AllRestaurant.map((v) => (

                                <div className="row mb-5 text-center" style={{ background: "#F5F5DC", paddingTop: "15px", paddingBottom: "15px" }}>
                                    <div className="col-md-1">
                                        <h4 className="text-secondary" style={{ marginTop: "45px" }}>{v.id} </h4>
                                    </div>


                                    <div className="col-md-3">
                                        <img src={`http://localhost:3333${v.image_restaurant}`} style={{ height: "160px", width: "260px" }} className="rounded border border-white"></img>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "45px" }}> {v.restaurant} </h5>
                                    </div>


                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "45px" }}> {v.description}</h5>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "45px" }}> {v.created_at}</h5>
                                    </div>



                                    <div className="col-md-1">
                                        <FaEdit style={{ height: "30px", width: "30px", marginTop: "45px" }}></FaEdit>
                                    </div>


                                    <div className="col-md-1">
                                        <Link onClick={() => this.handleDeleteRestaurant(v.id)}>
                                            <FaTrash className="fas" style={{ height: "30px", width: "30px", color: "red", marginTop: "45px" }} ></FaTrash></Link>

                                    </div>

                                </div>

                            )
                            )
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
