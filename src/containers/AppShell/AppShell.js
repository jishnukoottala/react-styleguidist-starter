import { MuiThemeProvider, withTheme } from '@material-ui/core/es/styles'
import React, { Component } from 'react'


/**
 * General App shell description description.
 */
export default class AppShell extends Component {

constructor(props){
    super(props);

}

  render() {

    const { theme,children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    )
  }
}

