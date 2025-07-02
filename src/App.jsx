import { useState } from 'react'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
function App() {


  return (
    <>
      {/* accordion component */}
      <Accordion/>
      {/* random color component  */}
      <RandomColor/>
      {/* star rating component */}
      <StarRating noOfStar={10}/>

      {/* image slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
    </>
  )
}

export default App
