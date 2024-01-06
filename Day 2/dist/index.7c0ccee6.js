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
 */ // const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is a h1 tag")
//   )
// );
/**
 * Creating nested elements with same child
 * Something like:
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is a h1 tag</h1>
 *          <h2>This is a h2 tag</h2>
 *      </div>
 * </div>
 */ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "This is a h1 tag"),
    React.createElement("h2", {}, "This is a h2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
