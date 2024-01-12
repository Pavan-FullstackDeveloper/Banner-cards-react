import React from 'react'

import "./Card.css"

const Card = (props) => {
    const {title,description,imgUrl,className}=props.cardDetails
  return (
    <div className={`${className} card`}>
         <h1 className="card-heading">{title}</h1>
         <p className="card-para">{description}</p>
         <img src={imgUrl} alt={title} className="card-img"/>
    </div>
  )
}

export default Card