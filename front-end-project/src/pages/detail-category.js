import React, { Component } from 'react'
import { Col, CardImg, CardTitle, CardSubtitle, Container } from 'reactstrap'

import Axios from 'axios'
import ItemsCostume from '../Looping/items'
import { Link } from 'react-router-dom'

export default class DetailCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: null,
            all_items: [

            ],
        }

    }

    componentDidMount() {
        this.getItemsById(this.props.match.params.id)
        this.getDataItems()

    }


    componentDidUpdate(items) {
        if (items.id !== this.props.match.params.id) {
            this.getItemsById(this.props.match.params.id)
        }
    }


    getItemsById(id) {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_items/category/${id}`)
            .then(res => {
                let dataItems = res.data.data
                this.setState({ items: dataItems })
            })
    }


    getDataItems() {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_items?sort[name]=1`)
            .then(res => {
                let dataAllItems = res.data.result
                console.log(dataAllItems)
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
                                <h2 className="">Search Category : {this.state.items[0].category_detail}
                                    <hr ></hr>
                                </h2>
                            </div>
                        </div>




                        <div className="container">
                            <div className="row ml-4 mr-5">
                                {this.state.items.map((v, i) => (
                                    <Col sm={3} className="mb-3">
                                        <Link to={`/items/${v.id}`}>
                                            <div className="card">
                                                <CardImg src={`${process.env.REACT_APP_API_URL}${v.image_items}`} style={{ height: "150px", width: "222px", overflow: "hidden" }} alt='Items' />
                                                <CardTitle className=" ml-2 mt-2"> <small className=" text-success">Restaurant {v.restaurant}</small></CardTitle>
                                                <div className="ml-2">
                                                    <CardTitle> <h5 className="text-dark">{v.name}</h5></CardTitle>
                                                    <CardSubtitle className="mt-1 mb-1 text-danger">Rp.{v.price},-</CardSubtitle>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col >
                                ))}
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
                )}

            </>

        )
    }
}
