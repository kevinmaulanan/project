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
    Form,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,

} from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from '../Asset/logo.png'
import Axios from 'axios'
import MenuRestaurant from '../Looping/menu_Resto'
import MenuCategory from '../Looping/menu_category'
import Default_foto from '../Asset/Default_foto.png'
import { FaUserCircle, FaShoppingCart, FaEdit, FaTrash, FaCartArrowDown } from 'react-icons/fa'


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
            get_carts: [],
            get_total_carts: 0,
            isOpen: true,
            modal: true,
            idCart: this,
        }
        this.toogle = this.toogle.bind(this)
        this.toogleCart = this.toogleCart.bind(this)
    }


    componentDidMount() {
        this.getAllRestaurant()
        this.getCategory()
        this.getCart()
        this.toogle()
        this.toogleCart()

    }

    componentDidUpdate() {
        if (window.localStorage.getItem("token")) {
            this.getCart()
        }
    }

    toogle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    toogleCart() {
        console.log(this.state.modal)
        this.setState({ modal: !this.state.modal })
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
            }
            )
    }

    getCart() {
        Axios.get("http://localhost:3333/carts", { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {

                this.setState({
                    get_carts: res.data.data,
                    get_total_carts: res.data.total
                })
            })
    }

    deleteCart(id) {
        console.log(id)
        console.log(this)
        Axios.delete("http://localhost:3333/carts", { data: { idCart: id }, headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data)
                alert(res.data.message)
                this.getCart()
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    checkOut(id) {

        const data = {
            idCart: id
        }
        console.log(data)
        Axios.post("http://localhost:3333/checkout", data, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data)
                alert(res.data.message)
                this.getCart()
            })
            .catch(error => {
                console.log(error.response)
            })
    }



    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={Logo} width="100" height="50"></img> KEVMAN</NavbarBrand>
                    <NavbarToggler onClick={this.toogle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
                                <DropdownToggle nav caret className="">
                                    Category
                                </DropdownToggle>
                                <DropdownMenu>


                                    {this.state.get_category.map((val, index) => (
                                        <MenuCategory
                                            id={val.id}
                                            category={val.category}
                                            category_detail={val.category_detail}
                                        />
                                    ))}


                                    <DropdownItem> <Link to="/category"> All Category </Link></DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <Link to="/items" className="nav-link mr-5">Items</Link>
                            </NavItem>
                        </Nav>


                        <Form className="form-inline my-2 my-lg-0 mr-5" >
                            {this.props.isLogin &&
                                <>
                                    <button type="button" class="btn btn-primary" onClick={this.toogleCart}>
                                        <FaShoppingCart className="mr-3" style={{ height: "30px", width: "30px" }} />
                                        <span class="badge badge-light"> {this.state.get_total_carts}</span>
                                    </button>

                                    <Modal size="xl" className="" isOpen={this.state.modal} toggle={this.toogleCart} >
                                        <div className="mr-5 ml-5">
                                            <ModalHeader toggle={this.toogleCart} >My Cart</ModalHeader>
                                            <ModalBody>
                                                <div className="row mb-4 text-center" style={{ backgroundColor: "#DCDCDC", height: "60px", }}>
                                                    <div className="col-md-1" style={{ marginTop: "15px" }}>
                                                        <h5> id </h5>
                                                    </div>
                                                    <div className="col-md-2" style={{ marginTop: "15px" }}>
                                                        <h5>Name Items</h5>
                                                    </div>
                                                    <div className="col-md-2" style={{ marginTop: "15px" }}>
                                                        <h5>Image Items </h5>
                                                    </div>
                                                    <div className="col-md-1" style={{ marginTop: "15px" }}>
                                                        <h5> Quantity</h5>
                                                    </div>
                                                    <div className="col-md-2" style={{ marginTop: "15px" }}>
                                                        <h5> Result</h5>
                                                    </div>

                                                    <div className="col-md-1" style={{ marginTop: "15px" }}>
                                                        <h5>Delete</h5>
                                                    </div>
                                                    <div className="col-md-2" style={{ marginTop: "15px" }} >
                                                        <h5>Check Out</h5>
                                                    </div>
                                                </div>

                                                {this.state.get_carts.map((v) => (

                                                    <div className="row mb-3 text-center" style={{ background: "#F5F5DC", paddingTop: "", paddingBottom: "" }}>
                                                        <div className="col-md-1">
                                                            <h4 className="text-secondary" style={{ marginTop: "20px" }}>{v.id} </h4>
                                                        </div>


                                                        <div className="col-md-2">
                                                            <h5 style={{ marginTop: "20px" }}>{v.name_items} </h5>
                                                        </div>

                                                        <div className="col-md-2">
                                                            <img src={`http://localhost:3333${v.image_items}`} style={{ height: "60px", width: "60px" }} className="rounded-circle border border-white"></img>
                                                        </div>

                                                        <div className="col-md-1">
                                                            <h5 style={{ marginTop: "20px" }}> {v.buy_quantity} </h5>
                                                        </div>


                                                        <div className="col-md-2">
                                                            <h5 style={{ marginTop: "20px" }}> {v.result}</h5>
                                                        </div>

                                                        <div className="col-md-1">
                                                            <Link onClick={() => this.deleteCart(v.id)}>      <FaTrash className="fas" style={{ height: "20px", width: "20px", color: "red", marginTop: "20px" }}></FaTrash>
                                                            </Link>
                                                        </div>

                                                        <div className="col-md-2">
                                                            <Link onClick={() => this.checkOut(v.id)}>      <FaCartArrowDown className="fas" style={{ height: "20px", width: "20px", color: "red", marginTop: "20px" }}></FaCartArrowDown>
                                                            </Link>
                                                        </div>

                                                    </div>

                                                ))}

                                                <ModalFooter>
                                                    <Button color="primary" onClick={this.toogleCart}>Do Something</Button>{' '}
                                                    <Button color="secondary" onClick={this.toogleCart}>Cancel</Button>
                                                </ModalFooter>
                                            </ModalBody>

                                        </div>
                                    </Modal>

                                    <Link to='/profile'>
                                        <img src={Default_foto} style={{ height: "55px", width: "55px" }} className="mr-3 ml-3 rounded-circle"></img>
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