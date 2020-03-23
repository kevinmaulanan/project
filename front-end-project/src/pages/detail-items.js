import React, { Component } from 'react'
import { Col, Modal, ModalBody, ModalHeader, Button, Collapse, Card, CardBody } from 'reactstrap'

import Axios from 'axios'
import ItemsCostume from '../Looping/items'
import { FaShoppingCart } from 'react-icons/fa'

export default class DetailItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            all_items: [

            ],
            all_reviews: [],
            modalAddCart: false,
            modalComment: false,
            QuantityCart: null,
            totalReview: 0,
            cartAdd: [

            ],
            comment: '',

            id_params: this.props.match.params.id
        }
        this.toogleAddCart = this.toogleAddCart.bind(this)


    }

    toogleAddCart() {
        this.setState({ modalAddCart: !this.state.modalAddCart })
    }

    toogleComment() {
        this.setState({ modalComment: !this.state.modalComment })
    }

    async componentDidMount() {
        this.getItemsById(this.props.match.params.id)
        this.getDataItems()
        this.getReviews()
    }


    componentDidUpdate() {
        if (this.state.items.id != this.props.match.params.id) {
            this.getItemsById(this.props.match.params.id)
        }

    }

    handleAddCart = (event) => {
        this.setState({ QuantityCart: event.target.value })
    }

    handleReviews(event) {
        this.setState({ comment: event.target.value })
    }

    async handleSubmitAddReviews() {
        const data = {
            comment: this.state.comment,
            id_items: this.props.match.params.id
        }
        console.log(data)
        try {
            let res = await Axios.post(`${process.env.REACT_APP_API_URL}/review`, data, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })

            if (res.data.success === false) {
                alert(res.data.message)
            } else {
                alert(res.data.message)
                this.getReviews()

            }
        } catch (error) {
            console.log(error.response)
            // this.props.history.push('/login')
        }
    }



    async handleSubmitAddCart() {
        const data = {
            quantity: this.state.QuantityCart
        }
        try {

            let res = await Axios.post(`${process.env.REACT_APP_API_URL}/carts/${this.state.id_params}`, data, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
            console.log('ayo')
            if (res.data.success === false) {
                console.log(res)
                alert(res.data.msg)
            } else {
                this.setState({ modalAddCart: !this.state.modalAddCart })
                console.log(res)
                console.log(res.data.message)
                alert(res.data.message)

            }
        } catch (error) {
            console.log(error.response)
            // alert(error.response.data.data.message)
            this.props.history.push('/login')
        }
    }

    getItemsById(id) {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_items/items/${id}`)
            .then(res => {
                let dataItems = res.data.data
                this.setState({ items: dataItems })
            })
    }


    getDataItems() {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_items?sort[name]=1`)
            .then(res => {
                let dataAllItems = res.data.result
                this.setState({ all_items: dataAllItems })
            })
    }

    getReviews() {
        Axios.get(`${process.env.REACT_APP_API_URL}/review/${this.props.match.params.id}`, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res)
                console.log(res.data.data.length)
                this.setState({ all_reviews: res.data.data, totalReview: res.data.data.length })
            })
            .catch(error => {
                console.log(error.response)
                this.props.history.push('/login')
            })
    }



    render() {

        return (

            <>
                {this.state.items && (
                    <div className="container">
                        < div className="row about text-center">
                            <div className="col-sm-12">
                                <h2 className=""> Items : {this.state.items.name}
                                    <hr ></hr>
                                </h2>
                            </div>
                        </div>





                        <div className="row ml-2 mr-2 mt-4">

                            <Col sm={7} className="mb-3">
                                <img src={`${process.env.REACT_APP_API_URL}${this.state.items.image_items}`} style={{ height: "350px", width: "580px", overflow: "hidden" }} alt='Items' />
                            </Col>
                            <Col sm={5}>
                                <div className="ml-2 mt-3">
                                    <h6 className=" text-success"> {this.state.items.restaurant}</h6>
                                    <h1 className="text-dark">{this.state.items.name}</h1>
                                    <h5 className="mt-1 mb-2 text-secondary">{this.state.items.category_detail}</h5>
                                    <h4 className="mt-1 mb-2 text-danger">Rp.{this.state.items.price},-</h4>
                                    <div className="btn btn-success btn-lg mr-1" style={{ width: "100px" }} onClick={this.toogleAddCart}>
                                        <FaShoppingCart style={{ height: "30px", width: "30px" }} >

                                        </FaShoppingCart>

                                        <Modal size="sm" className="mt-5 modal-dialog-centered" isOpen={this.state.modalAddCart} toggle={this.toogleAddCart} >
                                            <div className="mr-5 ml-5">
                                                <ModalHeader toggle={this.toogleAddCart} >Quantity</ModalHeader>
                                                <ModalBody>
                                                    <div className="text-center">
                                                        <input min="0" type="number" style={{ height: "29px", width: "50px" }} onChange={(event) => this.handleAddCart(event)}></input>

                                                        <button type="submit" className="ml-2" onClick={(event) => this.handleSubmitAddCart(event)}  >Add Cart</button>

                                                    </div>
                                                </ModalBody>
                                            </div>
                                        </Modal>

                                    </div>
                                </div>
                            </Col >
                        </div>

                        <div>


                            <div className="ml-4">

                                <Button color="primary" onClick={() => this.toogleComment()} style={{ marginBottom: '1rem' }}>
                                    Lihat Komentar
                                    <span class="badge badge-light ml-1"> {this.state.totalReview}</span></Button>

                                <Collapse isOpen={this.state.modalComment}>
                                    {this.state.all_reviews.map((v) =>
                                        <div class="row">
                                            <div class="col-6 mt-2 mb-2">
                                                <div className="ml-2">
                                                    <div class="card">
                                                        <div class="card card-white post border-0" style={{ paddingLeft: "15px", paddingTop: "15px" }}>
                                                            <div class="post-heading ">
                                                                <div class="float-left image">
                                                                    <img src={`${process.env.REACT_APP_API_URL}${v.image}`} class="rounded-circle" style={{ height: "90px", width: "90px" }} alt="image"></img>
                                                                </div>
                                                                <div class="float-left meta">
                                                                    <div class="title h5 ml-2">
                                                                        <a href><b>{v.nama}</b></a>
                                                                    </div>
                                                                    <h6 class="text-muted time"></h6>
                                                                </div>
                                                            </div>
                                                            <div style={{ marginTop: "20px" }}>
                                                                <p>{v.comment}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div class="row">
                                        <div class="col-5 mt-2 mb-2">
                                            <div className="ml-2">
                                                <textarea onChange={(event) => this.handleReviews(event)} class="form-control rounded-0" id="exampleFormControlTextarea2" placeholder="Masukkan Komentar" ></textarea>

                                            </div>
                                        </div>
                                        <div class="col-1 mt-2 mb-2">
                                            <button onClick={() => this.handleSubmitAddReviews()} type="submit" class="text-center">Kirim</button>
                                        </div>
                                    </div>

                                </Collapse>
                            </div>
                        </div>



                        < div className="row about text-center" style={{ marginTop: "110px" }}>
                            <div className="col-sm-12">
                                <h2 className="">Related Items
                                    <hr ></hr>
                                </h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="row ml-5 mr-5">
                                    {this.state.all_items.map((val, index) => (
                                        <ItemsCostume
                                            id={val.id}
                                            image_items={val.image_items}
                                            restaurant={val.restaurant}
                                            category={val.category}
                                            category_detail={val.category_detail}
                                            name={val.name}
                                            images_items={val.images_items}
                                            quantity={val.quantity}
                                            price={val.price}

                                        />
                                    ))}

                                </div>
                            </div>
                        </div>





                    </div>
                )
                }

            </>

        )
    }
}
