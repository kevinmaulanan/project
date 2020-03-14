import React, { Component } from 'react'
import Logo from '../Asset/logo.png'
import NavbarCostume from '../Component/navbar'
import JumbrotronCostume from '../Component/jumbotron'
import AboutCostume from '../Component/about'
import DataRestaurant from '../Component/restaurant'
import '../Asset/logo.png'
import fotoRestaurant from '../Asset/restaurant.png'
import { Col } from 'reactstrap'
import Axios from 'axios'



class Restaurant extends Component {

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
        if (JSON.parse(localStorage.getItem('token'))) {
            Axios.get("http://localhost:3333/restaurant")
                .then(res => {
                    if (res.data.success === false) {
                        console.log('woidsa')
                        alert(res.data.message)
                        Axios.get("http://localhost:3333/browse_restaurant")
                            .then(res => {
                                console.log('woi')
                                let DataResto = res.data.result
                                this.setState({ data_restaurant: DataResto })

                            })
                    }
                    else {
                        console.log(res)
                        let dataArr = res.data.result
                        this.setState({ data_restaurant: dataArr })
                    }
                })
        } else {
            Axios.get("http://localhost:3333/browse_restaurant")
                .then(res => {
                    console.log('woi')
                    console.log(res.data.result[0].id)
                    let DataResto = res.data.result
                    this.setState({ data_restaurant: DataResto })

                })
        }
    }

    render() {
        return (
            <div>
                <NavbarCostume />
                <JumbrotronCostume />

                <div>
                    <AboutCostume />

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
                                <div className="row">
                                    {this.state.data_restaurant.map((val, index) => (
                                        <DataRestaurant
                                            id={val.id}
                                            restaurant={val.restaurant}
                                            description={val.description}
                                            created_at={val.created_at}
                                        />
                                    ))}
                                </div>
                                <section className="">
                                    <div className="container text-center">
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div >

                </div >

            </div >
        )
    }
}


export default Restaurant