import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ButtonComp from '../Components/ButtonComp';
export default class GameOverScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container} >
                <Image
                    style={styles.gameover}
                    source={require('../Images/game-over.png')}
                >
                </Image>
                    <ButtonComp style={styles.tryButton}
                        screen={'App'}
                        navigation={navigation}
                        buttonText='TRY AGAIN'
                    >
                    </ButtonComp>
                    <ButtonComp style={styles.menuButton}
                        screen={'PlayScreen'}
                        navigation={navigation}
                        buttonText='MENU'
                    >
                    </ButtonComp>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1B2850'
    },
    gameover: {
        alignSelf: 'center',
        marginTop: 250
    }
});