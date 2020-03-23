import React, { Component } from 'react'
import AboutCostume from '../Component/about'
import DataRestaurant from '../Looping/restaurant'
import CostumeNavBar from '../Component/navbar'
import { Container } from 'reactstrap'

import Axios from 'axios'
import jwt from 'jsonwebtoken'



class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data_restaurant: []
        }
    }

    componentDidMount() {
        this.getDataRestaurant()
    }

    getDataRestaurant() {
        Axios.get(`${process.env.REACT_APP_API_URL}/browse_restaurant`)
            .then(res => {
                let DataResto = res.data.result
                this.setState({ data_restaurant: DataResto })
            })
    }

    render() {
        return (
            <div>
                <section className="about">
                    <div className="container text-center">
                        < div className="row ">
                            <div className="col-sm-12">
                                <h2 className="">Restaurant
                                        <hr ></hr>
                                </h2>
                            </div>
                        </div>
                        <Container>
                            <div className="row">
                                {this.state.data_restaurant.map((val, index) => (
                                    <DataRestaurant
                                        id={val.id}
                                        restaurant={val.restaurant}
                                        image_restaurant={val.image_restaurant}
                                        description={val.description}
                                        created_at={val.created_at}
                                    />
                                ))}
                            </div>
                        </Container>
                        <section className="">
                            <div className="container text-center">
                            </div>
                        </section>
                    </div>
                </section>
            </div >
        )
    }
}


export default Category