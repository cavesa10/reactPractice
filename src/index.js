import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import App from './componentes/index'
// import StaticSite from './componentes/Router'
import AuthSite from './componentes/Auth'
import './index.css'

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );
ReactDOM.render(
  <AuthSite />, 
  document.getElementById('root')
);
serviceWorker.unregister();
