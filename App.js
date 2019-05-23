import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Coords from './Coords';
import ARScene from './ARScene'

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('Coords')} title='Find coords' />
        <Button onPress={() => this.props.navigation.navigate('ARScene')} title='Go to AR' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mainNavigator = createStackNavigator({
  App: { screen: App }, // home screen navigation
  Coords: { screen: Coords }, // coordination screen navigation
  ARScene: { screen: ARScene},
});

const Navigator = createAppContainer(mainNavigator);

export default Navigator;

