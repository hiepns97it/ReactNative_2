import React, { Component } from 'react';
import { Button, StyleSheet,  Text, View } from 'react-native';

export default class Menu extends Component {
    static navigationOptions = {
        title: 'Menu Hiepns',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text>Menu screen</Text>
                <Text>
                    itemId: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}
                </Text>
                <Text>
                    otherParams: {JSON.stringify(this.props.navigation.getParam('otherParams', 'NO-ID'))}
                </Text>

                <Button
                    title="Go to detail .. again!"
                    onPress={() => {this.props.navigation.push('Menu', {
                        itemId: Math.floor(Math.random() * 100),
                    });
                    }}
                />
                <Button
                    title="Go to Home!"
                    onPress={() => this.props.navigation.push('Home')}
                />
                <Button
                    title="Go Back!"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}