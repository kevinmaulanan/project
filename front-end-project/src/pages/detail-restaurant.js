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
        Axios.get(`http://localhost:3333/browse_restaurant/${id}`)
            .then(res => {
                let dataRestaurant = res.data.data

                this.setState({ restaurant: dataRestaurant })
            })
    }

    getItemsById(id) {
        Axios.get(`http://localhost:3333/browse_items/restaurant/${id}`)
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
                        <Container>
                            <div className="container">
                                <Row >
                                    <Col >
                                        <div className="d-flex justify-content-center" >
                                            <CardImg src={`http://localhost:3333${this.state.restaurant.image_restaurant}`} alt='Restaurant' style={{ height: "400px", width: "800px" }} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>


                            < div className="row about text-center">
                                <div className="col-sm-12">
                                    <h2 className="">Items
                                        <hr ></hr>
                                    </h2>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row ml-4 mr-5">


                                    {this.state.items.map((v, i) => (
                                        <Col sm={3} className="mb-3">
                                            <div className="card">
                                                <Link to={`/Items/${v.id}`}>
                                                    <CardImg src={`http://localhost:3333${v.image_items}`} style={{ height: "150px", width: "222px", overflow: "hidden" }} alt='Items' />

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
                            </div>




                        </Container>
                    </div>
                )
                }
            </>
        )
    }
}
