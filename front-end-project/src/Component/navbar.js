import React, { Component, useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Form,
    Button,
    Input
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from '../Asset/logo.png'
import FileNavBar from '../Asset/fileNavbar.css'
import Axios from 'axios'
import MenuRestaurant from '../Looping/menu_Resto'
import MenuCategory from '../Looping/menu_category'





class CostumeNavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            get_all_restaurant: [],
            get_category: [],

        }
    }

    componentDidMount() {
        this.getAllRestaurant()
        this.getCategory()
    }

    getAllRestaurant() {
        Axios.get("http://localhost:3333/browse_restaurant")
            .then(res => {
                if (res.data.success === false) {

                    alert(res.data.message)
                }
                else {

                    let getMenuRestaurant = res.data.result
                    this.setState({ get_all_restaurant: getMenuRestaurant })
                }
            })

    }


    getCategory() {
        Axios.get("http://localhost:3333/browse_category")
            .then(res => {
                if (res.data.success === false) {
                    console.log('woi')
                    alert(res.data.message)
                }
                else {
                    console.log(res.data.result)
                    let getCategory = res.data.result
                    this.setState({ get_category: getCategory })
                }
            })

    }


    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={Logo} width="100" height="50"></img> KEVMAN</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Restaurant
                                </DropdownToggle>
                                <DropdownMenu>


                                    {this.state.get_all_restaurant.map((val, index) => (
                                        <MenuRestaurant
                                            id={val.id}
                                            restaurant={val.restaurant}
                                            description={val.description}
                                            created_at={val.created_at}
                                        />
                                    ))}

                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="mr-5">
                                    Items
                                </DropdownToggle>
                                <DropdownMenu>


                                    {this.state.get_category.map((val, index) => (
                                        <MenuCategory
                                            id={val.id}
                                            category={val.category}
                                            category_detail={val.category_detail}
                                        />
                                    ))}

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Form className="form-inline my-2 my-lg-0">
                                <Input className="" type="search" placeholder="Search" aria-label="Search"></Input>
                                <Button className="btn btn-inline-success my-2 my-sm-0" type="submit">Search</Button>
                            </Form>

                        </Nav>

                        <Form className="form-inline my-2 my-lg-0 mr-5" >
                            <Link to="/login">  <Button className="btn-success btn-inline-danger my-2 my-sm-0" type="submit" >Login</Button></Link>
                        </Form>
                    </Collapse>
                </Navbar>
            </div>
        )
    }


}

export default CostumeNavBar;