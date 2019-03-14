import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Appcontext}  from './AppContext'
import {ClickContext} from './ClickContext'
ReactDOM.render(
    <Appcontext>
    <ClickContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ClickContext>
    </Appcontext>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
