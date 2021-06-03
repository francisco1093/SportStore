import React, { Component } from 'react';
import "./product.css";
//import QuantiryPicker from './quantiryPicker';
import QuantiryPicker from './quantiryPicker';

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">


                <h5 className="product-title">{this.props.data.title}</h5>
                <img className="img-product" src={"./imgs/products/"+this.props.data.image} alt="Product"></img>
                
                <div>
                    <label className="label-Price">Price: ${(Math.round(this.props.data.price * 100) / 100).toFixed(2)}</label>
                    <label className="label-Total">Total: ${(Math.round(this.props.data.price * 100) / 100).toFixed(2)}</label>
                </div>
                <QuantiryPicker></QuantiryPicker>
                <button className="btn btn-sm btn-info btn-Add">Add</button>
            </div>
            );
    }
}
 
export default Product;