import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import Tracking from './Tracking';
import map from './map';

const Main = () => (
    
    <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/Tracking" component={Tracking}/>
        <Route path="/map" component={map}/>
    </Switch>
    
)

export default Main;