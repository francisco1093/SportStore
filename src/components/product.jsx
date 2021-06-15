import React, { Component } from 'react';
import "./product.css";
//import QuantiryPicker from './quantiryPicker';
import QuantiryPicker from './quantiryPicker';
import { addToCart } from './../store/actions';
import { connect } from 'react-redux';

class Product extends Component {
    state = { 
        quantiry:1,
     };
    render() { 
        return ( 
            <div className="product">


                <h5 className="product-title">{this.props.data.title}</h5>
                <img className="img-product" src={"./imgs/products/"+this.props.data.image} alt="Product"></img>
                
                <div>
                    <label className="label-Price">Price: ${this.props.data.price.toFixed(2)}</label>
                    <label className="label-Total">Total: ${this.getTotal()}</label>
                </div>
                <QuantiryPicker onQuantiryChange={this.handleQuantiryChange}></QuantiryPicker>
                <button onClick={this.handleAddToCart} className="btn btn-sm btn-info btn-Add">
                 <i className="fa fa-cart-plus" aria-hidden="true"></i>
                &nbsp;Add
                </button>
            </div>
            );
    }


    

    getTotal = () =>{
        return (this.props.data.price*this.state.quantiry).toFixed(2);
    }
    
    handleQuantiryChange = (qnty) =>{
        console.log("EVENT qnty change ",qnty);

        this.setState({quantiry:qnty});
    }

    handleAddToCart = () =>{
        console.log("Add");

        let prod = {...this.props.data, quantiry:this.state.quantiry};
        //let prod = {...this.props.data};
        //prod.quantiry=this.state.quantiry;

        this.props.addToCart(prod);

    }
}

/*** Connect the component to the store (to read/dispatch actions)
 * * receives 2 params:
 * * 1 - A function that maps what you want to read
 * * 2 - An object with the actions you want to dispatch
 * */
 
export default connect(null,{addToCart})(Product);