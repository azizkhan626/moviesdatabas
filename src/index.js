import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import App from './App';
import { AppProvirder } from './contaxt';
import 'bootstrap/dist/css/bootstrap.min.css';
import   './Css.css';





ReactDOM.render(
<StrictMode>
<AppProvirder>
 <Router>
<App />
</Router>
</AppProvirder>
</StrictMode>
, document.getElementById('root'));


