import React, { Component } from 'react';
import { StyleSheet,  Text, View } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text>
                    ascas
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
});