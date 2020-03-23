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
            name: null,
            username: null,
            password: null,
            email: null,
            userClass: null,
            modalAdd: false,
            modalDelete: false,
            modalUpdate: false,
            idUpdate: null
        }
    }



    componentDidMount() {
        this.getAllUser()
    }

    toogleAdd() {
        this.setState({ modalAdd: !this.state.modalAdd })
    }

    toogleDelete() {
        this.setState({ modalDelete: !this.state.modalDelete })
    }

    toogleUpdate(id) {
        this.setState({ modalUpdate: !this.state.modalUpdate, idUpdate: id })

    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handleUsername(event) {
        this.setState({ username: event.target.value })
    }

    handlePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleEmail(event) {
        this.setState({ Email: event.target.value })
    }

    hadleUserClass(event) {
        this.setState({ userClass: event.target.value })
        console.log(event.target.value)
    }

    async handleAddUser() {
        const data = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        console.log(data)
        const AddUser = await Axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.message)
                } else {
                    console.log(res.data)
                    alert(res.data.msg)
                    this.getAllUser()
                    this.setState({ modalAdd: !this.state.modalAdd })
                }
            })
            .catch(error => {
                console.log(error.response)
            })
        console.log(AddUser)
    }


    getAllUser() {
        Axios.get(`${process.env.REACT_APP_API_URL}/user`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
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
        let data = await Axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        console.log(data)
        alert(data.data.message)
        this.getAllUser()
        this.setState({ modalDelete: !this.state.modalDelete })
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
        const data = await Axios.post(`${process.env.REACT_APP_API_URL}/profile`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        console.log(data)
    }

    async handleUpdateUser() {
        const classUser = {
            classUser: parseInt(this.state.userClass)
        }
        console.log(classUser)

        const data = await Axios.patch(`${process.env.REACT_APP_API_URL}/user/${this.state.idUpdate}`, classUser, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data)
                this.setState({ modalUpdate: !this.state.modalUpdate })
                alert(res.data.message)
                this.getAllUser()
            })
            .catch(error => {
                console.log(error.response)
            })
        console.log(data)
    }

    // handleSubmitAddUser(event) {
    //     event.preventDefault()
    //     var formData = new FormData()
    //    
    //     console.log(this.state)
    //     Axios.post(`${process.env.REACT_APP_API_URL}/items`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
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




    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link onClick={() => this.toogleAdd()}>Add User++</Link>
                        </div>

                        <Modal size="md" className="" isOpen={this.state.modalAdd} toggle={() => this.toogleAdd()} >
                            <div className="mr-5 ml-5">
                                <ModalHeader toggle={() => this.toogleAdd()} >Create User</ModalHeader>
                                <ModalBody>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Name....."
                                                onChange={(event) => { this.handleName(event) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Username</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Username....."
                                                onChange={(event) => { this.handleUsername(event) }}
                                            ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" class="form-control" placeholder="Password....."
                                                onChange={(event) => { this.handlePassword(event) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Email....."
                                                onChange={(event) => { this.handleEmail(event) }}
                                            ></input>
                                        </div>
                                    </div>


                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleAdd()}>Close</button>
                                        <button type="button" class="btn btn-primary" onClick={() => this.handleAddUser()} >Add User</button>
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
                                        <img src={`${process.env.REACT_APP_API_URL}${v.image}`} style={{ height: "120px", width: "120px" }} className="rounded-circle border border-white"></img>
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
                                        <Link onClick={() => this.toogleUpdate(v.id)}>
                                            <FaEdit style={{ height: "25px", width: "25px", marginTop: "45px" }}></FaEdit>
                                        </Link>
                                        <Modal size="md" className="" isOpen={this.state.modalUpdate} toggle={() => this.toogleUpdate()} >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={() => this.toogleUpdate()} >Update User</ModalHeader>
                                                <ModalBody>
                                                    <div class="form-group row">
                                                        <label class="col-sm-4 col-form-label">Pilih Class User</label>
                                                        <div class="col-sm-8">
                                                            <select class="custom-select form-control" onChange={(event) => { this.hadleUserClass(event) }}>
                                                                <option selected >Pilih Class User</option>
                                                                <option value="1">SuperAdmin</option>
                                                                <option value="2">Admin</option>
                                                                <option value="3">Costumer</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleUpdate()}>Close</button>
                                                        <button type="button" class="btn btn-primary" onClick={() => this.handleUpdateUser(v.id)} >Update User</button>
                                                    </div>

                                                </ModalBody>
                                            </div>
                                        </Modal>

                                    </div>


                                    <div className="col-md-1">
                                        <Link onClick={() => this.toogleDelete()}>  <FaTrash className="fas" style={{ height: "25px", width: "25px", color: "red", marginTop: "45px" }}></FaTrash>
                                        </Link>

                                        <Modal size="md" className="" isOpen={this.state.modalDelete} toggle={() => this.toogleDelete()}  >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={() => this.toogleDelete()} >Delete Username</ModalHeader>
                                                <ModalBody>
                                                    <h3>Yakin Delete User <b>{v.username}?</b></h3>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.toogleDelete()}>Batal</button>

                                                        <button type="button" class="btn btn-primary" onClick={() => this.handleDeleteUser(v.id)} >Delete Username</button>
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
