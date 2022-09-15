import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../assets/css/sidebar.css'
import { Link } from 'react-router-dom'

function SlideBar() {
    return(
        <nav id="sidebarMenu" className="col-md-1 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div className="App position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>
                            <span data-feather="file">General</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Vendedores" className='nav-link'>
                            <span data-feather="file">Vendedores</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SlideBar;