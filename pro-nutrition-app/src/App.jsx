import React from "react";
import { useState } from "react";
import FoodData from "../../resources/FoodData";
import Search from "./components/Search";
import FoodBox from "./components/FoodBox";
import './App.css'

function App(){
  const [search, setSearch] = useState("")

  const filteredSearch = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <>
      <div className="maindiv">
        <div className="title"><h1>Pro-nutrition App</h1></div>
        <Search setSearch = {setSearch}/>{
        filteredSearch.length <= 0 ? (
          <h3>No data found</h3>
        ) : (
          filteredSearch.map((e, i)=>( 
             <FoodBox key={i} ele = {e} index= {i} />
          ))
        )
      }
      </div>

    </>
  )
}

export default App;