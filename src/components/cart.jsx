import { Component } from "react";
import { connect } from "react-redux";
import ProductCart from "./productCart";
import { clearCart } from "./../store/actions";
import "./cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart-page">
        <div className="cart-order">Order</div>

        <div className="products">
          {this.props.cart.map((prod) => (
            // <h6 key={prod.id}>{prod.title}</h6>
            <ProductCart key={prod.id} product={prod}></ProductCart>
          ))}
        </div>
        <div className="total-cart">
          <button
            onClick={this.handleClearEvent}
            className="btn btn-sm btn-warning"
          >
            Clear
          </button>
          <div className="total-price">Your total is:${this.getTotal()} </div>
          <button className="btn btn-primary">Pay Now</button>
        </div>
      </div>
    );
  }

  /*** To clear the cart:
   * * create an action
   * * update the reducer, to delete everything when the action is dispatched
   * * connect the action to cart component (don't forget the import for the action)
   * * handle the click event on the button* dispatch the actiimport { clearCart } from './../store/actions';
   * */

  handleClearEvent = () => {
    console.log("Clear Cart");
    this.props.clearCart();
  };

  getTotal = () => {
    let total = 0;
    this.props.cart.map((prod) => {
      total += prod.price * prod.quantiry;
    });
    return total;
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

//read/dispatch
export default connect(mapStateToProps, { clearCart })(Cart);
