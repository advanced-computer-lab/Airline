
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import View from "./pages/navbar/viewFlights"
import Register from "./pages/navbar/Register"
import Home from "./pages/navbar/Home"
import Login from "./pages/navbar/Login"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/'  element={Home} />
        <Route path='/viewFlights' element={View} />
        <Route path='/login' element={Login} />
        <Route path='/register' element={Register} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
