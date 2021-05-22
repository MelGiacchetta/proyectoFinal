import React from 'react';
import { Component } from 'react';
import Menu from './src/components/Menu'

import {
  Text,
  View,
  Button,
} from 'react-native';

class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        contador: 0,
      }
    }
render() {

return(
    <View> 
      <Menu></Menu>
      <Text>Hola</Text>
    </View>
)
}
}
export default App;
