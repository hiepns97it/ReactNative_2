import React, { Component } from 'react';
import { StyleSheet,  Text, View } from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text style={styles.container}>
                    Menu
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
        backgroundColor: "#fff"
    }
});