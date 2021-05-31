import React from 'react';
import { Component } from 'react';
import Tarjeta from './Tarjeta';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Tarjetas extends Component {
    constructor(){
      super();
      this.state= {
          api:[], 
      }
    }

   
render() {

return(
    <View> 
      <Text>Hola</Text>
    </View>
)
}
}
export default Tarjetas;