import React, { Component } from 'react'
import '../Styles/Home.css';
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import phone1 from '../images/phone1.webp'
import phone2 from '../images/phone2.webp'
import apple_store from '../images/apple_store.webp'
import play_store from '../images/play_store.webp'
import swage from '../images/swage.svg'
import cities from '../Cities'
import loginImg from '../images/login_img.webp'
import config from '../config.json'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: ["About Us", "Team", "Careers", "Swag-e blog", "Swag-e One", "Swag-e Corporate", "Swag-e Instamart", "Swag-e Genie"],
            links2: ["Help & Support", "Partner with us", "Ride with us"],
            links3: ["Legal & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy", "Offer Terms", "Phishing & Frauds", "Corporate – Swiggy Money Codes Terms and Conditions", "Corporate - Swiggy Discount Voucher Terms and Conditions"],
            loginNumber: "",
            loginPassword: "",
            registerNumber: "",
            registerName: "",
            registerEmail: "",
            registerPassword: "",
            msg:"",
            status:"",
            user:[],
            activeUser:[],
        }

        // console.log(this.state)
    }
    async componentDidMount(){
        fetch(config.USER_API).then((response)=>{
            if(response.ok){
                return response.json();
            }
        }).then((data)=>{
            // console.log(Array.isArray(data))
            this.setState({
                user:data
            })
        }).catch((error)=>{

        })
    }
    
    registerUser=()=>{
        let loadUser={
            number:this.state.registerNumber,
            email:this.state.registerEmail,
            password:this.state.registerPassword,
            name:this.state.registerName,
        }
        fetch(config.USER_API,{
            headers:{
                "Content-Type": "application/json"
            },
            method:"POST",
            body:JSON.stringify(loadUser)
        }).then((response)=>{
            if(response.ok){
                this.setState({
                    msg:<span className='text-success border border-success p-2'>Registration Successful</span>
                })
                setTimeout(()=>{
                    this.setState({
                        msg:"",
                    })
                },3000)
            }
        }).then((data)=>{

        }).catch((error)=>{

        })
    }

    render() {
        return (
            <>
            {/* {console.log(this.state.user[this.UserIndex])} */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-7 p-5">
                            <div className="row">
                                <div className="col-sm-8 d-flex align-items-center">
                                    <p>
                                        <img src={swage} alt="Swag-e" className='img-fluid' style={{ width: '35px', cursor: "pointer" }} />
                                    </p>
                                    <p className='ms-3  fs-3 text-logo' style={{ fontFamily: "ProximaNova,arial,'Helvetica Neue',sans-serif", fontWeight: "bolder", letterSpacing: "2px", cursor: "pointer" }}>SWAG-E</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row text-center h6">
                                        <div className="col-sm-6 text-bg-white p-3" style={{ cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#loginOffCanvas" aria-controls="offcanvasRight" >Login</div>
                                        <div className="col-sm-6 text-bg-dark p-3" style={{ cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#registrationOffCanvas" aria-controls="offcanvasRight" >Register</div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="offcanvas offcanvas-end" style={{ width: "40vw" }} tabIndex="-1" id="loginOffCanvas" >
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body p-4" style={{ letterSpacing: "1px" }}>
                                    <div className="row">
                                        <div className="col-sm-12 d-flex content-justify-between">
                                            <p className='h4'>Login
                                                <br />
                                                <span className='h6'>or <span className='text-logo text-decoration-none' data-bs-toggle="offcanvas" data-bs-target="#registrationOffCanvas" aria-controls="offcanvasRight" style={{ cursor: "pointer" }}>create an account</span>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    "Don't Wait for Opportunity, Create it."
                                                    <br />
                                                    <span className='text-muted' style={{ fontSize: "13px" }}><i> - Krisk Roman</i></span>
                                                </span>
                                            </p>
                                            <p className=''>
                                                <img src={loginImg} alt="Food" className='img-fluid h-50 ps-5' />
                                            </p>
                                        </div>
                                        <div id="showSuccess" style={{display:"none"}}>
                                            <p className='fs-5 text-center alert alert-success'>LOGIN SUCCESSFUL</p>
                                        </div>
                                        <div className="col-sm-12">
                                            <form action="/" method="post">
                                            <div className="form-floating mb-2">
                                                <input type="email" className="form-control" id="loginNumber" placeholder="name@example.com" value={this.state.loginNumber} onChange={(event) => {
                                                    this.setState({
                                                        loginNumber: event.target.value
                                                    })
                                                }}  autoComplete="true"/>
                                                <label htmlFor="loginNumber">Phone Number</label>
                                            </div>
                                            <div className="form-floating mb-2">
                                                <input type="password" className="form-control" id="loginPassword" placeholder="Minimum 8 to 14 characters" value={this.state.loginPassword} onChange={(event) => {
                                                    this.setState({
                                                        loginPassword: event.target.value
                                                    })
                                                }} autoComplete='true'/>
                                                <label htmlFor="loginPassword">Password</label>
                                            </div>
                                            <input type="button" value="LOGIN" className='btn btn-outline-warning btn-sm' style={{ letterSpacing: "2px" }} onClick={this.props.handleLoginUser}/> <br />
                                            <span style={{ fontSize: "14px", letterSpacing: "1px" }}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            
                            <div className="offcanvas offcanvas-end" style={{ width: "40vw" }} tabIndex="-1" id="registrationOffCanvas" >
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body p-4" style={{ letterSpacing: "1px" }}>
                                    <div className="row">
                                        <div className="col-sm-12 d-flex content-justify-between">
                                            <p className='h4'>Sign up
                                                <br />
                                                <span className='h6'>or <span className='text-logo text-decoration-none' data-bs-toggle="offcanvas" data-bs-target="#loginOffCanvas" aria-controls="offcanvasRight" style={{ cursor: "pointer" }}>login to your account</span>
                                                    <br />
                                                    {this.state.msg}
                                                    <br />
                                                    "When you have a dream, you've got to grab it and never let go."
                                                    <br />
                                                    <span className='text-muted' style={{ fontSize: "13px" }}><i> - Carol Burnett</i></span>
                                                    <br />
                                                </span>
                                            </p>
                                            <p className=''>
                                                <img src={loginImg} alt="Food" className='img-fluid h-50 ps-5' />
                                            </p>
                                        </div>
                                        <div className="col-sm-12">
                                            <form action="/" method="post">
                                            <div className="form-floating mb-2">
                                                <input type="number" className="form-control" id="registerNumber" placeholder="9999 XXX XXX" value={this.state.registerNumber} onChange={(event) => {
                                                    this.setState({
                                                        registerNumber: event.target.value
                                                    })
                                                }}  autoComplete='true'/>
                                                <label htmlFor="registerNumber">Phone Number</label>
                                            </div>
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="registerName" placeholder="Audrey Hepburn" value={this.state.registerName} onChange={(event) => {
                                                    this.setState({
                                                        registerName: event.target.value
                                                    })
                                                }} autoComplete='true'/>
                                                <label htmlFor="registerName">Name</label>
                                            </div>
                                            <div className="form-floating mb-2">
                                                <input type="email" className="form-control" id="registerEmail" placeholder="name@example.com" value={this.state.registerEmail} onChange={(event) => {
                                                    this.setState({
                                                        registerEmail: event.target.value
                                                    })
                                                }} autoComplete='true'/>
                                                <label htmlFor="registerEmail">Email</label>
                                            </div>
                                            <div className="form-floating mb-2">
                                                <input type="password" className="form-control" id="registerPassword" placeholder="Minimum 8 to 14 characters" value={this.state.registerPassword} onChange={(event) => {
                                                    this.setState({
                                                        registerPassword: event.target.value
                                                    })
                                                }} autoComplete='true'/>
                                                <label htmlFor="registerPassword">Password</label>
                                            </div>
                                            <input type="button" value="REGISTER" className='bg-swag btn form-control' style={{ letterSpacing: "2px" }} onClick={this.registerUser}/>
                                            <span style={{ fontSize: "14px", letterSpacing: "1px" }}>By clicking on Register, I accept the Terms & Conditions & Privacy Policy</span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END REGISTRATION OFFCANVAS */}
                            {/* {console.log(this.state)} */}
                            <div className="row">
                                <div className="col-sm-12 py-5">
                                    <p className='h1'>Hungry?</p>
                                    <p className='h4 text-muted mb-5'>Order food from favourite restaurants near you.</p>
                                    <div className="input-group border-swag">
                                        <input type="text" className="form-control py-3 ps-4 border border-0" aria-label="Dollar amount (with dot and two decimal places)" placeholder='Enter Delivery Location' />
                                        <span className="input-group-text border border-0 bg-swag" style={{ cursor: "pointer" }}>FIND FOOD</span>
                                    </div>
                                    <p className='text-muted mt-3'>POPULAR CITIES IN INDIA</p>
                                    <p className='text-muted mt-3' style={{ fontSize: "19px" }}>
                                        <span className='fw-bold'> Ahmadabad </span>
                                        Bangalore
                                        <span className='fw-bold'> Chennai </span>
                                        Delhi
                                        <span className='fw-bold'> Gudgeon </span>
                                        Hyderabad
                                        <span className='fw-bold'> Kolkata </span>
                                        Mumbai
                                        <span className='fw-bold'> Pune </span>
                                        & more
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5" style={{ background: "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg')", backgroundSize: "cover", backgroundPosition: "right" }}>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row text-white text-center d-flex align-items-center" style={{ background: "#2b1e16" }}>
                                <div className="col-md-4 ">
                                    <img src={img1} alt="No Minimum Order" className='img-fluid' style={{ width: "10vw" }} />
                                    <p className='h4 mt-4'>No Minimum Order</p>
                                    <p className='px-5' style={{ fontSize: "14px" }}>Order in for yourself or for the group, with no restrictions on order value</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={img2} alt="Live Order Tracking" className='img-fluid' style={{ width: "10vw" }} />
                                    <p className='h4 mt-4'>Live Order Tracking</p>
                                    <p className='px-5' style={{ fontSize: "14px" }}>Know where your order is at all times, from the restaurant to your doorstep</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={img3} alt="Lightning-Fast Delivery" className='img-fluid' style={{ width: "10vw" }} />
                                    <p className='h4 mt-4'>Lightning-Fast Delivery</p>
                                    <p className='px-5' style={{ fontSize: "14px" }}>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 align-self-center ps-5">
                            <p className="h1 fw-bold ps-4">Restaurants in your pocket</p>
                            <p className="fs-5 text-muted ps-4" style={{ letterSpacing: "1px" }}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                            <p className='ps-4'>
                                <img src={play_store} alt="Play Store" className='img-fluid w-50' style={{ cursor: "pointer" }} />
                                <img src={apple_store} alt="Apple Store" className='img-fluid w-50' style={{ cursor: "pointer" }} />
                            </p>
                        </div>
                        <div className="col-sm-4 text-end">
                            <img src={phone1} alt="Phone1" className='img-fluid w-75' />
                        </div>
                        <div className="col-sm-4 text-start">
                            <img src={phone2} alt="Phone2" className='img-fluid w-75' />
                        </div>
                    </div>
                    <div className="row pt-5" style={{ background: "#000000" }}>
                        <div className="col-sm-3 ps-5">
                            <ul className="list-group" style={{ background: "#000000" }}>
                                <li className="list-group-item text-muted fw-bold" style={{ background: "#000000" }}>COMPANY</li>
                                {this.state.links.map((item, index) => {
                                    return <li key={index} className="list-group-item text-white" style={{ background: "#000000", cursor: "pointer" }}>{item}</li>
                                })}

                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <ul className="list-group" style={{ background: "#000000" }}>
                                <li className="list-group-item text-muted fw-bold" style={{ background: "#000000" }}>CONTACT US</li>
                                {this.state.links2.map((item, index) => {
                                    return <li key={index} className="list-group-item text-white" style={{ background: "#000000", cursor: "pointer" }}>{item}</li>
                                })}
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="list-group" style={{ background: "#000000" }}>
                                <li className="list-group-item text-muted fw-bold" style={{ background: "#000000" }}>LEGAL</li>
                                {this.state.links3.map((item, index) => {
                                    return <li key={index} className="list-group-item text-white" style={{ background: "#000000", cursor: "pointer" }}>{item}</li>
                                })}
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <p className='ps-4 my-5'>
                                <img src={play_store} alt="Play Store" className='img-fluid mb-4' />
                                <img src={apple_store} alt="Apple Store" className='img-fluid' />
                            </p>
                        </div>
                        <div className="row ps-5 gy-2">
                            <p className='text-logo h3 ps-4'>WE DELIVER TO</p>
                            {cities.map((cities, index) => {
                                return <div className='col-sm-3 ps-4 text-muted' key={index}>
                                    <span style={{ cursor: "pointer" }}>{cities}</span>
                                </div>
                            })}
                        </div>
                        <div className="row">
                            <div className="col-sm-11 mx-auto ">
                                <hr className='border border-1' />
                                <div className='d-flex justify-content-between'>
                                    <p>
                                        <img src={swage} alt="Swage" className='img-fluid' style={{ width: "2vw", cursor: "pointer" }} />
                                        <span className='text-logo fw-bold ps-2' style={{ letterSpacing: "3px", cursor: "pointer" }}>SWAG-E</span></p>
                                    <p className='text-white'>
                                        <span style={{ cursor: "pointer" }}>@2023 SWAG-E</span>
                                    </p>
                                    <p className='fs-5 text-white' style={{ cursor: "pointer" }}>
                                        <i className="fa-brands fa-facebook pe-2"></i>
                                        <i className="fa-brands fa-pinterest pe-2"></i>
                                        <i className="fa-brands fa-instagram pe-2"></i>
                                        <i className="fa-brands fa-twitter pe-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
