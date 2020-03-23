import React, { Component } from 'react'
import { Row, Col, Button, Alert, Container, CardImg, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'


export default class DetailRestaurant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: [

            ],
            items: [

            ]
        }
    }

    componentDidMount() {
        this.getDataRestaurant(this.props.match.params.id)
        this.getItemsById(this.props.match.params.id)
    }


    componentDidUpdate() {
        if (this.state.restaurant.id != this.props.match.params.id) {
            this.getDataRestaurant(this.props.match.params.id)
            this.getItemsById(this.props.match.params.id)
        }
    }


    getDataRestaurant(id) {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_restaurant/${id}`)
            .then(res => {
                let dataRestaurant = res.data.data

                this.setState({ restaurant: dataRestaurant })
            })
    }

    getItemsById(id) {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_items/restaurant/${id}`)
            .then(res => {
                console.log('disini')
                let dataItems = res.data.data
                console.log(res.data.data)
                this.setState({ items: dataItems })
            })
    }

    render() {
        return (

            <>
                {this.state.restaurant && (
                    <div>
                        <div>

                            <Row >
                                <Col >
                                    <div className="d-flex justify-content-center" >
                                        <CardImg src={`${process.env.REACT_APP_API_URL}${this.state.restaurant.image_restaurant}`} alt='Restaurant' style={{ height: "700px", width: "1400px" }} />

                                    </div>

                                    <div className="row d-flex justify-content-center">
                                        <div className=' btn btn-outline-light' style={{ width: "500px", height: "180px", marginTop: "-450px" }}>
                                            <p style={{ fontFamily: "Algerian", fontSize: "50px" }} className="text-center text-light pt-3 " >{this.state.restaurant.restaurant}</p>
                                        </div>
                                    </div>


                                </Col>

                            </Row>
                        </div>


                        < div className="row about text-center" style={{ marginTop: "80px" }}>
                            <div className="col-sm-12">
                                <h2 className="">About
                                        <hr ></hr>
                                </h2>
                                <h2> {this.state.restaurant.description} </h2>
                            </div>
                        </div>


                        < div className="row about text-center" style={{ marginTop: "80px" }} >
                            <div className="col-sm-12">
                                <h2 className="">Items
                                        <hr ></hr>
                                </h2>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row ">


                                {this.state.items.map((v, i) => (
                                    <Col sm={3} className="mb-5">
                                        <div className="card">
                                            <Link to={`/Items/${v.id}`}>
                                                <CardImg src={`${process.env.REACT_APP_API_URL}${v.image_items}`} style={{ height: "190px", overflow: "hidden" }} alt='Items' />

                                            </Link>
                                            <CardTitle className=" ml-2 mt-2"> <small className=" text-success"> {v.restaurant}</small></CardTitle>
                                            <div className="ml-2">
                                                <CardTitle> <h5 className="text-dark">{v.name}</h5></CardTitle>
                                                <CardSubtitle className="mt-1 mb-1 text-danger">Rp.{v.price},-</CardSubtitle>
                                            </div>
                                        </div>
                                    </Col >
                                ))}

                            </div>

                            <nav aria-label="Page navigation example">
                                <ul class="pagination" >
                                    <li class="page-item"  >
                                        <a class="page-link" href="#" aria-label="Previous" >
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>


                    </div>
                )
                }

            </>
        )
    }
}
