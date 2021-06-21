import React from 'react';
import { Component } from 'react';
import { getData } from '../api/RandomUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal_verDetalle } from '../modals/Modal_verDetalle';
import { Modal_verComentarios } from '../modals/Modal_verComentarios';
import { Screen_Papelera } from './Screen_Papelera';
import styles from '../styles/Styles';

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';



class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiActualizada: [],
        showModalDetalle: false,
        showModalComentarios: false,
        itemSeleccionado: null,
        usuariosPapelera: [],
        buscador: ""
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
        const resultado = await AsyncStorage.getItem("Usuarios");
        if (resultado !== null){
          this.setState({apiActualizada: JSON.parse(resultado)})
          
        } else {
          console.log("no hay usuarios guardados")
        }
        } catch(e){
        console.log(e)
        }
      }
      
      borrarContacto(item){
        // let usuariosPapelera = this.state.usuariosPapelera.push(item)
        let usuarios = this.state.apiActualizada.filter((usuarios)=>{
          return usuarios !== item
              })
        this.setState({apiActualizada: usuarios})
        // usuariosPapelera: usuariosPapelera
        // console.log(this.state.usuariosPapelera)
    }

    verDetalle(item){
      this.setState({ showModalDetalle: !this.state.showModalDetalle, itemSeleccionado: item })
        }   

    verComentarios(item){
      this.setState({ showModalComentarios: !this.state.showModalComentarios, itemSeleccionado: item })
    }

    buscar(){
      let valorInput = this.state.buscador.toLowerCase()
      let resultado = this.state.apiActualizada.filter((api)=>{
        return api.name.first.toLowerCase().includes(valorInput) 
            || api.name.last.toLowerCase().includes(valorInput) 
            || api.location.country.toLowerCase().includes(valorInput)
            || api.location.city.toLowerCase().includes(valorInput)
      });
      this.setState({apiActualizada: resultado});
      console.log(this.state.apiActualizada)

    }
  
renderItem = ({item}) => {
  
      return (
      <View style= { styles.tarjeta }>

          <TouchableOpacity style={ styles.borrar } onPress = { this.borrarContacto.bind(this, item) }>
            <View >
                <Text style = { styles.buttonText }>X</Text>
            </View>
         </TouchableOpacity>
          <Image style= { styles.imagen } source={{ uri:  item.picture.medium }}/>
          <Text style= { styles.texto }> { item.name.first } { item.name.last } </Text>
          <Text style= { styles.texto }> { item.email } </Text>
          <Text style= { styles.texto }> { item.dob.date } ({ item.dob.age }) </Text>
          <View style= { styles.iconos }>
            <TouchableOpacity onPress= {this.verComentarios.bind(this, item)}>
            <Image style= { styles.iconoComentar } source={{uri: "https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png" }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.verDetalle.bind(this, item)}>
              <Image style= { styles.iconoVerDetalle } source={{uri: "https://image.flaticon.com/icons/png/512/673/673132.png" }}/>
            </TouchableOpacity>
          </View>
          <Modal_verDetalle showModalDetalle = {this.state.showModalDetalle} itemSeleccionado = {this.state.itemSeleccionado} ></Modal_verDetalle>
          <Modal_verComentarios showModalComentarios = {this.state.showModalComentarios} itemSeleccionado = {this.state.itemSeleccionado}></Modal_verComentarios>
      </View>
              )
  }
  
keyExtractor = (item, idx) => idx.toString();

  render() {

        return(
            <View style = { styles.view }> 
            <View style = {styles.secondView}>
              <Text style={ styles.title }> USUARIOS IMPORTADOS</Text>
              <TextInput style={styles.input} onChangeText={text => this.setState({buscador: text})} placeholder="Buscar..."></TextInput>
              <TouchableOpacity style = {styles.button} onPress = {this.buscar.bind(this)}>
                <Text style={styles.buttonText}>
                  BUSCAR
                </Text>
              </TouchableOpacity>
            <View>
              </View>
              <FlatList style= {styles.card}
                      data = {this.state.apiActualizada}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
              />
              </View>
              <TouchableOpacity  onPress={ this.getData.bind(this) }>
                <View style = { styles.button }> 
                  <Text style = { styles.buttonText }>
                    VER USUARIOS IMPORTADOS
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