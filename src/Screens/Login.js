import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//Component
import ButtonComp from '../Components/ButtonComp';
export default class PlayScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <TextInput style={styles.textInput}
            placeholder='Enter your nickname'
            placeholderTextColor='#9F8EB2'
         />
         <ButtonComp style={styles.loginButton}
            screen={'PlayScreen'}
            navigation={navigation}
            buttonText='Login'
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
    textInput:{
        height: 40,
        width:150, 
        borderColor: '#9F8EB2',
        borderWidth: 3,
        alignSelf:'center',
        marginTop:Dimensions.get('window').height/3,
        marginBottom:50,
        backgroundColor:'transparent',
        color:'#9F8EB2',
        paddingLeft:11

        

    }
});
