import logo from "../../logo.jpg";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
