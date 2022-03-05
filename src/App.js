// import './App.css';
import { Routes, Route } from "react-router-dom";
import Form from './components/Form.js'
import About from './components/About';
import Header from './components/Header.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from "./components/Login.js";



function App() {
  let style = {
    float: "right",
    color: 'black',
    padding: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    // backgroundColor: 'white',
    marginRight: '15px',
    // borderRadius: '10px'
  }
  return (
    <div className="bg-light mh-100">
      <Header />
      <Navbar style={style} />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<Form />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;