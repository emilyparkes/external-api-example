import React from 'react'
import { getDog } from '../api'

export default class Dog extends React.Component {
  state = {
    pupper: null
  }

  componentDidMount () {
    getDog()
      .then(doggo => {
        this.setState({
            pupper: doggo.url
       })
      }) 
  }

  render () {
    return (
      <>
        {this.state.pupper && <img style={{height: '400px', width: '400px'}}
          src={this.state.pupper}/>}
      </>
    )
  }
}
