import React, { Component } from 'react'

import ItemsCostume from '../Looping/items'
import Axios from 'axios'

import { Container, Row } from 'reactstrap'


class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data_items: []
        }
    }

    componentDidMount() {
        this.getDataItems()
    }

    getDataItems() {
        Axios.get("http://localhost:3333/browse_items")
            .then(res => {
                let dataArr = res.data.result
                console.log(res.data.result)
                this.setState({ data_items: dataArr })
            })
    }





    render() {
        return (
            <div>
                <Container>
                    < div className="row about text-center">
                        <div className="col-sm-12">
                            <h2 className="">Items
                                <hr ></hr>
                            </h2>
                        </div>
                    </div>

                    <div className="container">
                        <Row>
                            <div className="row ml-5 mr-5">
                                {this.state.data_items.map((val, index) => (
                                    <ItemsCostume
                                        id={val.id}
                                        image_items={val.image_items}
                                        restaurant={val.restaurant}
                                        category={val.category}
                                        category_detail={val.category_detail}
                                        name={val.name}
                                        images_items={val.images_items}
                                        quantity={val.quantity}
                                        price={val.price}

                                    />
                                ))}

                            </div>

                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}


export default Items