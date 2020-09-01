import React from 'react'
import { getSurprise } from '../api'

export default class Surprise extends React.Component {
  state = {
    mystery: null
  }

  handleClick = () => {
      getSurprise()
      .then(surprise => {
        this.setState({
            mystery: surprise
       })
      }) 
  }

  handleHide = () => {
    this.setState({
          mystery: null
     })
}

  render () {
    return (
      <>
        <div><button onClick={this.handleClick}>Surprise me</button>
        <button onClick={this.handleHide}>Hide the surprise</button></div>
 
 
        {this.state.mystery && <div><img style={{height: '400px', width: '400px'}}
        src={this.state.mystery} /></div>}
      </>
    )
  }
}
