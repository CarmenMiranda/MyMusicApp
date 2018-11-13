/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
//import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert, Image} from 'react-native';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key="home" component={HomeView} hideNavBar/>
  </Scene>
);

type Props = {};
export default class App extends Component<Props> {
  

  /*constructor(props){
    super(props);
    this.state = {
      //switchValue: true,
      //textFromInput : "",
      title: "",
      textBody: "",
    };
  }

  onPressLogIn(){
    Alert.alert(
      this.state.title,
      this.state.textBody,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  //First code
  /*onPressLearnMore(){
    Alert.alert(
      `Carly`,
      this.state.textFromInput,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  
  onChange = (value) =>{
    console.warn(`El switch cambiará a: ${value}`)
    this.setState({switchValue: value})
  }*/

  render() {
    return <Router scenes={scenes}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',*/
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
