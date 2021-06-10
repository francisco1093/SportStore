import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Catalog from "./components/catalog"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar></NavBar>
      <div>
        <img className="logo" src="./imgs/products/logo-4.png"></img>
        <h1 className="App-title">Sport Fran</h1>
        <img className="logo" src="./imgs/products/logo-4.png"></img>
      </div>
      
     
     <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/about" exact component={About}></Route>
     </Switch>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  ); 

  
}

export default App;

//funtion based comp.
