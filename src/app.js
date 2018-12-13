import React, { Component } from 'react'
import {render} from 'react-dom';
import WebFont from 'webfontloader';


import './styles/main.scss';


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
        

<AppRouter/>

      </div>
    )
  }
}


render(<App />, document.getElementById('app'));