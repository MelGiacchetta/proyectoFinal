import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Styles';
// import Animated from 'react-native-reanimated';

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';

class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state= {
       api: [],
       cantidadElegida: 0,
       cantidadImportada: 0,
      }
    }

//  async componentDidMount(){
//   await AsyncStorage.removeItem("Api")
//    }

async storeData(){
        try{
            let resultado = await AsyncStorage.getItem("Api");
            resultado = JSON.parse(resultado)
            if (resultado == null) resultado = []
            this.state.api.map(data=>{ 
              resultado.push(data)
            })
            const jsonApi = JSON.stringify(resultado);
            await AsyncStorage.setItem("Api", jsonApi);
            console.log(resultado);
          // Alert.alert("Datos guardados correctamente.");
        }
        catch(e){
            console.log(e)
        }
    }


importarTarjetas(){
      fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
        .then(result => result.json())
        .then(data =>{
            console.log(data.results.length)
            this.setState({api: data.results })
        })
        .catch((e) => console.log(e))
    }

cantidadImportada(){
  this.setState ({cantidadImportada: this.state.cantidadElegida})
}

// position = new Animated.Value(0);
// rotation = new Animated.Value(0);

// topDown = () => {
//   // Animated.timing(this.position, {
//   //   tovalue: 300,
//   //   duration: 1000,
//   //   useNativeDriver: true,  
//   // }).start();
//   Animated.timing(this.rotation, {
//     toValue: 1,
//     duration: 1000,
//     useNativeDriver: true
//   }).start();
// }

/* <Animated.View style= { {
            width: 60,
            height: 100,
            backgroundColor: "grey",
            backfaceVisibility: 'true',
            position: "absolute",
            transform: [
                {translateY: this.position},
                {rotateX: rot}
            ]
            }
            }>
</Animated.View> */

render() {
  // const rot = this.rotation.interpolate({
  //   inputRange: [0,1],
  //   outputRange: ['0deg', '180deg']
  // })

return(
  
  <View style = {styles.view}>
      <Text style={styles.title}>¿Cuántas tarjetas deseas importar?</Text>
      <TextInput style={styles.input} onChangeText={text => this.setState({cantidadElegida : text})}></TextInput>
      
        <TouchableOpacity onPress = {this.importarTarjetas.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } onPress = {this.cantidadImportada.bind(this)}>IMPORTAR</Text>
            </View>
        </TouchableOpacity>
      <Text style = {styles.textImport}> Se importaron: {this.state.cantidadImportada}</Text>
      <TouchableOpacity  onPress = {this.storeData.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } > GUARDAR </Text>
              </View>
      </TouchableOpacity>
  </View>
)}

}
export {Screen_Import};