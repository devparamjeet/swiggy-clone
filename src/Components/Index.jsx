import React, { Component } from 'react'
import config from '../config.json'
import nandos from '../images/nandos.jpg'



export default class Index extends Component {
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
        <div className="row mx-auto">
          <hr />
          <p className='h2 text-center text-decoration-underline'>Restaurants near you</p>
          {this.handleRestaurant()}
        </div>
      </>
    )
  }

  handleRestaurant = () => {
    console.log(this.state.restaurant)
    return this.state.restaurant.map((item, index) => {
      return <div className='col-sm-12 px-5' key={index}>
        <div className="d-flex align-items-center justify-content-between">
          <p className='fs-2 fw-bold'>{item.restaurant_info.name}
            <br />
            <span className='h6' style={{letterSpacing:"1px"}}>{item.restaurant_info.address}</span>
          </p>
          <p className='text-center'>
            <img src={nandos} className='img-thumbnail' style={{ width: "20vw" }} alt="nandos" />
            <br />
            <span className='text-muted' style={{letterSpacing:"1px"}}>Rating (5/5) : ⭐⭐⭐⭐⭐</span><br />
            <span style={{color:"green", fontFamily:"Product Sans", fontWeight:"bold", textShadow:"0px 0px 1px black"}}>{item.restaurant_info.open_status} Now ✅</span>
          </p>
        </div>
        <hr />
        <div className="card" style={{ width: " 18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
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
