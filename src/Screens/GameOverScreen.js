import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ButtonComp from '../Components/ButtonComp';
import { AsyncStorage } from 'react-native';
import { addScore } from '../api/userinfoapi';

export default class GameOverScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: '',
            userObject: {},
            userId: '',
        };
    }
    componentDidMount = async () => {
        await AsyncStorage.getItem('item').then(req => JSON.parse(req))
            .then(json => {
                this.setState({
                    userObject: json,
                    userId: json._id
                })
            })
            .catch(error => console.log('error!'));
        if (this.props.route.params.lastScore > (this.state.userObject.score !== null ? this.state.userObject.score : 0)) {
            AsyncStorage.setItem('item', JSON.stringify({
                _id: this.state.userId,
                score: this.props.route.params.lastScore,
                username: this.state.userObject.username
            }));
            console.warn(this.props.route.params.lastScore + " , " + this.state.userObject.score)
            this.addScores();
        }

    };
    addScores = async () => {
        let body = {
            _id: this.state.userId,
            score: this.props.route.params.lastScore
        }
        let responseData = await addScore({ body: body })
        if (responseData !== null) {
            this.setState({ score: '' })
            this.props.navigation.reset({ routes: [{ name: 'App' }] })
        }
    }
    goPlay = () => {
        this.props.navigation.reset({ routes: [{ name: 'PlayScreen' }] })
    }
    render() {
        const { navigation } = this.props;
        const { lastScore } = this.props.route.params;
        return (
            <View style={styles.container} >
                <Image source={require('../Images/login.png')} style={styles.backgroundImage} />
                <Text style={styles.scoreText} >Score:{lastScore}</Text>
                <ButtonComp style={styles.tryButton}
                    screen={'App'}
                    navigation={navigation}
                    buttonText='TRY AGAIN'
                    onPress={() => this.addScores()}
                >
                </ButtonComp>
                <ButtonComp style={styles.menuButton}
                    screen={'PlayScreen'}
                    navigation={navigation}
                    buttonText='MENU'
                    onPress={() => this.goPlay()}
                >
                </ButtonComp>
                <Text style={styles.scoreText}>
                    HighestScore: {this.state.userObject.score}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2850',
        justifyContent: 'center'
    },
    gameover: {
        alignSelf: 'center',
        marginTop: 200
    },
    scoreText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#4CF70C'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        position: 'absolute'
    },
});