import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Importar las vistas
import {Home, Auth} from './app/views';


const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
    </Switch>
)
export default Routes