 import './App.css';
  import "bootstrap/dist/css/bootstrap.min.css";
  import Navbar from "./Components/Navbar";
  import Header from "./Components/Header";
import Particles from "react-particles-js";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
  
  

  function App() {
    return (
      <div className="App">
        <>
      <Particles
      className="particles-canvas"
      params={{
        "particles": {
            "number": {
                "value": 280,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width":6,
                "color": "#f9ab00"
              }
            
            }
            
          }
    }} />
        <Navbar/>
        <Header/>
          <AboutMe />
          <Experience/>
         
        </>
      </div>
    );
  }

  export default App;
