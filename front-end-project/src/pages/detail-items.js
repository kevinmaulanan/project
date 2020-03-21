import React, { Component } from 'react'
import { Col, Modal, ModalBody, ModalHeader } from 'reactstrap'

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
            modalAddCart: false,
            QuantityCart: null,
            cartAdd: [

            ],

            id_params: this.props.match.params.id
        }
        this.toogleAddCart = this.toogleAddCart.bind(this)


    }

    toogleAddCart() {
        this.setState({ modalAddCart: !this.state.modalAddCart })
    }

    async componentDidMount() {
        this.getItemsById(this.props.match.params.id)
        this.getDataItems()
    }


    componentDidUpdate() {
        if (this.state.items.id != this.props.match.params.id) {
            this.getItemsById(this.props.match.params.id)
        }

    }

    handleAddCart = (event) => {
        this.setState({ QuantityCart: event.target.value })
    }


    async handleSubmitAddCart() {
        const data = {
            quantity: this.state.QuantityCart
        }
        try {

            let res = await Axios.post(`http://localhost:3333/carts/${this.state.id_params}`, data, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })

            if (res.data.success === false) {
                alert(res.data.message)
            } else {
                console.log(res.data)
                this.setState({ modalAddCart: !this.state.modalAddCart })
                alert(res.data.success)
            }
        } catch (error) {
            console.log(error)
        }
    }

    getItemsById(id) {
        Axios.get(`http://localhost:3333/browse_items/items/${id}`)
            .then(res => {
                let dataItems = res.data.data
                this.setState({ items: dataItems })
            })
    }


    getDataItems() {
        Axios.get("http://localhost:3333/browse_items?sort[name]=1")
            .then(res => {
                let dataAllItems = res.data.result
                this.setState({ all_items: dataAllItems })
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
                                <img src={`http://localhost:3333${this.state.items.image_items}`} style={{ height: "350px", width: "580px", overflow: "hidden" }} alt='Items' />
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
                )}

            </>

        )
    }
}
