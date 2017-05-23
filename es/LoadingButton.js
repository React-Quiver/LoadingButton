var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes, Component } from 'react';

// material-ui
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import * as Colors from 'material-ui/styles/colors';
import Check from 'material-ui/svg-icons/action/check-circle';
import Error from 'material-ui/svg-icons/alert/error';

// styles
import styles from './styles';

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
      return React.createElement(FlatButton, _extends({
        style: styles.button,
        backgroundColor: Colors.blue500,
        hoverColor: Colors.blue700
      }, this.props));
    }
  }, {
    key: '_getLoadingButton',
    value: function _getLoadingButton() {
      return React.createElement(FlatButton, _extends({
        style: styles.loading,
        backgroundColor: Colors.blueGrey500,
        hoverColor: Colors.blueGrey700,
        icon: React.createElement(CircularProgress, {
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
      return React.createElement(FlatButton, _extends({
        style: styles.button,
        backgroundColor: Colors.green500,
        hoverColor: Colors.green600,
        icon: React.createElement(Check, null)
      }, this.props));
    }
  }, {
    key: '_getErrorButton',
    value: function _getErrorButton() {
      return React.createElement(FlatButton, _extends({
        style: styles.button,
        backgroundColor: Colors.red500,
        hoverColor: Colors.red600,
        icon: React.createElement(Error, null)
      }, this.props));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        MuiThemeProvider,
        { muiTheme: this.context.muiTheme },
        this.getButton()
      );
    }
  }]);

  return LoadingButton;
}(Component);

LoadingButton.propTypes = {
  status: PropTypes.string,
  style: PropTypes.object
};
LoadingButton.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};
export default LoadingButton;