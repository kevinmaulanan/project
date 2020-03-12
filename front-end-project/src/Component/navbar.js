import React, { Component } from 'react'
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Container,
    Form,
    Input,
    Button,
    NavbarToggler,
    Collapse,

} from 'reactstrap'

import { Link } from 'react-router-dom'
import Logo from '../Asset/logo.png'
import FileNavBar from '../Asset/fileNavbar.css'

class NavbarCostume extends Component {

    render() {
        return (

            <div>
                <Navbar expand="md" className="NavBar fixed-top">
                    <NavbarBrand ><img src={Logo} width="50px" height="50px" ></img>KEVMAN FDC</NavbarBrand>
                    <Nav className="mr-auto mt-2 mt-lg-0" >
                        <NavItem className="nav-pills nav-fill" >
                            <a href=""> <NavLink className="active"> Home</NavLink></a>
                        </NavItem>


                        <NavItem  >
                            <NavLink> Items</NavLink>
                        </NavItem>
                    </Nav>
                    <Form className="form-inline">
                        <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></Input>
                        <Button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>

                    </Form>

                </Navbar>

            </div >

            // <div>
            //     <Navbar color="faded" light>
            //         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
            //         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            //         <Collapse isOpen={!collapsed} navbar>
            //             <Nav navbar>
            //                 <NavItem>
            //                     <NavLink href="/components/">Components</NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            //                 </NavItem>
            //             </Nav>
            //         </Collapse>
            //     </Navbar>
            // </div>
        )
    }
}

export default NavbarCostume