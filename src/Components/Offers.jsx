import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import offers from '../images/offers.webp'
import config from '../config.json'

export default class Offers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
    }
  }

  async componentDidMount() {
    fetch(config.RESTAURANT_API).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      if (Array.isArray(data)) {
        this.setState({
          restaurant: data
        })
      }
      console.log(this.state.restaurant)
    }).catch((error) => {
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
          <div className="row mx-auto">
            {this.handleRestaurantOffer()}
          </div>
        </div>
      </>
    )
  }
  handleRestaurantOffer = () => {
    console.log(this.state.restaurant)
    return this.state.restaurant.map((item, index) => {
      return <div className='col-sm-3'>
        <div className="card" style={{ width: " 18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.restaurant_info.name}</h5>
            <p className="card-text">{item.address}</p>
            <p className="card-text">Rating {item.rating}</p>
            <p className="card-text">{item.type_of_food}</p>
            <a href="/" className="btn btn-primary btn-sm">Visit</a>
          </div>
        </div>

      </div>
    })
  }
}
