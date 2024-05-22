import React, { Component } from 'react'
import './App.css'
import Home from './Components/Home'
import config from './config.json'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import ProfileHome from './Components/ProfileHome'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Offers from './Components/Offers'
import Cart from './Components/Cart'
import Help from './Components/Help'
import PaymentOffers from './Components/PaymentOffers'
import Index from './Components/Index'


export class App extends Component {

  constructor(props) {
    super(props);
    this.id = JSON.parse(window.localStorage.getItem('id')) || 0
    this.state = {
      user: [],
      status:"",
    }
  }

  componentDidMount() {
      fetch(config.USER_API).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        // console.log(Array.isArray(data))
        // console.log(data)
        this.setState({
          user: data
        })
      }).catch((error) => {

      })
  }
  handleLoginUser=()=>{
    console.log("Redirecting")
  }

  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home user={this.user} handleLoginUser={this.handleLoginUser} />} />
            <Route exact path='/profile' element={<ProfileHome/>}/>
            <Route exact path='/search' element={<Search/>}/>
            <Route exact path='/offers' element={<Navigate to='/offers/restaurant' element={<Offers/>}/>}/>
            <Route exact path='/offers/restaurant' element={<Offers/>}/>
            <Route exact path='/offers/payment' element={<PaymentOffers/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/help' element={<Help/>}/>
            <Route exact path='/home' element={<Index/>}/>
            {/* <Route exact path='/home' element={<Navigate to='/profile' replace={true}/>}/> */}
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
