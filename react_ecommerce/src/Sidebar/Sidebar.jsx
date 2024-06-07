import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { Routes, Route,Link } from "react-router-dom";
import Home from "../components/Home/Home";

const Sidebar = ({ handleChange }) => {
    const handleClick = () => {
    // Programmatically navigate to the home page
    window.location.href = "/";
  };
  return (
    <>
      <section className="sidebar">
         <div className="logo-container">
         
              <Link to="/" onClick={handleClick} className="logo"></Link>
            
        </div> 
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
