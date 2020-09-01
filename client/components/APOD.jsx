import React from 'react'
import { getAPOD } from '../api'

export default class APOD extends React.Component {
  state = {
    apod: null
  }

  handleClick = () => {
    getAPOD()
    .then(apod => {
        this.setState({
            apod: apod.url
        })
    })
  }

  handleHide = () => {
    this.setState({
          apod: null
     })
}

  render () {
    return (
      <>

        <div><button onClick={this.handleClick}>Show me NASA</button>
        <button onClick={this.handleHide}>Hide the NASA</button></div>

        {this.state.apod && <img style={{height: '400px', width: '400px'}} 
          src={this.state.apod}/>}
      </>
    )
  }
}