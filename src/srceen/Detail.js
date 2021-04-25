import React, { Component } from 'react';
import { StyleSheet,  Text, TouchableOpacity, View } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 21
        }
    }

    onClick_Add() {
        this.setState({
            number: this.state.number + 1
        })
    }

    onClick_Sub() {
        this.setState({
            number: this.state.number - 1
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.container_hearder}>
                    <Text style={styles.container_hearder_text}>
                        {this.state.number}
                    </Text>
                </View>
                <View style={styles.container_bottom}>
                    <TouchableOpacity style={styles.container_bottom_add}
                    onPress={() => {this.onClick_Add()}}
                    >
                        <Text style={styles.container_bottom_add_text}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container_bottom_sub}
                    onPress={() => {this.onClick_Sub()}}
                    >
                        <Text style={styles.container_bottom_sub_text}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        flex: 1
    },
    container_hearder: {
        backgroundColor: "black",
        flex: 9,
        justifyContent: "center",
        alignItems: "center",

    },
        container_hearder_text: {
            color: "yellow",
            fontSize: 70
        },
    container_bottom: {
        backgroundColor: "green",
        flex: 1,
        flexDirection: "row"
    },
        container_bottom_add: {
            backgroundColor: "red",
            flex: 1,
            borderRightWidth: 2, 
            justifyContent: "center",
            alignItems: "center",  
        },
            container_bottom_add_text: {
                color: "yellow",
                fontSize: 50
            },
        container_bottom_sub: {
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
            container_bottom_sub_text: {
                color: "yellow",
                fontSize: 50
            },
        
});