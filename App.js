import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, SafeAreaView, Dimensions } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';
import { BackHandler } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return true;
    });
  }
  constructor(props) {
    super(props)
    this.state = ({
      count: 0,
      count2: 1,
      randCount: Math.ceil((Math.random() * 5)),
      time: false,
      score: 0,
    })
  }
  method = () => {
    this.setState({
      count: this.state.count + 1,
    })
    var a = this.state.randCount;
    this.setState({
      randCount: this.state.randCount = Math.ceil(Math.random() * 5)
    })
    while (a === this.state.randCount) {
      this.setState({
        randCount: this.state.randCount = Math.ceil(Math.random() * 5)
      })
    }
    this.setState({
      score: this.state.count + 1,
      count2: this.state.count2 = 1
    })
  }
  pressAndAddCount = () => {

    this.setState({
      count2: this.state.count2 + 1
    });
    if (this.state.randCount === this.state.count2) {
      this.method();
    } else {
      console.log(this.state.count2)
      console.log("Devam")
    }
  };
  countDown = (a) => {
    if (a === 1) {
      return 1;
    }
    if (a === 2) {
      return 1.5;
    }
    if (a === 3) {
      return 2;
    }
    if (a === 4) {
      return 3;
    }
    if (a === 5) {
      return 4;
    }
    else {
      return 10;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/Images/play.png')} style={styles.backgroundImage} />
        <View style={{
          flexDirection: 'row', alignItems: 'center', backgroundColor: "transparent"
        }} >
          <CountdownCircle
            seconds={this.countDown(this.state.randCount)}
            radius={30}
            borderWidth={8}
            color="white"
            bgColor="white"
            style={{ marginLeft: 20 }}
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => this.props.navigation.navigate('GameOverScreen', { lastScore: this.state.count })}
          />
          <Text style={styles.textDesign}>{this.state.count}</Text>
        </View>

        <SafeAreaView style={[styles.boxMargin, {
          marginTop: (Math.random() * 10 + 1) * 45,
          marginLeft: (Math.random() * 10 + 1) * 30
        }]}>
          <TouchableOpacity style={styles.box}
            onPress={() => this.pressAndAddCount()}
          >
            <Text>{this.state.randCount}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textDesign: {
    fontSize: 70,
    fontStyle: 'italic',
    textShadowColor: 'black',
    color: "#5A1C54",
    fontWeight: '500',
    marginTop: 5,
    textShadowRadius: 5,
    marginLeft: Dimensions.get('window').width / 3.3
  },
  container: {
    flex: 1,
    backgroundColor: '#1B2850',
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
    position:'absolute'
  },
  buttonContainer: {
    flex: 1,
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: '#47759C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  boxMargin: {
    marginTop: (Math.random() * 10 + 1) * 45,
    marginLeft: (Math.random() * 10 + 1) * 30
  }
});
