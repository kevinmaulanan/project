import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Asset/logo.png'

export default class FooterCostume extends Component {
    render() {
        return (
            <div>
                <footer class=" page-footer font-small bg-unique-color-dark pt-4">
                    <div class=" bg-dark">
                        <div class="text-center">
                            <div class="footer-copyright py-3 text-light">© 2020 Copyright:
                       <Link to='/home'> Kevman.com</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
