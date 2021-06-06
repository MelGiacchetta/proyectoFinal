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
} from 'react-native';

class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state= {
       api: [],
       cantidadElegida: 0,
       apiActualizada: [],
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
            const jsonApi = JSON.stringify(this.state.apiActualizada);
            await AsyncStorage.setItem("Api", jsonApi);
            console.log(this.state.apiActualizada);
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
  <View>
   <Text>Cuantas tarjetas queres importar?</Text>
   <TextInput onChangeText={text => this.setState({cantidadElegida : text})}></TextInput>
   <TouchableOpacity onPress = {this.importarTarjetas.bind(this)}>
    <Text>Importar</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress = {this.storeData.bind(this)}>
     <Text>Guardar tarjetas importadas</Text>
   </TouchableOpacity>
  </View>
)
}
}
export {Screen_Import};