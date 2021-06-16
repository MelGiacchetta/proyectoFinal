import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/Styles';

class Screen_AcercaDe extends Component {

render() {

return(
      <View style= {styles.acercaDe}>
         <Text style= {styles.nombres} > Jazmín Cavanagh  </Text>
         <Text style= {styles.nombres} > Lucía Salas Gonzalez  </Text>
         <Text style= {styles.nombres} > Melanie Giacchetta  </Text>
      </View>
)
}
}
export  {Screen_AcercaDe};