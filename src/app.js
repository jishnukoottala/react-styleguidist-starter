import React, { Component } from 'react'
import {render} from 'react-dom';
import WebFont from 'webfontloader';


import './styles/main.scss';
import AppShell from 'containers/AppShell/AppShell';
import theme from 'config/theme'
import AppRouter from 'routes/AppRouter'

WebFont.load({
    google: {
      families: ['Noto Sans SC:300,400,500,600,700', 'sans-serif']
    }
  });

export default class App extends Component {
  render() {
    return (
      <div>
        
<AppShell theme={theme}>
<AppRouter/>
</AppShell>
      </div>
    )
  }
}


render(<App />, document.getElementById('app'));