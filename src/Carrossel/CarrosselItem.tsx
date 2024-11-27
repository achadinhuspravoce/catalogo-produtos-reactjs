import React from 'react'
import './CarrosselItem.css'

const CarrosselItem = ({children}:any) => {
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