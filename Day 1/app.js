// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );

/**
 * Creating a nested react element
 *
 * Something like:
 *
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>This is a h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is a h1 tag")
  )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);
