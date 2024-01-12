import React from 'react'

import "./Styling.css"

const Banner = (props) => {
    const {heading,description,styles}=props.BannerDetails
  return (
    <li className={`${styles} bg-container`}>
        <h1 className="heading-styles">{heading}</h1>
        <p className="para-styles">{description}</p>
        <button className="button-styles">show More</button>
    </li>
  )
}

export default Banner