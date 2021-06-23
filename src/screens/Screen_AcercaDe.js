import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/Styles';

class Screen_AcercaDe extends Component {

render() {

return(
      <View style= {styles.acercaDe}> 
            <Text style= {styles.nosotras}>NOSOTRAS</Text>
            <Text style= {styles.introduccion}> Somos estudiantes de la carrera de Negocios Digitales</Text>
            <Image style= {styles.iconosAcercaDe} source={{uri: "https://www.universidadesonline.com.bo/logos/original/logo-universidad-de-san-andres.png" }}/>
            <Image style= {styles.iconosAcercaDe} source={{uri: "https://lh3.googleusercontent.com/proxy/be6RsoywdX1V8daaXUMDExET9EorZoHAuYH5omCMrpCbwAFTB-Yhut9X1GFbrcvsT-B5pILh2vVPv1CD1cBZMc-oQC4dK1x254Dm5NVcdIP44fez6fH2dE8GlSMgMhzvAxY" }}/>
            <Text style= {styles.programacion}> Programación III </Text>
            <Text style= {styles.nombres}>Lucia Salas Gonzalez - Jazmín Cavanagh - Melanie Giacchetta</Text>
      </View>
)
}
}
export  {Screen_AcercaDe};