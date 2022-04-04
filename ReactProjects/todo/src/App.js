//No need in React 17
//import React from "react"
import {Restaurant}  from "./component/Basics/Restaurant"

const App = () => {
  return (
    <div>
    <Restaurant />
    <MyName />
      Hello World
    </div>
    
  )
}

const MyName = () => {
  return (
  <h1>My name is amandeep</h1>
  )
}

export default App;
