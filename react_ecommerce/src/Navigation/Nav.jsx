import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";
import { GiSonicShoes } from "react-icons/gi";

const Nav = ({ handleInputChange, query, inputVisible, setInputVisible, shown, setShown}) => {
  return (
    <>
      <nav>
      
      <Link to='/' className="nav_title" >SARVS</Link>
      
      
        
     
      <div className="nav-container">
        
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
        <div className="profile-container">
          <Link to="/product"><GiSonicShoes className="nav-icons" /></Link>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
         <Link to='/cart'><AiOutlineShoppingCart className="nav-icons" /></Link> 
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      </nav>
      <Outlet/>
      </>
  );
};

export default Nav;
