
import React,{useState} from 'react'; 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState("light");

   const toggle=()=>{
     if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ="red"
     }
     else{
      setMode("light")
      document.body.style.backgroundColor ="white"
     } 
   }
  return (  
    <> 
      {/* <Router> */}
     <Navbar name="React" mode={mode} toggle={toggle} />
     <div className="container my-3">
     <TextForm name="Enter yourself" mode={mode}/>
      {/* <Routes>
          <Route  path="/about" element={<About mode={mode}/>}>
          </Route>
           <Route   path="/"  element={<TextForm name="Enter yourself" mode={mode}/>}> 
           </Route> 
           </Routes>   */}
     </div> 
        {/* </Router>  */}
    </> 
    ); 
} 

export default App;  