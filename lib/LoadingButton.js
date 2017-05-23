'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _colors = require('material-ui/styles/colors');

var Colors = _interopRequireWildcard(_colors);

var _checkCircle = require('material-ui/svg-icons/action/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _error = require('material-ui/svg-icons/alert/error');

var _error2 = _interopRequireDefault(_error);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// material-ui


// styles


var LoadingButton = function (_Component) {
  _inherits(LoadingButton, _Component);

  function LoadingButton() {
    _classCallCheck(this, LoadingButton);

    return _possibleConstructorReturn(this, (LoadingButton.__proto__ || Object.getPrototypeOf(LoadingButton)).apply(this, arguments));
  }

  _createClass(LoadingButton, [{
    key: 'getButton',
    value: function getButton() {
      var status = this.props.status;

      switch (status) {
        case 'success':
          return this._getSuccessButton();
        case 'error':
          return this._getErrorButton();
        case 'loading':
          return this._getLoadingButton();
        default:
          return this._getDefaultButton();
      }
    }
  }, {
    key: '_getDefaultButton',
    value: function _getDefaultButton() {
      return _react2.default.createElement(_FlatButton2.default, _extends({
        style: _styles2.default.button,
        backgroundColor: Colors.blue500,
        hoverColor: Colors.blue700
      }, this.props));
    }
  }, {
    key: '_getLoadingButton',
    value: function _getLoadingButton() {
      return _react2.default.createElement(_FlatButton2.default, _extends({
        style: _styles2.default.loading,
        backgroundColor: Colors.blueGrey500,
        hoverColor: Colors.blueGrey700,
        icon: _react2.default.createElement(_CircularProgress2.default, {
          size: 0.3,
          style: {
            width: 30,
            height: 30,
            marginTop: -20,
            marginLeft: -10,
            paddingRight: 10
          }
        })
      }, this.props));
    }
  }, {
    key: '_getSuccessButton',
    value: function _getSuccessButton() {
      return _react2.default.createElement(_FlatButton2.default, _extends({
        style: _styles2.default.button,
        backgroundColor: Colors.green500,
        hoverColor: Colors.green600,
        icon: _react2.default.createElement(_checkCircle2.default, null)
      }, this.props));
    }
  }, {
    key: '_getErrorButton',
    value: function _getErrorButton() {
      return _react2.default.createElement(_FlatButton2.default, _extends({
        style: _styles2.default.button,
        backgroundColor: Colors.red500,
        hoverColor: Colors.red600,
        icon: _react2.default.createElement(_error2.default, null)
      }, this.props));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: this.context.muiTheme },
        this.getButton()
      );
    }
  }]);

  return LoadingButton;
}(_react.Component);

LoadingButton.propTypes = {
  status: _react.PropTypes.string,
  style: _react.PropTypes.object
};
LoadingButton.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
exports.default = LoadingButton;
module.exports = exports['default'];