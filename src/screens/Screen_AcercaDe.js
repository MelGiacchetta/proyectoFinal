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
            <Image style= {styles.iconosAcercaDe} source={{uri: "https://lh3.googleusercontent.com/proxy/SGGnwn6XUWFqd61pwTSuOOqWZyXVFccif4DlsO8F4J7HuEYELkCtlfEc1Ozal3U2LP8Qo8mopa7r9O6DBSAgs1crovDcFbrXA3ONFbjMyeiI8LD14YuVdlPF_NhXYsstLZA" }}/>
            <Text style= {styles.programacion}> Programación III </Text>
            <Text style= {styles.nombres}>Lucia Salas Gonzalez - Jazmín Cavanagh - Melanie Giacchetta</Text>
      </View>
)
}
}
export  {Screen_AcercaDe};