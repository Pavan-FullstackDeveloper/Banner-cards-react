import React from 'react'
import {useState} from "react"
import History from "./components/History"
import "./App.css"

const App = () => {
  const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'instagram.com',
      Url:"https://www.instagram.com"
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'twitter.com',
      Url:"https://www.twitter.com"
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'facebook.com',
      Url:"https://www.facebook.com"
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'linkedin.com',
      Url:"https://www.linkedin.com"
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'hashnode.com',
      Url:"https://www.hashnode"
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'github.com',
      Url:"https://www.github.com"
    },
  
    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'reactjs.org',
      Url:"https://www.reactjs.org"
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'stackoverflow.com',
      Url:"https://www.stackoverflow.com"
    },
  
    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'mail.google.com',
      Url:"https://www.gmail.com"
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'google.com',
      Url:"https://www.google.com"
    },
  ]
  const [mouseover,setMouseover]=useState(false)
  const [searchValue,setSearchValue]= useState("")
  const [historyList, setHistoryList] = useState(initialHistoryList);
  const searchInput=(event)=>{
      setSearchValue(event.target.value)
  }

  const searchHistoryLists=historyList.filter(item=>{
    return (item.title).toLowerCase().includes(searchValue.toLowerCase())})

  const DeleteHistory=(id)=>{
    let updatedHistory=historyList.filter(history=>{
      return history.id!==id
    })
    setHistoryList(updatedHistory)
  }

  const HandlemouseOver=()=>{
      setMouseover(true)
  }
  const HandleMouseOut=()=>{
     setMouseover(false)
  }

  const dynamicStyle={
    backgroundColor: mouseover ? "skyblue": "white" 
  }

  
  

  return (
    <>
      <div className="nav-bar">
         <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="Applogo" className="App-logo" />
         <div className="search-container">
            <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" className="icon-styling" alt="input-icon" />
            <input style={dynamicStyle} type="text" className="input-styling" placeholder="Search History" onChange={searchInput} onMouseOut={HandleMouseOut} value={searchValue} onMouseOver={HandlemouseOver}/>
         </div>
        
      </div>
      
        




       <div className="bottom-section">
          <ul>
            {searchHistoryLists.map(eachHistory=><History history={eachHistory} DeleteHistory={DeleteHistory} key={eachHistory.id} />)}
          </ul>
          
      </div> 
    
    </>
  )
}

export default App