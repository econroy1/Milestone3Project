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
  TextInput
} from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text> Greetings {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//   render() {
//     return(
//       <View style ={{alignItems: 'center'}}>
//         <Greeting name='David Hodge' />
//         <Greeting name='Tradd Spector' />
//         <Greeting name='Laurence Shields' />
//         <Greeting name='Alex Willich' />
//         <Greeting name='Mr. Vidal'/>
//       </View>
//     );
//   }
//   }

  export default class GradeTranslator extends Component {
    constructor(props) {
      super (props);
      this.state = {text: ''};
    }
      render () {
        return(
          //<Text> Mr. Vidal</Text>
          <View style={{padding: 10}}>
            <TextInput
              style={{height:40}}
              placeholder="Type my Grade!"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 110, fontSize: 50}}>
              {this.state.text.split(' ').map((word) => word && '100%').join(' ')}
            </Text>
          </View>
        );
      }
    }
