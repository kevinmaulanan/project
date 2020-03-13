import React, { Component } from 'react'
import Logo from '../Asset/logo.png'
import NavbarCostume from '../Component/navbar'
import JumbrotronCostume from '../Component/jumbotron'
import DataRestaurant from '../Component/restaurant'
import '../Asset/logo.png'
import fotoRestaurant from '../Asset/restaurant.png'
import { Col } from 'reactstrap'


class Restaurant extends Component {
    render() {
        return (
            <div>
                <NavbarCostume />
                <JumbrotronCostume />

                <DataRestaurant />

            </div>
        )
    }
}


export default Restaurant