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
import Default_foto from '../Asset/Default_foto.png'
import { FaUserCircle } from 'react-icons/fa'



class CostumeNavBar extends Component {

    logout() {
        window.localStorage.removeItem('token')
        this.props.history.push('/')
    }

    constructor(props) {
        super(props)
        this.state = {
            get_all_restaurant: [],
            get_category: [],
            getFoto: [
                { Default_foto }
            ],

            isOpen: false


        }
    }

    toogle() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {

        this.getAllRestaurant()
        this.getCategory()
        this.toogle()
    }


    getAllRestaurant() {
        Axios.get("http://localhost:3333/browse_restaurant")
            .then(res => {
                if (res.data.success === false) {

                    alert(res.data.message)
                }
                else {
                    console.log('woi')
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
                    <NavbarToggler onClick={this.toogle} />
                    <Collapse isOpen={this.state.open} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/home" className="nav-link">Home</Link>
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
                                    <DropdownItem> <Link to="/restaurant"> All Restaurant </Link></DropdownItem>
                                    <DropdownItem divider />

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
                                    <DropdownItem> <Link to="/items"> All Items </Link></DropdownItem>
                                    <DropdownItem divider />

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Form className="form-inline my-2 my-lg-0">
                                <Input className="" type="search" placeholder="Search" aria-label="Search"></Input>
                                <Button className="btn btn-inline-success my-2 my-sm-0" type="submit">Search</Button>
                            </Form>
                        </Nav>



                        <Form className="form-inline my-2 my-lg-0 mr-5" >
                            {this.props.isLogin &&
                                <>
                                    <Link to='/profile'>
                                        <img src={Default_foto} style={{ height: "55px", width: "55px" }} className="mr-3 rounded-circle"></img>
                                    </Link>

                                    <NavLink className="btn btn-outline-success my-2 my-sm-0" onClick={this.logout} href='/login'>Logout</NavLink>
                                </>
                            }

                            {!this.props.isLogin &&
                                <>
                                    <Link to='/login'>
                                        <FaUserCircle style={{ height: "55px", width: "55px" }} className="mr-2"></FaUserCircle>
                                    </Link>
                                    <Link to='/login' className=' btn btn-outline-success my-2 my-sm-0'>Login</Link>

                                </>
                            }
                        </Form>
                    </Collapse>
                </Navbar>
            </div>
        )
    }


}

export default CostumeNavBar;