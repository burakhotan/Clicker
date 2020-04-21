import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button,SafeAreaView, Dimensions } from 'react-native';
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
      highScore: 0,
      score: 0,
      error: false,
      yandın: ""
    })
  }
   method = () => {

  this.setState({
    count: this.state.count + 1,
  })
  if (this.state.count === 19) {
    this.setState({
      time: this.state.time = true
    })
    //this.props.navigation.navigate('After20');
  }
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
    if (this.state.time === true) {
      return 750;
    }
    return 1;
  }
  if (a === 2) {
    if (this.state.time === true) {
      return 750;
    }
    return 1.5;
  }
  if (a === 3) {
    if (this.state.time === true) {
      return 750;
    }
    return 2;
  }
  if (a === 4) {
    if (this.state.time === true) {
      return 750;
    }

    return 3;
  }
  if (a === 5) {
    if (this.state.time === true) {
      return 750;
    }
    return 4;
  }
  else {
    if (this.state.time === true) {
      return 750;
    }

    return 10;
  }
}
/*show = () => {
  data.push(this.state.count);
  data.sort(function (a, b) { return b - a });
  console.log(data);
  for (var i = 0; i < 1; i++) {
    this.setState({
      highScore: data[i]
    });
  }
  //this.popupDialog.show()
  console.log(this.state.highScore + "show")
}
*/
render() {
  return (

    <View>
      <View style={styles.linearGradient}>
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
              onTimeElapsed={()=>alert('GAME OVER')}
            />
            <Text style={styles.textDesign}>{this.state.count}</Text>
          </View>

          <SafeAreaView style={[styles.boxMargin, {
            marginTop: (Math.random() * 10 + 1) * 45,
            marginLeft: (Math.random() * 10 + 1) * 30
          }]}>
            <TouchableOpacity style={styles.box}
              onPress={()=>this.pressAndAddCount()}
            >
              <Text>{this.state.randCount}</Text>
            </TouchableOpacity>
          </SafeAreaView>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({

  textDesign: {
    fontSize: 70,
    fontStyle: 'italic',
    textShadowColor: 'black',
    color: "#000000",
    fontWeight: '500',
    marginTop: 5,
    textShadowRadius: 5,
    marginLeft:Dimensions.get('window').width/3.3
  },
  linearGradient: {
    width: 375,
    height: 800,
  },
  btn: {
    color: "white",
    height: 50,
    width: 50
  }, 
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35
  },
  buttonContainer: {
    flex: 1,
  },
  box: {
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
/*
<PopupDialog
            dismissOnHardwareBackPress={false}
            dismissOnTouchOutside={false}
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            <View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ width: 50, height: 50, marginTop: 25 }}
                  source={require('../images/tac.png')} />
                <Text style={{ fontSize: 25 }}>{this.state.highScore}</Text>
                <Text style={{ marginTop: 30, fontSize: 35, marginBottom: 10 }}>{this.state.score}</Text>
              </View>

              <TouchableOpacity style={styles.containers}
                onPress={() => this.props.navigation.navigate('First')}
              >
                <Image
                  style={{ width: 450, height: 200, marginTop: 10, marginRight: 50 }}
                  source={require('../images/play.png')}
                />

              </TouchableOpacity>
            </View>

          </PopupDialog>
          */