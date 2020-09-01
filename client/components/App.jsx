import React from 'react'

import Dog from './Dog'
import Surprise from './Surprise'
import NASA from './APOD'

const App = () => {
  return (
    <>
      <h1>External APIs are fun!</h1>
      
      <Dog/>
      <Surprise/>
      <NASA />
    </>
  )
}

export default App
