import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Catalog from "./components/catalog"; 

function App() {
  return (
    <div className="App">
      
      <div>
        <img className="logo" src="./imgs/products/logo-4.png"></img>
        <h1 className="App-title">Sport Fran</h1>
        <img className="logo" src="./imgs/products/logo-4.png"></img>
      </div>
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  ); 

  
}

export default App;

//funtion based comp.
