import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import { FaEdit, FaTrash } from 'react-icons/fa'
export default class EditItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Items: [

            ],
            modalAdd: false,

            restaurant: [

            ],
            category_detail: [

            ],
            images: null,
            name: '',
            quantity: null,
            price: null,
            id_category_detail: null,
            id_restaurant: null,
            idUpdate: null,
        }
        this.toogleAdd = this.toogleAdd.bind(this)
        this.toogleUpdate = this.toogleUpdate.bind(this)
        this.handleSubmitAddItems = this.handleSubmitAddItems.bind(this)


    }



    toogleAdd() {
        this.setState({ modalAdd: !this.state.modalAdd })
    }

    toogleUpdate(id) {
        this.setState({ modalUpdate: !this.state.modalUpdate, idUpdate: id })
        console.log(id)


    }

    componentDidMount() {
        this.getItems()
        this.getRestaurant()
        this.getCategoryDetail()
        this.handleUpdateItems(this.props.match.params.id)

    }

    handleName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleCategory(event) {
        this.setState({
            category: event.target.value
        })
    }

    handleQuantity(event) {
        this.setState({
            quantity: event.target.value
        })
    }


    handlePrice(event) {
        this.setState({
            price: event.target.value
        })
    }

    handleCategory(event) {
        this.setState({
            id_category_detail: event.target.value
        })
    }

    handleRestaurant(event) {
        this.setState({
            id_restaurant: event.target.value
        })
    }

    handleImageRestaurant(event) {
        this.setState({
            images: event.target.files[0]
        })
    }

    async handleSubmitDeleteItems(id) {
        const data = await Axios.delete(`http://localhost:3333/items`)
    }

    async handleSubmitAddItems(event) {
        event.preventDefault()
        var formData = new FormData()
        console.log(this.state.quantity)
        formData.append('name', this.state.name)
        formData.append('quantity', this.state.quantity)
        formData.append('price', this.state.price)
        formData.append('id_category_detail', this.state.id_category_detail)
        formData.append('id_restaurant', this.state.id_restaurant)
        formData.append('images', this.state.images)
        console.log(this.state)
        console.log(formData)
        const data = await Axios.post(`http://localhost:3333/items`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
        console.log(data)
        alert(data.data.message)
        this.setState({ modalAdd: !this.state.modalAdd })
        this.getItems()
    }

    async handleUpdateItems(id) {
        var formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('quantity', this.state.quantity)
        formData.append('price', this.state.price)
        formData.append('id_category_detail', this.state.id_category_detail)
        formData.append('id_restaurant', this.state.id_restaurant)
        formData.append('images', this.state.images)
        console.log(this.state)
        console.log(formData)
        console.log(id)
        const data = await Axios.patch(`http://localhost:3333/items/${id}`, formData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res)
                this.setState({ modalUpdate: !this.state.modalUpdate })
                alert(res.data.message)
                this.getItems()
            })
            .catch(error => {
                console.log(error.response)
            })
    }


    getRestaurant() {
        Axios.get(`http://localhost:3333/browse_restaurant`)
            .then(res => {
                this.setState({ restaurant: res.data.result })
            })
    }

    getCategoryDetail() {
        Axios.get(`http://localhost:3333/browse_category`)
            .then(res => {
                this.setState({ category_detail: res.data.result })
            })
    }




    getItems() {
        Axios.get(`http://localhost:3333/items`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
            .then(res => {
                if (res.data.success === false) {
                    alert(res.data.msg)
                    this.props.history.push('/home')
                } else {
                    console.log(res.data.result)
                    this.setState({ Items: res.data.result })
                }
            })
            .catch(error => {
                console.log(error.response)
                alert(error.response.data.message)
                this.props.history.push('/login')
            })
    }


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

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Pilih Restaurant</label>
                                        <div class="col-sm-9">
                                            <select class="custom-select form-control" onChange={(event) => { this.handleRestaurant(event) }}>
                                                <option selected>Pilih Restaurant</option>
                                                {this.state.restaurant.map((v) =>
                                                    <option value={v.id}>{v.restaurant}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <label for="exampleFormControlFile1" class=" col-sm-3 col-form-label" >Image Items</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(event) => { this.handleImageRestaurant(event) }}></input>
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
                                <div className="col-md-1" style={{ marginTop: "15px" }}>
                                    <h5> id </h5>
                                </div>
                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5>Image</h5>
                                </div>
                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Items </h5>
                                </div>
                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Category</h5>
                                </div>
                                <div className="col-md-1" style={{ marginTop: "15px" }}>
                                    <h5> Quantity</h5>
                                </div>
                                <div className="col-md-2" style={{ marginTop: "15px" }}>
                                    <h5> Restaurant </h5>
                                </div>

                                <div className="col-md-1" style={{ marginTop: "15px" }} >
                                    <h5>Edit</h5>
                                </div>
                                <div className="col-md-1" style={{ marginTop: "15px" }}>
                                    <h5>Delete</h5>
                                </div>
                            </div>

                            {this.state.Items.map((v) => (
                                <div className="row mb-5 text-center" style={{ background: "#F5F5DC", paddingTop: "15px", paddingBottom: "15px" }}>
                                    <div className="col-md-1">
                                        <h4 className="text-secondary" style={{ marginTop: "45px" }}>{v.id} </h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src={`http://localhost:3333${v.image_items}`} style={{ height: "130px", width: "130px" }} className="rounded-circle border border-white"></img>
                                    </div>
                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "45px" }}> {v.name} </h5>
                                    </div>


                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "45px" }}> {v.category_detail}</h5>
                                    </div>

                                    <div className="col-md-1">
                                        <h5 style={{ marginTop: "45px" }}> {v.quantity}</h5>
                                    </div>

                                    <div className="col-md-2">
                                        <h5 style={{ marginTop: "35px" }}> {v.restaurant} </h5>
                                    </div>



                                    <div className="col-md-1">
                                        <Link onClick={() => this.toogleUpdate(v.id)}><FaEdit style={{ height: "30px", width: "30px", marginTop: "45px" }}></FaEdit></Link>
                                        <Modal size="md" className="" isOpen={this.state.modalUpdate} toggle={this.toogleUpdate} >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={this.toogleUpdate} >Update Items</ModalHeader>
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
                                                                <option selected>Pilih Category</option>
                                                                {this.state.category_detail.map((v) =>
                                                                    <option value={v.id} > {v.category_detail}</option>
                                                                )}
                                                            </select>
                                                        </div>

                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Pilih Restaurant</label>
                                                        <div class="col-sm-9">
                                                            <select class="custom-select form-control" onChange={(event) => { this.handleRestaurant(event) }}>
                                                                <option selected>Pilih Restaurant</option>
                                                                {this.state.restaurant.map((v) =>
                                                                    <option value={v.id}>{v.restaurant}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <label for="exampleFormControlFile1" class=" col-sm-3 col-form-label" >Image Items</label>
                                                        <div class="col-sm-9">
                                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(event) => { this.handleImageRestaurant(event) }}></input>
                                                        </div>
                                                    </div>

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <Link > <button type="button" class="btn btn-primary" onClick={() => this.handleUpdateItems(this.state.idUpdate)} >Update Items</button></Link>
                                                    </div>
                                                </ModalBody>
                                            </div>
                                        </Modal>
                                    </div>


                                    <div className="col-md-1">
                                        <FaTrash className="fas" style={{ height: "30px", width: "30px", color: "red", marginTop: "45px" }}></FaTrash>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
