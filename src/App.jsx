import { useState } from 'react'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
function App() {


  return (
    <>
      {/* accordion component */}
      <Accordion/>
      {/* random color component  */}
      <RandomColor/>
      {/* star rating component */}
      <StarRating noOfStar={10}/>
    </>
  )
}

export default App
