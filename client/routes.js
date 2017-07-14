import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Greeting from './components/Greetings';
import SignupPage from './components/SignupPage';

export default (
    <Switch>
        <Route exact path='/' component={Greeting}/>
        <Route path='/signup' component={SignupPage}/>
    </Switch>
)