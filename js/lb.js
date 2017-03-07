"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//works.  Things to fix: the states 'alltime and allTime' are too similar, i need to rename one.  The css needs lots of love.  The proper version of this app was built by me using the 'create react app starter'  But i had some problems porting it over here on codepen so i decided to rewrite the app from scratch  Good practice

var Leaders = function (_React$Component) {
  _inherits(Leaders, _React$Component);

  function Leaders(props) {
    _classCallCheck(this, Leaders);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { allTime: false };
    _this._now = _this._now.bind(_this);
    _this._allTimeBest = _this._allTimeBest.bind(_this);
    return _this;
  }

  //two calls to the apis with both adding their data to state

  Leaders.prototype.componentWillMount = function componentWillMount() {
    var that = this;

    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function (data) {
      that.setState({
        recent: data
      });
    });
    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", function (data) {
      that.setState({
        alltime: data
      });
    });
  };
  //use state to regulate which list is visible.

  Leaders.prototype._allTimeBest = function _allTimeBest() {

    this.setState({
      allTime: true
    });
  };

  Leaders.prototype._now = function _now() {

    this.setState({
      allTime: false
    });
  };

  Leaders.prototype.render = function render() {

    var username = _.map(this.state.allTime ? this.state.alltime : this.state.recent, function (people, index) {
      var indi = index + 1;
      return React.createElement(
        "tr",
        { className: "camper" },
        React.createElement(
          "td",
          { className: "spaced2" },
          indi
        ),
        React.createElement(
          "td",
          null,
          React.createElement("img", { className: "tiny", src: people.img, alt: "pic" })
        ),
        React.createElement(
          "td",
          { className: "spaced2" },
          React.createElement(
            "a",
            { target: "_blank", href: "https://www.freecodecamp.com/" + people.username },
            people.username
          )
        ),
        React.createElement(
          "td",
          null,
          " ",
          people.recent
        ),
        React.createElement(
          "td",
          { className: "spaced2" },
          people.alltime
        ),
        " "
      );
    });
    return React.createElement(
      "div",
      { "class": "table-responsive" },
      React.createElement(
        "h2",
        null,
        "Camper Leaderboard"
      ),
      React.createElement(
        "table",
        { "class": "table" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "#"
            ),
            React.createElement("th", null),
            React.createElement(
              "th",
              null,
              "camper"
            ),
            React.createElement(
              "th",
              { className: "gHov spaced", onClick: this._now },
              "recent  "
            ),
            React.createElement(
              "th",
              { className: "gHov spaced2", onClick: this._allTimeBest },
              "  alltime"
            )
          )
        ),
        React.createElement(
          "tbody",
          { className: "centered" },
          username
        )
      ),
      React.createElement(
        "p",
        { className: "camper", id: "credit" },
        "This App was built in React by ",
        React.createElement(
          "a",
          { target: "_blank", href: "https://github.com/TomLandis" },
          "Tom Landis"
        )
      )
    );
  };

  return Leaders;
}(React.Component);

ReactDOM.render(React.createElement(Leaders, null), document.getElementById('Leaders'));