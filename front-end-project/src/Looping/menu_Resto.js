import React, { Component } from 'react'
import {
    DropdownItem
} from 'reactstrap'

class MenuRestaurant extends Component {
    render() {
        return (
            <div>
                <DropdownItem>{this.props.restaurant}</DropdownItem>
                <DropdownItem divider />
            </div>
        )
    }
}




export default MenuRestaurant