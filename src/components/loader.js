import React, { Component } from 'react'
import giphy from './giphy.gif'

export default class loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={giphy} alt='giphy' style={{filter : 'invert(100%)', width :'350px'}}></img>
      </div>
    )
  }
}
