
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// container is class of bootstrap

function App() {
  const [Mode,setMode]= useState("dark");

  let toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.background="#041b45";
    }else{
      setMode("light");
      document.body.style.background="white";
    }
  }
  return (
    <>
      <Navbar title="My Site" mode={Mode} toggleMode={toggleMode}/>
      <About/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={Mode} />
      </div>

    </>
  );
}

export default App;
