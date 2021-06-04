import React from 'react';
import { Component } from 'react';
import { 
    Image,
    View, 
    Text, } from 'react-native';
import AcercaDe from './AcercaDe';
import Tarjetas from './Tarjetas';

class Menu extends Component {
    constructor(){
      super();
      this.state= {
      }
    }
render() {

return(
    <View> 
      <Image style= {{height: 60, width: 60}} source={require('../assets/Images/menu.png')} />
    </View>
)
}
}
export default Menu;