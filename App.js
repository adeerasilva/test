import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import Add from './Add';
//import Home from './Home';

import './App.css';

 const App =() => {
  

   /* <Router>
    <Routes>
      <Route path="/add" element={<Add />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>*/

  const [edata,setEdata] =useState({
    id:"",
    name:"",
    amount:"",
  })
  const navigate = useNavigate()
const handleclick = e =>{
  e.preventDefault()
  try{
    await axios.post("http://localhost//3300", edata)
   // navigate("/")
  }
  catch(err){
    console.log(err)
  }
}
  const handleChange =(e) =>{
    setEdata((prev)=>({...prev ,[e.target.name]: e.target.value}));
  }
  return ( 
<div className="App">
      <label >Naxe</label>
      <input type="text"  onChange={handleChange} name="name"/>
      <label>Amount</label>
      <input type="text" onChange={handleChange}   name="amount"/>
      <button onClick={handleclick}>Submit</button>
      
    </div>
    
  );
}

export default App;
