import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions,Image } from 'react-native';
//Component
import ButtonComp from '../Components/ButtonComp';

//back
import { AsyncStorage } from 'react-native';
import { addUsername } from '../api/userinfoapi';

export default class PlayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  addUser = async () => {
    let body = {
      username: this.state.name
    }
    let responseData = await addUsername({ body: body })
    if (responseData !== null) {
      this.setState({ name: '' })
      AsyncStorage.setItem('item', JSON.stringify(responseData));
      console.warn(responseData);
      this.props.navigation.reset({ routes: [{ name: 'PlayScreen' }] })
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../Images/login.png')} style={styles.backgroundImage} />
        <TextInput style={styles.textInput}
          placeholder='Enter your nickname'
          placeholderTextColor='#FFFFFF'
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <ButtonComp style={styles.loginButton}
          screen={'PlayScreen'}
          navigation={navigation}
          buttonText='Login'
          onPress={() => this.addUser()}
        >
        </ButtonComp>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
    position:'absolute'
  },
  textInput: {
    height: 40,
    width: 175,
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 4,
    alignSelf: 'center',
    textAlign:'center',
    marginTop: Dimensions.get('window').height / 3,
    marginBottom: 50,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    paddingLeft: 11
  }
});
