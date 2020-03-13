import React, { Component } from 'react'
import CostumeNavBar from '../Component/navbar'
import JumbrotronCostume from '../Component/jumbotron'
import ItemsCostume from '../Component/items'
import axios from 'axios'

class Items extends Component {
    render() {
        return (
            <div>
                <CostumeNavBar />
                <JumbrotronCostume />
                <ItemsCostume />
            </div>
        )
    }
}


export default Items