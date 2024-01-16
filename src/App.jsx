import React from 'react'

import {useState} from "react"

import Lists from "./components/Lists"

import "./App.css"

const App = () => {
  
  const tweets=[{
    id:1,
    imgUrl:"Pictures/pavan1.jpg",
    user:"Pavan Thoti",
  
    tweet:"12.5M Tweets"
   
  },{
    id:2,
    imgUrl:"Pictures/Mahesh.jpg",
    user:"Mahesh",
  
    tweet:"13.5k Tweets"
    
  },{
    id:3,
    imgUrl:"Pictures/Kanna.jpg",
    user:"Kanna",
  
    tweet:"13.5k Tweets"
    
  },{
    id:4,
    imgUrl:"Pictures/susith.jpg",
    user:"Susith",
  
    tweet:"13.5k Tweets"
    
  }]

  

  const [searchValue,setValue]=useState("")
  const [userDetails,setUserDetails]=useState(tweets)

  const DeleteUser=(id)=>{
      const pavan=userDetails.filter(user=>{
        return user.id!==id
      } )
      setUserDetails(pavan)
  }

  const searchHandler=(event)=>{
      setValue(event.target.value)
  }
  
  const searchResult=userDetails.filter((eachUser)=>{
    return (eachUser.user).toLowerCase().includes(searchValue.toLowerCase())
  })
  

  return (
    <div className="home">
      <h1 className="h">User Lists</h1>
    
      <input type="text" className="int" placeholder="serch for users" onChange={searchHandler} value={searchValue}/>
      <ul>
        <li className="pavan">{searchResult.map((eachItem)=><Lists key={eachItem.id} userDetails={eachItem} DeleteUser={DeleteUser}/>)}</li>
      </ul>
      
    

    </div>
  )
}

export default App



const Tweet=(props)=>{
  const [like,setLike]=useState(0)

  if(props.show){
    return (
      <div className="div1">
        <h>X</h>
        <h1>{props.text}</h1>
        <h2>{props.name}</h2>
        <p>{props.t}</p>
        <p>{like} likes</p>
        <p>{props.salary}</p>
        <p>{props.company}</p>
        <button onClick={()=>setLike(like+1)}>Like</button>
        {props.tweetMore?<h1 style={{color:"white"}}>No content</h1>:<h1 style={{backgroundColor:"white"}}>Has more content</h1>}
  
      </div>
    )
  }else{
    return(
      <>
      <p>
        This content is hidden
      </p>
      </>
    )
  }
  
}
Tweet.defaultProps = {
  salary:1500000,
  company:"Mnc",
  
}