import React, { Component } from 'react'
import {
    DropdownItem,

} from 'reactstrap'

import { Link } from 'react-router-dom'
class MenuCategory extends Component {
    render() {
        return (
            <div>
                <Link to='/items'  >  <DropdownItem>{this.props.category_detail}</DropdownItem></Link>
                <DropdownItem divider />
            </div>
        )
    }
}

export default MenuCategory