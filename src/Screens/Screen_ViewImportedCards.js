import React from 'react';
import { Component } from 'react';
import { getData } from '../api/RandomUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Styles';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';


class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiActualizada: [],
      }
    }

// componentDidMount() {
//   this.unscribe = this.props.navigation.addListener('focus', () => {
//     this.getData();
//   })
//   Alert.alert("Mount")
// }
// componentWillUnmount() {
//   this.unscribe();
// }

async getData(){
      try {
        const resultado = await AsyncStorage.getItem("Api");
        if (resultado !== null){
          this.setState({apiActualizada: JSON.parse(resultado)})
          console.log(resultado)
        } else {
          console.log("no hay usuarios guardados")
        }
        } catch(e){
        console.log(e)
        }
      }


      borrarContacto(idTarjeta){
        let resultado = this.state.apiActualizada.filter((usuarios)=>{
        return usuarios.login.uuid !== idTarjeta
        
      })
        this.setState({apiActualizada: resultado});
    }
  
renderItem = ({item}) => {
      return (
      <View style= {styles.tarjeta}>

          <TouchableOpacity style={styles.borrar}onPress = {this.borrarContacto.bind(this)}>
            <View >
                <Text style = { styles.buttonText } onPress = {this.borrarContacto.bind(this)}>X</Text>
            </View>
         </TouchableOpacity>
          <Image style= {styles.imagen} source={{uri:  item.picture.medium }}/>
          <Text style= { styles.texto }> { item.name.first } { item.name.last } </Text>
          <Text style= { styles.texto }> { item.email } </Text>
          <Text style= { styles.texto }> {item.dob.date} ({ item.dob.age }) </Text>
          <TouchableOpacity  >
            <View style={styles.verDetalle}>
                <Text style = { styles.buttonTextDetalle }> VER DETALLE </Text>
              </View>
         </TouchableOpacity>
      </View>
              )
  }
  
keyExtractor = (item, idx) => idx.toString();

  render() {

        return(
            <View style = { styles.view }> 
              <Text style={ styles.title }> USUARIOS </Text>
              <View>
              <FlatList style= {styles.card}
                      data = {this.state.apiActualizada}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
              />
              </View>
              <TouchableOpacity  onPress={ this.getData.bind(this) }>
                <View style = { styles.button }> 
                  <Text style = { styles.buttonText }>
                    RECUPERAR
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.setState({apiActualizada: []})}>
                <View style = {styles.button}>
                  <Text style = {styles.buttonText}>
                    BORRAR
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
            
        )

        };
        
}

export {Screen_ViewImportedCards};