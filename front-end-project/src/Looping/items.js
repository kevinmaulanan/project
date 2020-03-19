import React, { Component } from 'react'
import { Col, CardText, CardImg, CardTitle, CardSubtitle, Button, Card, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import Kentang from '../Asset/kentang.jpg'

export default class ItemsCostume extends Component {
    render() {
        return (
            <Col sm={3} className="mb-3">
                <div className="card">
                    <Link to={`/Items/${this.props.id}`}>

                        <CardImg src={`http://localhost:3333${this.props.image_items}`} style={{ height: "150px", width: "222px", overflow: "hidden" }} alt='Items' />
                    </Link>


                    <CardTitle className=" ml-2 mt-2"> <small className=" text-success"> {this.props.restaurant}</small></CardTitle>
                    <div className="ml-2">
                        <CardTitle> <h5 className="text-dark">{this.props.name}</h5></CardTitle>

                        <CardSubtitle className="mt-1 mb-1 text-danger">Rp.{this.props.price},-</CardSubtitle>
                    </div>
                </div>
            </Col >
        )
    }

}