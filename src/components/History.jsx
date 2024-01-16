import React from 'react'
import { FaTrash } from 'react-icons/fa';

import "./History.css"

const History = (props) => {
   const {DeleteHistory} = props;
    const {id,timeAccessed,logoUrl,title,domainUrl}=props.history
 
 const onDelete=()=>{
     DeleteHistory(id)
 }
  return (
    <div className="history-div">
       <div className="lists">
            <h1 className="time">{timeAccessed}</h1>
            <img src={logoUrl} className="logo" alt="logo" />
            <h1 className="title">{title}</h1>
            <h1 className="domain">{domainUrl}</h1>
       </div>
       <button className="Button-styling" onClick={onDelete}>
         <FaTrash className="delete-icon"/>
       </button>
    </div>
  )
}

export default History