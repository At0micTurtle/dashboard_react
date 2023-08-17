import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
