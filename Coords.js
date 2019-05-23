import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import RNSimpleCompass from 'react-native-simple-compass';
import * as firebase from "firebase";
import 'firebase/firestore';


export default class Coords extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    magHeading: null,
    trueHeading: null,
  }
  static navigationOptions = {
    title: 'Coords Screen',
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      this.setState({ latitude: latitude, longitude: longitude })
    }, error => {
        alert(error)
      })
    
      const degree_update_rate = 3; // Number of degrees changed before the callback is triggered
      RNSimpleCompass.start(degree_update_rate, (degree) => {
        console.log('You are facing', degree)
        this.setState({ trueHeading: degree })
        RNSimpleCompass.stop()
      });
    // Location.getCurrentPositionAsync().then(position => {
    //   const latitude = position.coords.latitude
    //   const longitude = position.coords.longitude
    //   this.setState({ latitude: latitude, longitude: longitude })
      
    //   Location.getHeadingAsync().then(result => {
    //     const magHeading = result.magHeading
    //     const trueHeading = result.trueHeading
    //     this.setState({ magHeading: magHeading, trueHeading: trueHeading })
    //   }, error => {
    //       alert(error)
    //   })

    // }, error => {
    //     alert(error)
    // })
    
  };

  storeCoordsInFirebase = () => {
    firebase.initializeApp(firestoreConfig)

    var db = firebase.firestore();
    var attractionRef = db.collection('attraction');
    attractionRef.add({
      position: new firebase.firestore.GeoPoint(this.state.latitude, this.state.longitude)
    })
  }

  render() {
    console.log(this.state.longitude)
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ this.findCoordinates }>
          <Text style={styles.welcome}>Click for coordinates</Text>
          <Text>Latitude: { this.state.latitude }</Text>
          <Text>Longitude: { this.state.longitude }</Text>
          <Text>magHeading: { this.state.magHeading }</Text>
          <Text>trueHeading: { this.state.trueHeading }</Text>
        </TouchableOpacity>

        <Button onPress={ this.storeCoordsInFirebase }
          title="Store in firebase"
          color="#841584"
          accessibilityLabel="Click to store information in firebase"
        />
      </View>
    )
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