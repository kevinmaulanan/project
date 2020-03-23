import React, { Component } from 'react'
import fotoRestaurant from '../Asset/restaurant.png'
import { CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'
class DataRestaurant extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div class="card mt-3">
                    <Link to={`/restaurant/${this.props.id}`}>
                        <div style={{ height: "180px", width: "336px", overflow: "hidden" }}>
                            <CardImg className="img-response" src={`http://localhost:3333${this.props.image_restaurant}`} alt='Restaurant' />
                        </div>
                    </Link>
                    <h5 class="card-title mt-2 border ">{this.props.restaurant}</h5>
                    <p class="card-text ">{this.props.description}</p>
                    <p class="card-text pb-4"><small class="text-muted text-secondary">{this.props.created_at}</small></p>

                </div>
            </div >


        )
    }
}


export default DataRestaurant