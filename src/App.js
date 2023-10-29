// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
 const [mode,setMode]=useState('light'); //Whether dark mode is enabled or not
 const [text, setText]=useState("Enable DarkMode")
 const [alert, setAlert]=useState(null);
 const showAlert= (message, type)=>{
    setAlert({
     msg: message,
     type:type
      })
      setTimeout(()=>
      {
       setAlert(null);
      },1500)
 }
 const toggleMode =()=>
 {
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#042a62'
    showAlert("Dark mode has been enabled", "success");
    document.title="TextUtils-DarkMode"
    setText("Enable LightMode")
  }
 
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success");
    document.title="TextUtils-DarkMode"
    setText("Enable DarkMode")

    // setInterval(()=>{
    //   document.title="TextUtils is Amazing Mode";
    // },2000)
    // setInterval(()=>{
    //   document.title="Install TextUtils Now";
    // },1500)

  }
 }
 return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
 {/* <Routes>
    <Route path="/about" element={<About/>}>
    </Route> */}
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode}/>
   
    {/* </Routes> */}
</div>
{/* </Router> */}
    </>
    );}
    export default App;
