import React from 'react'
import Items from './items'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './restaurant';




class Rumah extends React.Component {
    render() {
        return (
            <div>

                <Restaurant />

                <Items />
            </div>
        )
    }
}

export default Rumah