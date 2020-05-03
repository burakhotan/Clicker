import React, { Component } from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native';

export default class ImageButton extends Component {
  render() {
    const {photo,screen,navigation}=this.props;
    return (
       <TouchableOpacity onPress={() => navigation.navigate(screen)}>
            <View style={styles.mButtonContainer}>
              <Image source ={photo} style={styles.button1}/>
            </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
    mButtonContainer:{
        padding:5,
      },
      button1:{
        width:30,
        height:22
      }

});


