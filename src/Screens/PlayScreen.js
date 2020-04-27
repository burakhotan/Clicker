import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
//Component
import ButtonComp from '../Components/ButtonComp';
export default class PlayScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.clickerText}>
        Clicker
        </Text>
        <View style={styles.buttons}>
           <ButtonComp style={styles.playButton}
            screen={'App'}
            navigation={navigation}
            buttonText='PLAY'
           >
           </ButtonComp>
           <ButtonComp style={styles.leaderButton}
            screen={'App'}
            navigation={navigation}
            buttonText='LEADER BOARD'
           >
           </ButtonComp>     
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1B2850'
    },
    clickerText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#4CF70C',
        fontStyle:'italic',
        alignSelf:'center',
        paddingTop:150,
        marginBottom:40
    },
});
