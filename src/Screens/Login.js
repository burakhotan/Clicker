import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';


//Component
import ButtonComp from '../Components/ButtonComp';
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
    console.warn(body)
    let responseData = await addUsername({ body: body })
    if (responseData !== null) {
        this.setState({name:''})
        console.warn(responseData)
        //onPress={() => navigation.reset({routes:[{name:screen}]})}>
    }

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder='Enter your nickname'
          placeholderTextColor='#9F8EB2'
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <ButtonComp style={styles.loginButton}
          screen={'PlayScreen'}
          navigation={navigation}
          buttonText='Login'
          onPress={()=>this.addUser()}
        >
        </ButtonComp>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2850'
  },
  textInput: {
    height: 40,
    width: 150,
    borderColor: '#9F8EB2',
    borderWidth: 3,
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3,
    marginBottom: 50,
    backgroundColor: 'transparent',
    color: '#9F8EB2',
    paddingLeft: 11



  }
});
