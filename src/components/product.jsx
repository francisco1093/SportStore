import React, { Component } from 'react';
import "./product.css";
import QuantiryPicker from './quantiryPicker';

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">


                <h5 className="product-title">Jersey 2021</h5>
                <img className="img-product" src="./imgs/products/chivas_1.png" alt="Product"></img>
                
                <div>
                    <label className="label-Price">Price: $200</label>
                    <label className="label-Total">Total: $200</label>
                </div>
                <QuantiryPicker></QuantiryPicker>
                <button className="btn btn-sm btn-info btn-Add">Add</button>
            </div>
            );
    }
}
 
export default Product;