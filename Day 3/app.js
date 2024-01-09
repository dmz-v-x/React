import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading);

// Using JSX

const jsxHeading = (
  <h1 id="heading" tabIndex="1">
    Hello World!
  </h1>
);
console.log(jsxHeading);

const HeadingComponent = () => {
  return <h1 className="heading">This is a heading Component!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
