import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Styles';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
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
componentDidMount(){
  fetch("https://randomuser.me/api/?results=")
  .then( response => response.json())
  .then (result => {
    this.setState( {api: result.results})
  })
}


async storeData(jsonApi){
        try{
            let resultado = await AsyncStorage.getItem("Api");
            if (resultado == null) resultado = []
            resultado.push(this.state.api)
            const jsonApi = JSON.stringify(resultado);
            await AsyncStorage.setItem("Api", jsonApi);
            console.log(resultado);
          //  Alert.alert("Datos guardados correctamente.");
        }
        catch(e){
            console.log(e)
        }
    }


importarTarjetas(){
      fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
        .then(result => result.json())
        .then(data =>{
            this.setState({api: data.results })
            console.log(this.state.api)
        })
        .catch((e) => console.log(e))
    }

cantidadImportada(){
  this.setState ({cantidadImportada: this.state.cantidadElegida})
}

render() {
  
return(
  <View style = {styles.view}>
      <Text style={styles.title}>¿Cuántas tarjetas deseas importar?</Text>
      <TextInput style={styles.input} onChangeText={text => this.setState({cantidadElegida : text})}></TextInput>
      <TouchableOpacity onPress = {this.importarTarjetas.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } onPress = {this.cantidadImportada.bind(this)}>Importar</Text>
            </View>
      </TouchableOpacity>
      <Text style = {styles.textImport}> Se importaron: {this.state.cantidadImportada} tarjetas</Text>
      <TouchableOpacity  onPress = {this.storeData.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } >Guardar tarjetas importadas</Text>
              </View>
      </TouchableOpacity>
  </View>
)}

}
export {Screen_Import};