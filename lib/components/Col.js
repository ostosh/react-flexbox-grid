'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModificatorType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col(props) {
    _classCallCheck(this, Col);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._classMap = {
      xs: 'col-xs',
      sm: 'col-sm',
      md: 'col-md',
      lg: 'col-lg',
      xsOffset: 'col-xs-offset',
      smOffset: 'col-sm-offset',
      mdOffset: 'col-md-offset',
      lgOffset: 'col-lg-offset'
    };
    return _this;
  }

  Col.prototype.render = function render() {
    var classes = [];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.reverse) {
      classes.push(_flexboxgrid2.default.reverse);
    }

    for (var key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        var colBaseClass = this._classMap[key];
        colBaseClass = Number.isInteger(this.props[key]) ? colBaseClass + '-' + this.props[key] : colBaseClass;
        classes.push(_flexboxgrid2.default[colBaseClass]);
      }
    }

    return _react2.default.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: classes.join(' ')
    }), this.props.children);
  };

  return Col;
}(_react.Component);

exports.default = Col;


Col.propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  reverse: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};