import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import offers from '../images/offers.webp'
import config from '../config.json'


export default class PaymentOffers extends Component {
    
  constructor(props){
    super(props);
    this.state={
      payment:[],
    }
  }

  async componentDidMount(){
    fetch(config.PAYMENT_API).then((response)=>{
      if(response.ok){
        return response.json();
      }
    }).then((data)=>{
      if(Array.isArray(data)){
        this.setState({
          payment:data
        })
      }
      console.log(this.state.payment)

    }).catch((error)=>{
    })
    
  }
  render() {
    return (
      <>
        <div>
          <div className="row">
            <div className="col-sm-12 d-flex align-items-center justify-content-around" style={{ background: "#005062", minHeight: "300px" }}>
              <p className='h1 text-white'>
                Offers for you
                <br />
                <span className='fs-6 text-light' style={{ letterSpacing: "1px" }}>Explore top deals and offers exclusively for you!</span>
              </p>
              <p>
                <img src={offers} className="img-fluid" style={{ width: "20vw" }} alt="offers" />
              </p>
            </div>
            <div className="col-sm-12 py-3 ps-5">
              <div className="row">
                <div className="col-sm-2">
                  <Link to="/offers/restaurant" className='nav-link'><span className='h5'>Restaurant offers</span></Link>
                </div>
                <div className="col-sm-4">
                  <Link to="/offers/payment" className='nav-link'><span className='h5'>Payment offers/Coupons</span></Link>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </>
    )
  }
}
