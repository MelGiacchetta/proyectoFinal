import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
       textHandler: 0,
      }
    }
    componentDidMount(){
        // this.getStringStorage();
        // this.getObjectStorage();
        fetch("https://randomuser.me/api/?results=" + this.state.textHandler)
        .then(result => result.json())
        .then(data =>{
            this.setState({api: data.results})
        })
        .catch((e) => console.log(e))
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
      fetch("https://randomuser.me/api/?results=" + this.state.textHandler)
        .then(result => result.json())
        .then(data =>{
            this.setState({api: data.results})
        })
        .catch((e) => console.log(e))
    }

render() {
const values = this.state.api.map(item=>
    <Text key={item.login.uuid} 
          style={{fontSize: 20}}>{item.name.first}</Text>
    )
return(
    <View>
   <Text>Cuantas tarjetas queres ver </Text>
      <TextInput onChangeText={text => this.setState({textHandler : text})}></TextInput>
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