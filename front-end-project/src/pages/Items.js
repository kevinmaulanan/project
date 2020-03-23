import React, { Component } from 'react'

import ItemsCostume from '../Looping/items'
import Axios from 'axios'

import { Container, Row } from 'reactstrap'


class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data_items: null,
            pageActive: 1
        }
    }

    tambahPage() {
        this.setState({ pageActive: this.state.pageActive + 1 })
        this.getDataItems()
    }

    page(i) {
        console.log(i)
        this.setState({ pageActive: i + 1 })
        this.getDataItems()
    }

    kurangPage() {
        this.setState({ pageActive: this.state.pageActive - 1 })
        this.getDataItems()
    }

    componentDidMount() {
        this.getDataItems()
    }

    async getDataItems() {
        const data = await Axios.get(`${process.env.REACT_APP_API_URL}/browse_items?page=${this.state.pageActive}`)
            .then(res => {
                let dataArr = res.data
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
                                {this.state.data_items &&
                                    this.state.data_items.result.map((val, index) => (
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
                        <nav aria-label="Page navigation example">
                            <ul class="pagination" >
                                <li class="page-item"  >
                                    <button onClick={() => this.kurangPage()} class="page-link" aria-label="Previous" >
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </button>
                                </li>

                                {this.state.data_items &&
                                    [...Array(this.state.data_items.pagination.totalPages)].map((v, i) => (
                                        < li onClick={(event) => this.page(i)} class={`page-item ${i + 1 == this.state.pageActive ? "active" : ''}`}><a class="page-link" >{i + 1}</a></li>
                                    ))
                                }


                                <li class="page-item">
                                    <button onClick={() => this.tambahPage()}
                                        class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </button>
                                </li>


                            </ul>
                        </nav>
                    </div>
                </Container >
            </div >
        )
    }
}


export default Items