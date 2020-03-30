import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}