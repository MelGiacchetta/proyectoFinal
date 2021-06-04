import React from 'react';
import { Component } from 'react';
import Menu from './src/components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  Button,
} from 'react-native';
import { Screen_ViewImportedCards } from './src/Screens/Screen_ViewImportedCards';
import { Screen_Import } from './src/Screens/Screen_import';
import { Sceen_FlatList } from './src/Screens/Screen_FlatList'
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
  //<Screen_ViewImportedCards/>
)
}
}
export default App;
