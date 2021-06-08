import react, { Component } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "./../services/dataService";

class Catalog extends Component {
  state = {
    catalog: [],
    categories: [],
    selectedCategory:"All",
  };
  render() {

      let prodsToDisplay=this.state.catalog;

        if(this.state.selectedCategory!="All")
        {
          prodsToDisplay =  prodsToDisplay.filter((prod) => prod.category === this.state.selectedCategory  ); 
        }

    return (
      <div className="catalog-page">
        <div className="categories">
          {this.state.categories.map((item) => (
            <button onClick={()=>this.selectCategory(item)} className="btn btn-info ml-1 mt-3 btn-category" key={item}>
              {item}{" "}
            </button>
          ))}
        </div>

        <div className="products mt-3">
          { prodsToDisplay.map((item) => (
            <Product key={item.id} data={item}></Product>
          ))}
        </div>
      </div>
    );
  }

  selectCategory =(cat) =>{
      console.log("user category",cat);
      this.setState({selectedCategory:cat});
  }

  componentDidMount() {
    console.log("did mount");
    let service = new DataService();
    let catalog = service.getCatalog();

    var categorys = [];
    categorys.push("All");
    catalog.map((item) => {
      if (!categorys.includes(item.category)) categorys.push(item.category);
    });

    /*   for(let i=0; i<catalog.length;i++)
            {
                var category=catalog[i].category;
                if(!categorys.includes(category))
                {
                    categorys.push(category);
                }
                
            }
            console.log("Categorys "+categorys);
*/

    this.setState({ catalog: catalog, categories: categorys });
  }

  componentWillMount() {
    console.log("will mount");
  }
}

export default Catalog;
