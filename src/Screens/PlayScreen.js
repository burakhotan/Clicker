import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
//Component
import ButtonComp from '../Components/ButtonComp';
export default class PlayScreen extends Component {
  goApp = () => {
    this.props.navigation.reset({ routes: [{ name: 'App' }] })
  }
  goLeader = () => {
    this.props.navigation.reset({ routes: [{ name: 'LeaderBoard' }] })
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../Images/login.png')} style={styles.backgroundImage} />
        <Text style={styles.clickerText}>
          Clicker
        </Text>
        <View style={styles.buttons}>
          <ButtonComp style={styles.playButton}
            screen={'App'}
            navigation={navigation}
            buttonText='PLAY'
            onPress={() => this.goApp()}
          >
          </ButtonComp>
          <ButtonComp style={styles.leaderButton}
            screen={'App'}
            navigation={navigation}
            buttonText='LEADER BOARD'
            onPress={() => this.goLeader()}
          >
          </ButtonComp>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2850'
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position:'absolute'
  },
  clickerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4CF70C',
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingTop: 150,
    marginBottom: 40
  },
});
