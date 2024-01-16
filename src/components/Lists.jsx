import React from 'react'

import {MdDelete} from "react-icons/md"

import "./List.css"

const Lists = (props) => {
  const { DeleteUser}=props
  const {user,imgUrl,tweet,id}=props.userDetails ;
  
  const onDelete=()=>{
     DeleteUser(id)
  }


  return (
    <div className="div1">
      <img src={imgUrl} alt="User" className="img-style"/>
      <div>
        <h1 className="name-style">{user}</h1>
        <p className="text">{tweet}</p>
      </div>
      <button className="button-style" onClick={onDelete}>
        <MdDelete className="delete-icon" />
      </button> 
    </div>
  )
}

export default Lists