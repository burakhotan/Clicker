import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
//Component
import ImageButton from '../Components/ImageButton';

import { addLeader } from '../api/userinfoapi';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderBoard: ''
    };
  }
  renderContactsItem = ({ item, index }) => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.username}</Text>
        <Text style={styles.itemScore}>Highest:{item.score===null ? 0 : item.score}</Text>
      </View>
    )

  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../Images/login.png')} style={styles.backgroundImage} />
        <View style={styles.topBar}>
          <ImageButton
            style={styles.goBack}
            photo={require('../Images/goback.png')}
            screen={'PlayScreen'}
            navigation={navigation}
          >
          </ImageButton>
          <Text style={{marginLeft:110,fontSize:20,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>
            LeaderBoard
          </Text>
        </View>
        <View style={styles.mainBoard}>
        <FlatList style={styles.list}
          renderItem={this.renderContactsItem}
          keyExtractor={(item) => item._id}
          data={this.state.leaderBoard}
        />
        </View>
      </View>
    );
  }
  addLeaders = async () => {
    let responseData = await addLeader()
    if (responseData !== null) {
      this.setState({ leaderBoard: responseData })
      console.warn(responseData)
    }
  }
  componentDidMount = async () => {
    this.addLeaders();
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2850'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius:5,
    marginBottom:10
  },
  itemScore: {
    fontSize: 20,
    color:'#F3F3F3'
  },
  itemName: {
    fontSize: 25,
    color:'#F3F3F3'
  },
  topBar: {
    flex: 0.09,
    flexDirection:'row',
    backgroundColor: 'transparent',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  list: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute'
  },
  mainBoard:{
    flex: 0.91,
    padding: 10,
  },

});
