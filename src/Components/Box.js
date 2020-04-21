import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';

export default class Box extends Component {
  state = {
    numberHolder: Math.floor(Math.random() * 5) + 1,
    time: false
  };
  
  onPressBox = () => {
    if (this.state.numberHolder === 1) {
      this.setState({ numberHolder: Math.floor(Math.random() * 5) + 1 })
    }
    else {
      this.setState({ numberHolder: --this.state.numberHolder })
    }
  };
  render() {
    return (
      <SafeAreaView style={[styles.boxMargin, {
        marginTop: (Math.random() * 10 + 1) * 45,
        marginLeft: (Math.random() * 10 + 1) * 30
      }]}>
        <TouchableOpacity style={styles.card}
          onPress={this.onPressBox}
        >
          <Text>{this.state.numberHolder}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: 75,
    height: 75,
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

  },
  boxMargin: {
    //marginLeft:Math.floor(Math.random() *Dimensions.get('window').width)+1+37.5,
    //marginTop:Math.floor(Math.random()* Dimensions.get('window').height)+1+37.5,
    marginTop: (Math.random() * 10 + 1) * 45,
    marginLeft: (Math.random() * 10 + 1) * 30

  }
});
