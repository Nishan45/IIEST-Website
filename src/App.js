import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Ecosystem from './components/Ecosystem';
import Incubation from './components/Incubation';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router >
      <NavBar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Ecosystem' element={<Ecosystem/>}/>
        <Route path='/Incubation' element={<Incubation/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>

      </Routes>
    </Router>

  );
}

export default App;
