import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container} from "react-bootstrap"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="container-fluid ">
    <Navbar/>
    <Container>
    <Home/>
    
    </Container>
   
    </div>
  );
}

export default App;
