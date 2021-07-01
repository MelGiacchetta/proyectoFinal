import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Styles';
import TarjetasImport from '../components/TarjetasImport'

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing, 
} from 'react-native';


class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state= {
       api: [],
       cantidadElegida: 0,
       cantidadImportada: 0,
       tarjetasImportadas: [],
       toValue: 0.6,
       
      }
    }

    async storeData(item){
 
      let tarjetasImportadas = this.state.tarjetasImportadas
      tarjetasImportadas.push(item)

      let usuariosNoImportados = this.state.api.filter((usuarios)=>{
        return usuarios !== item
      })

      this.setState({tarjetasImportadas: tarjetasImportadas, api: usuariosNoImportados})
     
      try{
        
        const jsonTarjetasImportadas = JSON.stringify(this.state.tarjetasImportadas);
        await AsyncStorage.setItem("Usuarios", jsonTarjetasImportadas);
      
    }
    catch(e){
        console.log(e)
    }
    
  }

verTarjetas(){

  fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
  .then(result => result.json())
  .then(data =>{
      this.setState({api: data.results, cantidadImportada: this.state.cantidadElegida})

  })
  .catch((e) => console.log(e))
}
position = new Animated.Value(1);

modificarTamañoTarjetas(){
  Animated.timing(this.position, {
    toValue: this.state.toValue,
    duration: 500,
    easing: Easing.elastic(1),
    //suavizado
    useNativeDriver: true,
}).start();
this.setState({toValue : this.state.toValue == 1 ? 0.6 : 1})
}

renderItem = ({item}) => {
  return (
  <TarjetasImport item = {item} storeData = {this.storeData.bind(this, item)}></TarjetasImport>
          )
}

keyExtractor = (item, idx) => idx.toString();

render() {

return(
  
  <View style = {styles.view}>
    <View style = {styles.secondView}>
      <Text style={styles.title}>¿Cuántas tarjetas deseas ver?</Text>
      <TextInput style={styles.input} onChangeText={text => this.setState({cantidadElegida: text})} placeholder="Cantidad de usuarios que quiero ver..."></TextInput>
        <TouchableOpacity style= {styles.button} 
                          onPress={this.verTarjetas.bind(this)}>
          <Text style= {styles.buttonText}>VER</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.buttonAnimate} 
                          onPress={this.modificarTamañoTarjetas.bind(this)}>
          <Text style= {styles.textButtonAnimate}>ACHICAR/AGRANDAR TARJETAS</Text>
        </TouchableOpacity>
      <Text style = {styles.textImportVisibles}> USUARIOS VISIBLES: {this.state.api.length}</Text>
      <Animated.FlatList style = {[{ transform:[
                                {scale: this.position}
                                ] 
                                }, styles.card]} 
                      data = {this.state.api}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
      />
      <Text style = {styles.textImportImportados}> USUARIOS IMPORTADOS: {this.state.tarjetasImportadas.length}</Text>
      </View>
  </View>
)}

}
export {Screen_Import};