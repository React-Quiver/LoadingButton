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

export default class LoadingButton extends Component {
  static propTypes = {
    status: PropTypes.string,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  getButton() {
    const { status } = this.props;
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

  _getDefaultButton() {
    return (
      <FlatButton
        style= {styles.button}
        backgroundColor={Colors.blue500}
        hoverColor={Colors.blue700}
        {...this.props}
      />
    );
  }

  _getLoadingButton() {
    return (
      <FlatButton
        style= {styles.loading}
        backgroundColor={Colors.blueGrey500}
        hoverColor={Colors.blueGrey700}
        icon = {
            <CircularProgress
              size={0.3}
              style={{
                width: 30,
                height: 30,
                marginTop: -20,
                marginLeft: -10,
                paddingRight: 10,
              }}
            />
        }
        {...this.props}
      />
    );
  }

  _getSuccessButton() {
    return (
      <FlatButton
        style= {styles.button}
        backgroundColor={Colors.green500}
        hoverColor={Colors.green600}
        icon = {<Check />}
        {...this.props}
      />
    );
  }

  _getErrorButton() {
    return (
      <FlatButton
        style= {styles.button}
        backgroundColor={Colors.red500}
        hoverColor={Colors.red600}
        icon = {<Error />}
        {...this.props}
      />
    );
  }

  render() {
    return <MuiThemeProvider muiTheme={this.context.muiTheme}>{this.getButton()}</MuiThemeProvider>;
  }
}
