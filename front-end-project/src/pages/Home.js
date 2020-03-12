import React from 'react'
import { Input, Navbar, FormGroup, Container, Nav, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import NavbarCostume from '../Component/navbar'
import JumbrotronCostume from '../Component/jumbotron'
import ItemsCostume from '../Component/Items'
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