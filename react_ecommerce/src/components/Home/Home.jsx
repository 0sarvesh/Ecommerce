import { useState, useEffect } from "react";
import Nav from "../../Navigation/Nav";
import "./Home.css";
import bar from "../../assets/bar-removebg-preview.png";
import rec from "../../assets/rrr-removebg-preview.png";
import data from "../../db/data";
import Corousel from "./Corousel";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
function Home({ cart,setCart}) {
  // const [inputVisible, setInputVisible] = useState(true); // State to manage the visibility of the input field
  // const [shown, setShown] = useState(false); // State to manage the visibility of the input field

 

 

  return (
    <div>
      {/* Render the Nav component */}
      {/* <Nav inputVisible={inputVisible} setInputVisible={setInputVisible} shown={shown} setShown={setShown} /> */}
      <hr />
      <div className="home">
        <div className="title">
          <h3 className="t">SHOE</h3>
          <h3 className="t">TREASURE</h3>
          <h3 className="t">AWAITS YOU</h3>{" "}
        </div>
        <div className="cont2">
          <div className="recycle">
            Sustainable
            <img src={rec} alt="" className="rec" />
          </div>
          <div>
            <img src={bar} alt="" className="bar" />
          </div>
        </div>
      </div>
      <hr />

      <Corousel />

      <div className="redirect">
        {/* Button to handle click event */}
        <Link  to="/product" className="shop">Shop Now</Link>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
         <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      {/* Conditional rendering based on the visibility of the input field */}
      {/* {inputVisible && <input type="text" placeholder="Input field" />} */}
      <Footer/>
    </div>
  );
}

export default Home;
