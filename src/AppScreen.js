import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeStack from './Router';

const AppContainer = createAppContainer(HomeStack);

class AppScreen extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return <AppContainer />;
    }
}

export default AppScreen;