function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // A feature I've been wanting to test out since the first time I looked through Anime.js docs

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      columns: 0,
      rows: 0,
      total: 1 });_defineProperty(this, "handleStagger",


    i => {
      const { columns, rows } = this.state;
      const el = i.target.id;
      anime({
        targets: ".grid-item",
        backgroundColor: randomColor(),
        delay: anime.stagger(50, { grid: [columns, rows], from: el }) });

    });_defineProperty(this, "getGridSize",

    () => {
      const columns = Math.floor(document.body.clientWidth / 50);
      const rows = Math.floor(document.body.clientHeight / 50);

      this.setState({ columns, rows, total: rows * columns });
      anime({
        targets: ".grid-item",
        backgroundColor: "#fff",
        duration: 0,
        easing: "linear" });

    });}

  componentDidMount() {
    this.getGridSize();
    window.addEventListener("resize", this.getGridSize);
  }
  render() {
    const { total, columns, rows } = this.state;
    console.log([columns, rows], total);
    return /*#__PURE__*/(
      React.createElement("div", { id: "grid" },
      [...Array(total)].map((x, i) => /*#__PURE__*/
      React.createElement("div", {
        className: "grid-item",
        id: i,
        onClick: i => this.handleStagger(i) }))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));