
import axios from 'axios';

var data = [
  {
    id: 1,
    code: "ban1",
    image: "chivas_1.png",
    title: "Jersey Chivas Puma 2021",
    price: 999.90,
    minimum: 1,
    category:"Jersey",
  },
  {
    id: 2,
    code: "ban2",
    image: "brasil_1.png",
    title: "Jersey Brasil Retro Nike 2021",
    price: 899.90,
    minimum: 1,
    category:"Jersey",
  },
  {
    id: 3,
    code: "ban1",
    image: "milan_1.png",
    title: "Jersey Milan Ultimate Puma 2021",
    price: 999.90,
    minimum: 1,
    category:"Jersey",
  },
  {
    id: 4,
    code: "ban2",
    image: "portugal_1.png",
    title: "Jersey Portugal Nike 2021",
    price: 899.90,
    minimum: 1,
    category:"Jersey",
  },
  {
    id: 5,
    code: "ban1",
    image: "tennis_1.png",
    title: "Tennis soccer Adidas F50",
    price: 999.90,
    minimum: 1,
    category:"Tennis",
  },
  {
    id: 6,
    code: "ban1",
    image: "tennis_2.png",
    title: "Tennis Soccer Adidas FX50",
    price: 759.90,
    minimum: 1,
    category:"Tennis",
  },
  {
    id: 7,
    code: "ban2",
    image: "balon_1.png",
    title: "Balon Voit Special Edition 2021",
    price: 799.90,
    minimum: 1,
    category:"Balon",
  },
  {
    id: 8,
    code: "ban2",
    image: "balon_2.png",
    title: "Balon Nike American Cup 2020",
    price: 599.90,
    minimum: 1,
    category:"Balon",
  },
];

/*** Server endpoint and functionality** 
 * 
 * GET
 * /api/products => get everyone's products
 * /api/products/<yourName> -> get yours products
 * 
 *  POST
 *  /api/products => save products onto the DB
 * 
 * DELETE
 * /api/products/clear/<yourName> => delete your prods from DB*
 */

class DataService{
  serverUrl="https://fsdiapi.azurewebsites.net";
  
  async getCatalog(){
     
    //connect to a server

    //axios.patch

   let response= await axios.get(this.serverUrl+"/api/products/Francisco");

    return response.data;

    //todo:logic to connect to server and retriece the catalog
  }


  async seedData(){
    //send data from the array on the top to the server
   
    for(let i=0; i< data.length; i++)
    {
      let prod=data[i];
      prod.name="Francisco";
      await axios.post(this.serverUrl+"/api/products",prod);
      console.log("Data seeded");
    }
  }

  async clearData(){
    
    await axios.delete(this.serverUrl+"/api/products/clear/Francisco");

  }

  getProductPrice(id){
    return 99.99;
  }



}

export default DataService;
