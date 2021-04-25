import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './srceen/Home';
import MenuScreen from './srceen/Menu';
import DetailScreen from './srceen/Detail';
import UserScreen from './srceen/User';

// const HomeStack = createStackNavigator({
//     ManHinh_Home: {
//         screen: Home,
//     },
//     ManHinh_Menu: {
//         screen: Menu
//     }
// });

const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      Menu: MenuScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
export default HomeStack;
