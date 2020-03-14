import React, { Component } from 'react'

import Pizza from '../Asset/pizza.png'
import Kentang from '../Asset/kentang.jpg'


class ItemsCostume extends Component {
    render() {
        return (

            <div>
                <div>
                    <section className="about">
                        <div className="container text-center">
                            < div className="row ">
                                <div className="col-sm-12">
                                    <h2 className="">Items
                                        <hr ></hr>
                                    </h2>
                                </div>
                            </div>

                            <section className="">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col-sm-3 offset-1">
                                            <div class="card mb-3">
                                                <img src={Pizza} class="card-img-top img" alt="" ></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Kevman</h5>
                                                    <p class="card-text">Ini adalah Makanan sunda terbaik di dunia</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 ml-5 mr-5">
                                            <div className="card mb-3">
                                                <img src={Kentang} className="card-img-top img" alt=""></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Davman</h5>
                                                    <p className="card-text">Ini adalah Makanan Barat terbaik di dunia</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div class="card mb-3">
                                                <img src={Pizza} class="card-img-top img" alt=""></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Levman</h5>
                                                    <p class="card-text">Ini adalah Makanan Timur terbaik di dunia</p>
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

                    </section>
                </div >
            </div >

        )
    }
}

export default ItemsCostume
