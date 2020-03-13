import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Container
} from 'reactstrap'
import fotoRestaurant from '../Asset/restaurant.png'

class DataRestaurant extends Component {
    render() {
        return (
            <div>
                <div>
                    <section className="about">
                        <div className="container text-center">
                            < div className="row ">
                                <div className="col-sm-12">
                                    <h2 className="">About
                                        <hr ></hr>
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5 offset-sm-1">
                                    <p>lorem  AASJDNAJSKDNJAKNDJ JASK DJKA DJKAS KASJD KAJ  SAK AKJ ASJK D ASKDSA KJDS DJK  </p>
                                </div>
                                <div className="col-sm-5">
                                    <p>lorem  AASJDNAJSKDNJAKNDJ JASK DJKA DJKAS KASJD KAJ  SAK AKJ ASJK D ASKDSA KJDS DJK  </p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>


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

                            <section className="">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div class="card mb-3">
                                                <img src={fotoRestaurant} class="card-img-top" alt=""></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Kevman</h5>
                                                    <p class="card-text">Ini adalah restaurant sunda terbaik di dunia</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div class="card mb-3">
                                                <img src={fotoRestaurant} class="card-img-top" alt=""></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Davman</h5>
                                                    <p class="card-text">Ini adalah restaurant sunda terbaik di dunia</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div class="card mb-3">
                                                <img src={fotoRestaurant} class="card-img-top" alt=""></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Levman</h5>
                                                    <p class="card-text">Ini adalah restaurant sunda terbaik di dunia</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>

                    <section>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-12"> WOI</div>
                            </div>
                        </div>
                    </section>



                    <section>

                    </section>
                </div >
            </div >

        )
    }
}


export default DataRestaurant