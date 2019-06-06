import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';
const firestoreConfig = require('./FirebaseConfig.json');

var sharedProps = {
  apiKey:"9BFDB5D1-B050-4660-ADC7-0DA8F1BD6A0E",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./HelloWorldScene');
//var InitialVRScene = require('./HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

var defaultNavigatorType = AR_NAVIGATOR_TYPE;


export default class ARScene extends React.Component {

  static navigationOptions = {
    title: 'AR Screen',
  };

  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    }
  }

  render() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }
}