import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import Axios from 'axios'

import { FaEdit, FaTrash } from 'react-icons/fa'


export default class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            get_all_users: [

            ],
            id: this,
            modalAdd: false
        }
    }


    toogleAdd() {
        this.setState({ modalAdd: !this.state.modalAdd })
    }

    componentDidMount() {
        this.getAllUser()
    }

    getAllUser() {
        Axios.get(`http://localhost:3333/user`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.msg)
                    this.props.history.push('/home')
                } else {
                    this.setState({ get_all_users: res.data.data })
                }
            })
            .catch(error => {
                console.log(error)
                alert(error)
                this.props.history.push('/login')
            })
    }


    async handleDeleteUser(id) {
        console.log(id)
        let data = await Axios.delete(`http://localhost:3333/user/${id}`, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        console.log(data)
        alert(data.data.message)
        this.getAllUser()
    }

    async handleUpdateUser(id) {
        console.log(id)
        var formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('age', this.state.age)
        formData.append('tall', this.state.tall)
        formData.append('weight', this.state.weight)
        formData.append('images', this.state.images)
        console.log(this.state)
        const data = await Axios.post(`http://localhost:3333/profile`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        console.log(data)
    }

    // handleSubmitAddUser(event) {
    //     event.preventDefault()
    //     var formData = new FormData()
    //     formData.append('name', this.state.name)
    //     formData.append('quantity', this.state.quantity)
    //     formData.append('price', this.state.price)
    //     formData.append('id_category_detail', this.state.id_category_detail)
    //     formData.append('id_restaurant', this.state.id_restaurant)
    //     formData.append('images', this.state.images)
    //     console.log(this.state)
    //     Axios.post(`http://localhost:3333/items`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
    //         .then(res => {
    //             console.log(res)
    //             console.log(formData)
    //             if (res.data.success === false) {
    //                 alert(res.data.message)
    //             } else {
    //                 alert(res.data.message)
    //                 this.setState({ modal: !this.state.modal })
    //             }

    //         })
    //         .catch(error => {
    //             console.log(error.response)
    //         })
    // }

    // submitDeleteUser(id) {
    //     Axios.delete(`http://localhost:3333/user/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             alert(res.data.message)
    //         })
    //         .catch(error => {
    //             console.log(error.response)
    //         })
    // }


    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link onClick={this.toogleAdd}>Add Items++</Link>
                        </div>

                        <Modal size="md" className="" isOpen={this.state.modalAdd} toggle={this.toogleAdd} >
                            <div className="mr-5 ml-5">
                                <ModalHeader toggle={this.toogleAdd} >Create Items</ModalHeader>
                                <ModalBody>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Items</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Items"
                                                onChange={(event) => { this.handleName(event) }}
                                            ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Quantity</label>
                                        <div className="col-sm-9">
                                            <input min="0" type="number" class="form-control"
                                                onChange={(event) => { this.handleQuantity(event) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Price</label>
                                        <div className="col-sm-9">
                                            <input min="0" type="number" class="form-control"
                                                onChange={(event) => { this.handlePrice(event) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Pilih Category</label>
                                        <div class="col-sm-9">
                                            <select class="custom-select form-control" onChange={(event) => { this.handleCategory(event) }}>
                                                <option selected
                                                >Pilih Category
                                                 </option>
                                                {this.state.category_detail.map((v) =>
                                                    <option value={v.id} > {v.category_detail}</option>
                                                )}
                                            </select>
                                        </div>

                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={this.handleSubmitAddItems} >Add Items</button>
                                    </div>

                                </ModalBody>
                            </div>
                        </Modal>

                    </div>
                    <div className="row">
                        <div className="col-md ">
                            <div className="row mb-4 text-center" style={{ backgroundColor: "#DCDCDC", height: "60px", }}>

                                <div className="col-md-1 " style={{ marginTop: "15px" }}>
                                    <h5> id </h5>
                                </div>


                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5>Image</h5>
                                </div>

                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Username </h5>
                                </div>


                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Name</h5>
                                </div>

                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Class User</h5>
                                </div>



                                <div className="col-md-1" style={{ marginTop: "15px" }} >
                                    <h5>Edit</h5>
                                </div>


                                <div className="col-md-1" style={{ marginTop: "15px" }}>
                                    <h5>Delete</h5>
                                </div>
                            </div>

                            {this.state.get_all_users.map((v) => (

                                <div className="row mb-5 text-center" style={{ background: "#F5F5DC", paddingTop: "15px", paddingBottom: "15px" }}>
                                    <div className="col-md-1">
                                        <h4 className="text-secondary" style={{ marginTop: "45px" }}>{v.id} </h4>
                                    </div>


                                    <div className="col-md-2">
                                        <img src={`http://localhost:3333${v.image}`} style={{ height: "120px", width: "120px" }} className="rounded-circle border border-white"></img>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "50px" }}> {v.username} </h5>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "50px" }}> {v.nama} </h5>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "50px" }}> {v.class_user} </h5>
                                    </div>




                                    <div className="col-md-1">
                                        <Link onclick={() => this.handleUpdateUser(v.id)}>
                                            <FaEdit style={{ height: "25px", width: "25px", marginTop: "45px" }}></FaEdit>
                                        </Link>
                                    </div>


                                    <div className="col-md-1">
                                        <Link onClick={() => this.handleDeleteUser(v.id)}>  <FaTrash className="fas" style={{ height: "25px", width: "25px", color: "red", marginTop: "45px" }}></FaTrash>
                                        </Link>
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
