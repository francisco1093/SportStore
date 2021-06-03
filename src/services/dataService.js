var data = [
  {
    id: 1,
    code: "ban1",
    image: "chivas_1.png",
    title: "Jersey Chivas Puma 2021",
    price: 999.90,
    minimum: 1,
  },
  {
    id: 2,
    code: "ban2",
    image: "brasil_1.png",
    title: "Jersey Brasil Retro Nike 2021",
    price: 899.90,
    minimum: 1,
  },
  {
    id: 3,
    code: "ban1",
    image: "milan_1.png",
    title: "Jersey Milan Ultimate Puma 2021",
    price: 999.90,
    minimum: 1,
  },
  {
    id: 4,
    code: "ban2",
    image: "portugal_1.png",
    title: "Jersey Portugal Nike 2021",
    price: 899.90,
    minimum: 1,
  },
  {
    id: 5,
    code: "ban1",
    image: "tennis_1.png",
    title: "Tennis soccer Adidas F50",
    price: 999.90,
    minimum: 1,
  },
  {
    id: 6,
    code: "ban1",
    image: "tennis_2.png",
    title: "Tennis Soccer Adidas FX50",
    price: 759.90,
    minimum: 1,
  },
  {
    id: 7,
    code: "ban2",
    image: "balon_1.png",
    title: "Balon Voit Special Edition 2021",
    price: 799.90,
    minimum: 1,
  },
  {
    id: 8,
    code: "ban2",
    image: "balon_2.png",
    title: "Balon Nike American Cup 2020",
    price: 599.90,
    minimum: 1,
  },
];

class DataService{

  getCatalog(){
    //todo:logic to connect to server and retriece the catalog
    return data;
  }

  getProductPrice(id){
    return 99.99;
  }

}

export default DataService;
