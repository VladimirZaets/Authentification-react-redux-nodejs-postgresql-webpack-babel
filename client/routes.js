import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Greeting from './components/Greetings';
import SignupPage from './components/SignupPage';
import SigninPage from './components/SigninPage';
import NewEventPage from './components/NewEventPage';
import requireAuth from './utils/requireAuth';

export default (
    <Switch>
        <Route exact path='/' component={Greeting}/>
        <Route path='/signup' component={SignupPage}/>
        <Route path='/signin' component={SigninPage}/>
        <Route path='/new-event' component={requireAuth(NewEventPage)}/>
    </Switch>
)