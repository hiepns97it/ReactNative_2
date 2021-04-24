import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './srceen/Home';
import Menu from './srceen/Menu';
import Detail from './srceen/Detail';
import User from './srceen/User';

const HomeStack = createStackNavigator({
    ManHinh_Home: {
        screen: Home,
    },
    ManHinh_Menu: {
        screen: Menu
    }
});
export default HomeStack;
