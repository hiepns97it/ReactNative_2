import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './Router';

const AppContainer = createAppContainer(TabNavigator);

class AppScreen extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return <AppContainer />;
    }
}

export default AppScreen;