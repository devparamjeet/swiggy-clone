import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <>
        <div className="row py-4">
          <div className="col-sm-8 mx-auto">
            <input type="search" name="Search" placeholder='Search food, restaurant' className='form-control' />
          </div>
        </div>
      </>
    )
  }
}
