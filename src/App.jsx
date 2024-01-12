import React from 'react'
import Card from "./components/Card"

import "./App.css"

const cardsList = [
    {
      id: 1,
      title: 'Data Scientist',
      description:
        'Data scientists gather and analyze large sets of structured and unstructured data',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
      className: 'card-1',
    },
    {
      id: 2,
      title: 'IOT Developer',
      description:
        'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
      className: 'card-2',
    },
    {
      id: 3,
      title: 'VR Developer',
      description:
        'A VR developer creates completely new digital environments that people can see.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
      className: 'card-3',
    },
    {
      id: 4,
      title: 'ML Engineer',
      description:
        'Machine learning engineers feed data into models defined by data scientists.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
      className: 'card-4',
    }
  ]


const App = () => {
  return (
    <div className="home-bg">
        <h1 className="heading">Learn 4.0 Technologies</h1>
        <p>Get trained by alumni of IITS and top companies like amazon.microSoft,intel, Nvidia,Qualcommn,etc</p>
        <ul>
           <li className="list ul-style">{cardsList.map(eachCard=><Card cardDetails={eachCard} key={eachCard.id}/>)}</li>
        </ul>
        
    </div>
  )
}

export default App