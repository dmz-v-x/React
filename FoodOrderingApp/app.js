import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

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

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <img
        className="img-logo"
        alt="food-image"
        src="https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115309.jpg?size=626&ext=jpg&uid=R133719140&ga=GA1.1.1888230477.1704878296&semt=ais"
      />
      <h3>Handi Punjab Ki</h3>
      <h4>North Indian, Asian</h4>
      <h5>4.5 stars</h5>
      <h5>38 minutes</h5>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    {<Header />}
    {<Body />}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout />);
