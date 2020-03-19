import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './restaurant';
import Items from './items'




class Home extends React.Component {
    render() {
        return (
            <div>
                <Restaurant />
                <Items />
            </div>
        )
    }
}

export default Home