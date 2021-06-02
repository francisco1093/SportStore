import react, { Component } from 'react';
import "./catalog.css"
import Product from './product';

class Catalog extends Component {
    state = {  }
    render() { 
        return ( <div className="catalog-page">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>

        </div>
         );
    }
}
 
export default Catalog;