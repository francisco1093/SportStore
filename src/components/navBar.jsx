import React, { Component } from "react";
import "./navBar.css";
import {Link} from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navBar-page ">
        
          <Link className="nav-item-color navbar-brand" to="/#">
            SportFran
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
            </ul>
           
            <Link className="btn btn-outline-primary" to="/cart">
              <i className="fa fa-cart-plus mr-2"></i>
              View Cart
              <span className="badge badge-secondary">{this.props.cartCount}</span>  
            </Link>
  


          </div>
      
      </nav>
    );
  }
}

//retunr an objerct mapping the state to props
const mapStateToProps = (state)=>
{
  return{
    cartCount:state.length// <- will put the array in this.props.cartCount
  }
}

export default connect(mapStateToProps,null)(NavBar);
