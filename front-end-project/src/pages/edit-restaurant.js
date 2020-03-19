import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import Axios from 'axios'

import { FaEdit, FaTrash } from 'react-icons/fa'
export default class EditRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Restaurant: [

            ]
        }
    }



    componentDidMount() {
        this.getRestaurant()

    }

    getRestaurant() {
        Axios.get(`http://localhost:3333/restaurant`, { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
            .then(res => {
                console.log(res.data.data)
                this.setState({ Restaurant: res.data.data })
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

                            {this.state.Restaurant.map((v) => (

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
