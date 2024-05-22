import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/swage.svg'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-sm-1 mx-auto my-auto">
                            <p><img src={logo} alt="Swage" className='img-fluid' style={{ width: "2vw", cursor: "pointer" }} /></p>
                        </div>
                        <div className="col-sm-4 my-auto">
                            <Link to='/home' className='nav-link fw-bold' style={{letterSpacing:"1px"}}>Home <span className='text-muted'>Location</span></Link>
                        </div>
                        <div className="col-sm-5 mx-auto">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                                        <li className="nav-item"  style={{width:"110px",letterSpacing:"1px"}}>
                                            <Link className="nav-link active" aria-current="page" to="/search">
                                            <i className="fa-solid fa-magnifying-glass"></i> Search
                                            </Link>
                                        </li>
                                        <li className="nav-item" style={{width:"110px",letterSpacing:"1px"}}>
                                            <Link className="nav-link" to="/offers">
                                            <i className="fa-solid fa-percent"></i> Offers
                                            </Link>
                                        </li>
                                        <li className="nav-item" style={{width:"110px",letterSpacing:"1px"}}>
                                            <Link className="nav-link" to="/help">
                                            <i className="fa-regular fa-circle-question"></i> Help
                                            </Link>
                                        </li>
                                        <li className="nav-item" style={{width:"110px",letterSpacing:"1px"}}>
                                            <Link className="nav-link" to="/profile">
                                            <i className="fa-regular fa-user"></i> Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item" style={{width:"110px",letterSpacing:"1px"}}>
                                            <Link className="nav-link" to="/cart">
                                            <i className="fa-regular fa-heart"></i> Cart
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
