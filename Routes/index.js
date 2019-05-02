import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard'


const Route = createStackNavigator(
    {
       
        Login:Login,
      Dashboard:Dashboard,

    },
    {
        initialRouteName:'Login'
    },
    
);

const RouterConfig = createAppContainer(Route);

export default RouterConfig;