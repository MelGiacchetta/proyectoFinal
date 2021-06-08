import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state= {
       api: [],
       cantidadElegida: 0,
      }
    }
componentDidMount(){
  fetch("https://randomuser.me/api/?results=")
  .then( response => response.json())
  .then (result => {
    this.setState( {api: result.results})
  })
}


async storeData(){
        try{
            const jsonApi = JSON.stringify(this.state.api);
            await AsyncStorage.setItem("Api", jsonApi);
            console.log(this.state.api);
        }
        catch(e){
            console.log(e)
        }
    }


importarTarjetas(){
      fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
        .then(result => result.json())
        .then(data =>{
            this.setState({apiActualizada: data.results })
            console.log(this.state.apiActualizada)
        })
        .catch((e) => console.log(e))
    }

render() {
  
return(
  <View style={styles.view}>
      <Text style={styles.titile}>¿Cuantas tarjetas deseas importar?</Text>
      <TextInput style={styles.imput} onChangeText={text => this.setState({cantidadElegida : text})}></TextInput>
      <TouchableOpacity  onPress = {this.importarTarjetas.bind(this)}>
            <View style={styles.button}>
                <Text>Importar</Text>
            </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress = {this.storeData.bind(this)}>
            <View style={styles.button}>
                <Text>Guardar tarjetas importadas</Text>
              </View>
      </TouchableOpacity>
  </View>
)}

}

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    titile:{
      fontSize:30
    },

    button:{
      fontSize:18,
      textAlign:"center",
      padding:10,
      margin:20,
      borderRadius:30,
      borderStyle:"solid",
    },

    imput:{
        borderWidth:2,
        borderStyle:"solid",
        borderRadius:10,
        margin:10,
    },


})


export {Screen_Import};