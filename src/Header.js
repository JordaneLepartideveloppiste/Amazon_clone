import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    const scrollTo = () => {
        window.scrollTo(0, 0);
    }

  return (
    <div className="header">
      <NavLink onClick={scrollTo} tag={Link} to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo_amazon"
        />
      </NavLink>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <NavLink tag={Link} to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">
              Bonjour {user ? user?.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Se déconnecter" : "Compte et listes"}
            </span>
          </div>
        </NavLink>
        <div className="header_option">
          <span className="header_optionLineOne">Retours</span>
          <span className="header_optionLineTwo">et Commandes</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Votre</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <NavLink onClick={scrollTo} tag={Link} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
