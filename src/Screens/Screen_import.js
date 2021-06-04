import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../api/RandomUsers';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
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
      //  getData()
      //   .then( (usuarios) => {
      //     console.log(usuarios)
      //     this.setState({ api: usuarios })
      //     })
      }
      
    async storeData(){
        try{
            const jsonApi = JSON.stringify(this.state.api);
            await AsyncStorage.setItem("Api", jsonApi);
            console.log("Datos almacenados");
        }
        catch(e){
            console.log(e)
        }
    }

    importarTarjetas(){
      fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
        .then(result => result.json())
        .then(data =>{
            this.setState({apiActualizada: data.results})
        })
        .catch((e) => console.log(e))
    }

render() {
const values = this.state.api.map(persona=>
    <Text key={persona.login.uuid}></Text>
    )
return(
    <View>
   <Text>Cuantas tarjetas queres ver </Text>
      <TextInput onChangeText={text => this.setState({cantidadElegida : text})}></TextInput>
      <TouchableOpacity onPress={ this.storeData.bind(this) }>
        <View> 
          <Text>Guardar datos</Text>
        </View>
      </TouchableOpacity>
    </View>
    
    
)
}
}
export {Screen_Import};