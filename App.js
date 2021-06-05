import React from 'react';
import { Component } from 'react';
import Menu from './src/components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_ViewImportedCards } from './src/screens/Screen_ViewImportedCards';
import { Screen_Import } from './src/screens/Screen_import';

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
    <Screen_Import></Screen_Import>
  // <Screen_ViewImportedCards/>

)
}
}
export default App;
