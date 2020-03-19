import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import Axios from 'axios'

import { FaEdit, FaTrash } from 'react-icons/fa'
export default class EditItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Items: [

            ]
        }
    }



    componentDidMount() {
        this.getItems()

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

                alert(error.response.data.message)
                this.props.history.push('/login')
            })
    }


    render() {
        return (
            <div>

                <div className="container">
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
                                        <FaEdit style={{ height: "30px", width: "30px", marginTop: "45px" }}></FaEdit>
                                    </div>


                                    <div className="col-md-1">
                                        <FaTrash className="fas" style={{ height: "30px", width: "30px", color: "red", marginTop: "45px" }}></FaTrash>
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
