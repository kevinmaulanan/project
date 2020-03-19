import React, { Component } from 'react'
import {
    DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

class MenuRestaurant extends Component {
    render() {
        return (
            <div>
                <DropdownItem> <Link to={`/restaurant/${this.props.id}`}> {this.props.restaurant} </Link></DropdownItem>
                <DropdownItem divider />
            </div >
        )
    }
}




export default MenuRestaurant