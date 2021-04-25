import React, { Component } from 'react';
import { Button, StyleSheet,  Text, View } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home Hiepns',
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text>Home screen</Text>
                <Button 
                    title="Go to menu" 
                    onPress={() => { this.props.navigation.navigate('Menu', {
                            itemId : 97,
                            otherParams: "hiepns"
                        });
                    }}
                />
            </View>
        );
    }
}