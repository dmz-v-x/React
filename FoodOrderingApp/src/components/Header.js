import logo from "../../logo.jpg";

const Header = () => (
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
      </ul>
    </div>
  </div>
);

export default Header;
