import React from 'react'


import Banner from "./components/Banner"
import "./App.css"

const BannerDetails=[
  {uniqueNo:1,heading:"The Season Latest",description:"Get the seasons all latest designs in a flickof your hands",styles:"banner1"},
  {uniqueNo:2,heading:"Our new Designs",description:"Get the designs developed by our in-house team all for youself",styles:"banner2"},
  {uniqueNo:3,heading:"Insiders",description:"Get the top class productions for yourself with an extra off",styles:"banner3"}
]

const App = () => {
  return (
    
      <ul className="App">
        {BannerDetails.map(eachItem=> <Banner BannerDetails={eachItem} key={eachItem.uniqueNo}/>)}
      </ul>
    
  )
}

export default App