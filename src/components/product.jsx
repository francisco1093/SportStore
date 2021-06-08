import React, { Component } from 'react';
import "./product.css";
//import QuantiryPicker from './quantiryPicker';
import QuantiryPicker from './quantiryPicker';

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
                <button className="btn btn-sm btn-info btn-Add">Add</button>
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
}
 
export default Product;