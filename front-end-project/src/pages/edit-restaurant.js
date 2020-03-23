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
            modalAdd: false,
            modalUpdate: false,
            modalDelete: false,


            restaurant: '',
            description: '',
            id_admin: 1,
            images: null,
            idItems: this
        }
        this.toogleAdd = this.toogleAdd.bind(this)
        this.toogleUpdate = this.toogleUpdate.bind(this)

    }

    componentDidMount() {
        this.getRestaurant()

    }


    toogleAdd() {
        this.setState({ modalAdd: !this.state.modalAdd })
    }

    toogleDelete() {
        this.setState({ modalDelete: !this.state.modalDelete })
    }

    toogleUpdate(id) {
        console.log(id)
        this.setState({ modalUpdate: !this.state.modalUpdate, idItems: id })
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
        let data = await Axios.delete(`${process.env.REACT_APP_API_URL}/restaurant/${id}`, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        alert(data.data.msg)
        this.setState({ modalDelete: !this.state.modalDelete })
        this.getRestaurant()
    }

    async handleUpdateRestaurant(id) {
        console.log(this.state.idItems)
        var formData = new FormData()
        formData.append('restaurant', this.state.restaurant)
        formData.append('description', this.state.description)
        formData.append('id_admin', this.state.id_admin)
        formData.append('images', this.state.images)
        let data = Axios.patch(`${process.env.REACT_APP_API_URL}/restaurant/${id}`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res)
                console.log(res.data)
                alert(res.data.msg)
                this.getRestaurant()
                this.setState({ modalUpdate: !this.state.modalUpdate })
            })
            .catch(error => {
                console.log(error.response)
            })
        console.log(data)

    }

    handleSubmitAddRestaurant(event) {
        event.preventDefault()
        var formData = new FormData()
        formData.append('restaurant', this.state.restaurant)
        formData.append('description', this.state.description)
        formData.append('id_admin', this.state.id_admin)
        formData.append('images', this.state.images)
        Axios.post(`${process.env.REACT_APP_API_URL}/restaurant`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data)
                console.log('woi' + formData)
                if (res.data.success === false) {

                    alert(res.data.message)
                } else {
                    alert(res.data.msg)
                    this.setState({ modalAdd: !this.state.modalAdd })
                    this.getRestaurant()
                }
            })
            .catch(error => {
                console.log('popop')
                console.log(error.response)
            })
    }

    getRestaurant() {
        Axios.get(`${process.env.REACT_APP_API_URL}/restaurant`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
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
                            <Link onClick={this.toogleAdd}>Add Restaurant++</Link>
                        </div>

                        <Modal size="md" className="" isOpen={this.state.modalAdd} toggle={this.toogleAdd} >
                            <div className="mr-5 ml-5">
                                <ModalHeader toggle={this.toogleAdd} >Create Restaurant</ModalHeader>
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
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleAdd()} >Close</button>
                                        <button type="button" class="btn btn-primary" onClick={(event) => this.handleSubmitAddRestaurant(event)} >Add Restaurant</button>
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
                                        <img src={`${process.env.REACT_APP_API_URL}${v.image_restaurant}`} style={{ height: "160px", width: "260px" }} className="rounded border border-white"></img>
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
                                        <Link onClick={() => this.toogleUpdate(v.id)}>  <FaEdit style={{ height: "30px", width: "30px", marginTop: "45px" }}></FaEdit></Link>

                                        <Modal size="md" className="" isOpen={this.state.modalUpdate} toggle={this.toogleUpdate} >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={this.toogleUpdate} >Update Restaurant</ModalHeader>
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
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleUpdate()}>Close</button>
                                                        <button type="button" class="btn btn-primary" onClick={() => this.handleUpdateRestaurant(this.state.idItems)} >Update Restaurant</button>
                                                    </div>


                                                </ModalBody>
                                            </div>
                                        </Modal>

                                    </div>


                                    <div className="col-md-1">
                                        <Link onClick={() => this.toogleDelete()}>
                                            <FaTrash className="fas" style={{ height: "30px", width: "30px", color: "red", marginTop: "45px" }} ></FaTrash></Link>
                                        <Modal size="md" className="" isOpen={this.state.modalDelete} toggle={() => this.toogleDelete()} >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={() => this.toogleDelete()} >Delete Restaurant</ModalHeader>
                                                <ModalBody>
                                                    <h3>Yakin Delete Restaurant?</h3>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleDelete()}>Batal</button>

                                                        <button type="button" class="btn btn-primary" onClick={() => this.handleDeleteRestaurant(v.id)} >Delete Restaurant</button>
                                                    </div>
                                                </ModalBody>
                                            </div>
                                        </Modal>

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
