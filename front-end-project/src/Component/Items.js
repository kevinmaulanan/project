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
import Pizza from '../Asset/pizza.png'


class ItemsCostume extends Component {
    render() {
        return (

            //     constructor(props) {
            //     super(props)
            //     this.state = {
            //         data_project: []
            //     }
            // }

            // componentDidMount() {
            //     this.getDataProject()
            // }


            // getDataProject() {
            //     axios.get("http://localhost:3333/browse_items")
            //         .then(res => {
            //             console.log(res)
            //             let dataArr = res.data.result
            //             console.log(dataArr)
            //             this.setState({ data_project: dataArr })
            //         })
            //         .catch(error => console.log(error))
            // }

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
                                                <img src={Pizza} class="card-img-top" alt=""></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">Kevman</h5>
                                                    <p class="card-text">Ini adalah restaurant sunda terbaik di dunia</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card mb-3">
                                                <img src={Pizza} className="card-img-top" alt=""></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Davman</h5>
                                                    <p className="card-text">Ini adalah restaurant sunda terbaik di dunia</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div class="card mb-3">
                                                <img src={Pizza} class="card-img-top" alt=""></img>
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

                    </section>
                </div >
            </div >

        )
    }
}

export default ItemsCostume
