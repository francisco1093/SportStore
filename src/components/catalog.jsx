import react, { Component } from 'react';
import "./catalog.css"
import Product from './product';
import DataService from './../services/dataService';

class Catalog extends Component {
    state = {  
        catalog:[]
    }
    render() { 
        return ( <div className="catalog-page">
           
           <div class="catalog-len"> ONLY {this.state.catalog.length} products in the catalog
           </div>
            {
                this.state.catalog.map(
                    item => <Product key={item.id} data={item}></Product>
                )
            }
        
        </div>
         );

        
    }
    componentDidMount(){
            console.log("did mount");
            var service = new DataService();
            var catalog = service.getCatalog();
            this.setState({catalog:catalog});
    }
    componentWillMount(){
        console.log("will mount")
    }
}
 
export default Catalog;