import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import SubHeader from './components/SubHeader';
import About from './components/About';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
        <SubHeader/>
      <div style={{display:'flex', flexDirection:"row"}}>

        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutGaramMasala' element={<About/>}/>

        
        </Routes>
      </div>
    </div>
  );
}

export default App;
