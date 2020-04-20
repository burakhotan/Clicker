import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity,Dimensions, SafeAreaView } from 'react-native';

export default class Box extends Component {
    state={
      numberHolder:Math.floor(Math.random() * 15) + 1,
    };
    onPressBox=()=>{
      this.setState({numberHolder:--this.state.numberHolder})
    };
  render() {
    return (
    <SafeAreaView style={styles.boxMargin}>
      <TouchableOpacity style={styles.card}
        onPress= {this.onPressBox}
      >
          <Text>{this.state.numberHolder}</Text>
      </TouchableOpacity>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    card:{
        width:75,
        height:75,
        backgroundColor:'#FF9900',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        
    },
    boxMargin:{
      marginLeft:Math.floor(Math.random() *Dimensions.get('screen').width)+1+37.5,
      marginTop:Math.floor(Math.random() * Dimensions.get("screen").height)+1+37.5,
      marginRight:Math.floor(Math.random() *Dimensions.get('screen').width)+1-37.5,
      marginBottom:Math.floor(Math.random() *Dimensions.get('screen').height)+1-37.5,
    }  
  });
