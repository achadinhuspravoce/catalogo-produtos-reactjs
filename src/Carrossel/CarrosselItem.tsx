import React from 'react'
import './CarrosselItem.css'

const CarrosselItem = ({children}) => {
  return (
    <>
        <div className="carousel-item active">
            <div className="cards-wrapper">
                {children}
            </div>
        </div>
    </>
  )
}

export default CarrosselItem