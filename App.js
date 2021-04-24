import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import AppScreen from './src/AppScreen';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return(
            <AppScreen/>          
        );
    }
}

AppRegistry.registerComponent('DemoNavigator', () => App);