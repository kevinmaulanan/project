import React, { Component } from 'react'
import DataRestaurant from '../Looping/restaurant'
import { Container } from 'reactstrap'

import Axios from 'axios'
import { connect } from 'react-redux'
import { getDataRestaurant } from '../redux/actions/restaurant'



class Restaurant extends Component {

    componentDidMount() {

        this.props.getDataRestaurant()
    }



    render() {
        return (
            <div>
                {console.log(this.props.dataRestaurant)}
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
                                {this.props.dataRestaurant.map((val, index) => (
                                    <DataRestaurant
                                        id={val.id}
                                        restaurant={val.restaurant}
                                        image_restaurant={val.image_restaurant}
                                        description={val.description}
                                        created_at={val.created_at}
                                    />
                                ))} */}
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

const mapStateToProps = state => ({
    dataRestaurant: state.restaurant.dataRestaurant
})



const mapDispatchToProps = { getDataRestaurant }

// console.log(mapStateToProps(state))
console.log(mapDispatchToProps)


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)