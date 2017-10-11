/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { shouldHideButton: false };
  }

changeText() {
  //print something
  console.log("Button Pressed!")

  // Hide text
  this.setState({
    shouldHideButton: true
  });
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Hello</Text>
        <TouchableHighlight hidden={this.state.shouldHideButton} onPress={this.changeText.bind(this)}> 
          <Text> Change Text </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
