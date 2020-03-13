import React from 'react'
import NavbarCostume from '../Component/navbar'
import JumbrotronCostume from '../Component/jumbotron'
import ItemsCostume from '../Component/items'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavbarCostume />
                <JumbrotronCostume />
                <ItemsCostume />
            </div>



        )
    }
}

export default Home