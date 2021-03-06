"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("@react-pdf/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this component important to generation PDF
var styles = _renderer.StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    "marginLeft": "25px",
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  bulletPoint: {
    width: 10,
    fontSize: 14
  },
  itemContent: {
    flex: 1,
    fontSize: 14
  },
  knob: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8
  }
});

var List2 = function List2(_ref) {
  var children = _ref.children;
  return children;
};

var Item = function Item(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(_renderer.View, null, _react.default.createElement(_renderer.View, {
    style: [styles.knob]
  }), _react.default.createElement(_renderer.View, {
    style: styles.item
  }, _react.default.createElement(_renderer.Text, {
    style: styles.itemContent
  }, children)));
};

exports.Item = Item;
List2.propTypes = {
  children: _propTypes.default.node
};
Item.propTypes = {
  children: _propTypes.default.node
};
var _default = List2;
exports.default = _default;