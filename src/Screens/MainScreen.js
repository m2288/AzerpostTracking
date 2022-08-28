import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';

export default class MainScreen extends Component {
    state = [{
        track_code: " " 
    }]
    _GetTrackInfoFromAxios =()=>{
      
    }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>MainScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})