import React, { Component } from 'react';
import {Text} from 'react-native'
import styles from '../styles/Styles';

class Screen_Papelera extends Component {

render() {

return(
   <View style= {styles.acercaDe}>
      <Text style= {styles.nombres} > Jazmín Cavanagh - Lucía Salas Gonzalez - Melanie Giacchetta </Text>
   </View>
)
}
}
export  {Screen_Papelera};