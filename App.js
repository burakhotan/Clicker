import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

import Box from './src/Components/Box.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainScreen}>
      <Text>Score</Text>
       <Box style={styles.box}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainScreen:{
    flex:1,
    backgroundColor:'#53AED7'
  },
});
