import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default class ButtonComp extends Component {
    render() {
        const {screen, navigation, buttonText} = this.props;
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                    <Text style={styles.textStyle}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        padding: 5,
        backgroundColor: '#000000',
        marginHorizontal: Dimensions.get('window').width / 3,
        marginVertical:30,
        borderRadius: 12
    },
    button1: {
        width: 95,
        height: 30,
        backgroundColor: '#000000'
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white'
    }

});
