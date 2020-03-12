import React, { Component } from 'react'
import ItemsCostume from '../component/Items'
import CostumeNavBar from '../component/Navbar'
import axios from 'axios'

class DataItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_project: []
        }
    }

    componentDidMount() {
        this.getDataProject()
    }


    getDataProject() {
        axios.get("http://localhost:3333/browse_items")
            .then(res => {
                console.log(res)
                let dataArr = res.data.result
                console.log(dataArr)
                this.setState({ data_project: dataArr })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (

            < div >
                <CostumeNavBar titleName="List Project" />
                <div className="container">
                    <h1 className="title">LIST PROJECT</h1>

                    {this.state.data_project.map((val, index) => (
                        <ItemsCostume
                            key={val.id}
                            restaurant={val.restaurant}
                            category={val.category}

                        />
                    ))}
                </div>
            </div >
        )
    }
}


export default DataItems