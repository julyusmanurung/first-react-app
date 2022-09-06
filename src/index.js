import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Router, Switch, Route } from 'react-router-dom';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>}/>
            <Route path='/jokes' render= {() => <Header><Jokes/></Header>}/>
        </Switch>
    </Router>, 
    document.getElementById('root')
);