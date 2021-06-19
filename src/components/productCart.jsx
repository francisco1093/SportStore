import React, { Component } from "react";
import { connect } from "react-redux";
import "./productCart.css";
import {removeFromCart} from "./../store/actions";
class ProductCart extends Component {
  state = {};
  render() {
    return <div className="cart-product">

        <img className="productcart-img" src={"./imgs/products/"+this.props.product.image} alt="" />
        <div className="cart-product-title">
            {this.props.product.title} 
        </div>
        <label >{this.props.product.price}</label>
        <label >{this.props.product.quantiry}</label>
        <label >{this.getTotal()}</label>
        <button onClick={this.handleRemoveEvent} className="btn btn-sm btn-danger">Remove</button>
        
        </div>;
  }

  handleRemoveEvent = () =>{
    console.log("Removing product"+this.props.product.id);
    this.props.removeFromCart(this.props.product.id);
  };
  getTotal=()=>{
      var total = this.props.product.quantiry * this.props.product.price;
  return total.toFixed(2);
    };
}

export default connect(null,{removeFromCart})(ProductCart);
