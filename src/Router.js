import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './srceen/Home';
import MenuScreen from './srceen/Menu';
import DetailScreen from './srceen/Detail';
import UserScreen from './srceen/User';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Menu: {
        screen: MenuScreen
    }
});
HomeStack.navigationOptions ={
    tabBarLabel:"Home",
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name="home"/>  
        </View>),  
    activeColor: '#615af6',  
    inactiveColor: '#46f6d7',  
    barStyle: { backgroundColor: '#67baf6' },
}

const DetailStack = createStackNavigator({
    Detail: {
        screen: DetailScreen
    }
})
DetailStack.navigationOptions ={
    tabBarLabel:"Detail",
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name="user"/>  
        </View>),  
    activeColor: '#615af6',  
    inactiveColor: '#46f6d7',  
    barStyle: { backgroundColor: '#67baf6' },
}

const UserStack = createStackNavigator({
    User: {
        screen: UserScreen
    }
})
UserStack.navigationOptions ={
    tabBarLabel:"User",
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name="adn"/>  
        </View>),  
    activeColor: '#615af6',  
    inactiveColor: '#46f6d7',  
    barStyle: { backgroundColor: '#67baf6' },
}

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    DetailStack,
    UserStack
}, {
    tabBarOptions: {
        style: {
        }
    }
});

// const HomeStack = createStackNavigator(
//     {
//       Home: HomeScreen,
//       Menu: MenuScreen,
//     },
//     {
//       initialRouteName: 'Home',
//     }
// );
export default TabNavigator;
