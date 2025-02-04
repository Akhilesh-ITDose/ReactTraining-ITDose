import React from 'react'
import Header from './Header'
import { Body } from './Body'
import Footer from './Footer'

// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    const myInfo = {
      firstName: "AKhilesh",
      lastName: "Kamat",
      designation: "Software Developer"
    }
    const myInfo2 = {
      firstName: "Ajeet",
      lastName: "jhkslh",
      designation: "Software Developer"
    }


  return (
    <>
    <Header/>
    <Body  />
   
    {/* <Footer/> */}
    </>
  )
}

export default App