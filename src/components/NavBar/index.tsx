import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import Profile from '../../assets/profile-2.svg?react';
import Heart from '../../assets/heart-2.svg?react';
import Logo from "../Logo";

import "./styles.scss";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__left_side">
        <Link to="/"><Profile /></Link> 
        <Link to="/"><Heart /></Link> 
      </div>
      <div className="navbar__center">
        <SearchBar />
      </div>
      <div className="navbar__right_side">
        <Logo />
      </div>
    </div>
  );
}

export default NavBar;
