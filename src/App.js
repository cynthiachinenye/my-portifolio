import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="container-fluid">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
