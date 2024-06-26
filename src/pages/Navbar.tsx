import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
    setMenuClass("menu hidden");
    setBurgerClass("burger-bar unclicked");
  };

  return (
    <div className="burger-wrapper" style={{ width: "100%" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="bar-wrapper">
          <Link to={"/"}>
            <div className="loggo"></div>
          </Link>
          <div className="bar">
            <ul>
              <li>
                <Link to={"/"} onClick={closeMenu}>
                  Hem
                </Link>
              </li>
              <li>
                <Link to={"/flip"} onClick={closeMenu}>
                  Flip A Coin
                </Link>
              </li>
              <li>
                <Link to={"/cookie"} onClick={closeMenu}>
                  Cookie Clicker
                </Link>
              </li>
              <li>
                <Link to={"/TicTacToe"} onClick={closeMenu}>
                  TicTacToe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
