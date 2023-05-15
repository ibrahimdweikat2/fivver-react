import React from 'react'
import Sliders from 'infinite-react-carousel';
import './Slider.scss'
const Slider = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='slider'>
        <div className="container">
          <Sliders slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Sliders>
        </div>
    </div>
  )
}

export default Slider