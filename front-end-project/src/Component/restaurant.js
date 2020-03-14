import React, { Component } from 'react'
import fotoRestaurant from '../Asset/restaurant.png'
import { Link } from 'react-router-dom'
class DataRestaurant extends Component {
    render() {
        return (


            <div className="col-sm-4">
                <div class="card mb-3">
                    <Link to='/restaurant/'><img src={fotoRestaurant} class="card-img-top" alt="" height="200" ></img></Link>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.restaurant}</h5>
                        <p class="card-text">{this.props.description}</p>
                        <p class="card-text"><small class="text-muted">{this.props.created_at}</small></p>
                    </div>
                </div>
            </div >

        )
    }
}


export default DataRestaurant