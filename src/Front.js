import React from 'react';
import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';
import Sidebar from 'd2-ui/lib/sidebar/Sidebar.component';

import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import actions from '../actions';
import appTheme from './theme';
  
const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);


export default React.createClass({
    propTypes: {
      d2: React.PropTypes.object,
    },

    childContextTypes: {
      d2: React.PropTypes.object,
      muiTheme: React.PropTypes.object
    },

    getChildContext() {
      return {
        d2: this.props.d2,
        muiTheme: appTheme
      };
    },

    getInitialState() {
      return {
        attrStore: {},
        groupStore: {},
        ouRoot:{},
      };
    },
    render() {
      const d2 = this.props.d2;
       return (
          <div className="app-wrapper">
           
            <MuiThemeProvider muiTheme={appTheme}><HeaderBar /></MuiThemeProvider>

          </div>
          
          
      );
    },
});
