import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Product";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import Home from "./components/Home/Home";
import { Route,Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Nav from "./Navigation/Nav";

function App() {
  const [cart,setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [show, setShow] = useState(true); // Fixed declaration syntax
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice },index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          cart={cart} setCart={ setCart}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  const Filter = () => { 
    return (
      <>
         <Sidebar handleChange={handleChange} />
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
            <Products result={result} />
      
      </>
    )
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home  />}></Route>
         
          <Route path="cart" element={<Cart />}></Route>
          
        </Route>
        <Route path="/product" element={<Filter />}></Route>
        
      </Routes>
     
    </>
  );
}
export default App; 


