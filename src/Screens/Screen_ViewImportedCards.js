import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal_verDetalle } from '../modals/Modal_verDetalle';
import styles from '../styles/Styles';
import TarjetasViewImportedCards from '../components/TarjetasViewImportedCards'

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Animated,
  Easing,
} from 'react-native';

class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiActualizada: [],
        showModalDetalle: false,
        itemSeleccionado: null,
        usuariosPapelera: [],
        buscador: "",
        showBotonBorrar: true,
        usuariosBorradosDefinitivamente: [],
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
        let usuariosBorrados = this.state.usuariosPapelera
        this.setState({apiActualizada: this.state.apiActualizada.splice(usuariosBorrados, 1)})

        const usuarios = await AsyncStorage.getItem("Usuarios");
        if (usuarios !== null){
          this.setState({apiActualizada: JSON.parse(usuarios)})
          
        } else {
          console.log("no hay usuarios guardados")
        }
        } catch(e){
        console.log(e)
        }
      }

      // async getData(){
  
      //   try {
          
      //     const usuarios = await AsyncStorage.getItem("Usuarios");
          
      //     const usuariosBorradosDefinitivamente = await AsyncStorage.getItem("UsuariosBorradosDefinitivamente");

      //     if (usuarios !== null && usuariosBorradosDefinitivamente !== null){

      //       let usuarios = this.state.apiActualizada.filter((usuarios)=>{
      //         return usuarios !== this.state.usuariosBorradosDefinitivamente
      //       })

      //       this.setState({usuariosBorradosDefinitivamente: JSON.parse(usuariosBorradosDefinitivamente)})
      //       this.setState({apiActualizada: JSON.parse(usuarios)})

      //       console.log(this.state.usuariosBorradosDefinitivamente)
      //     }        
      //      else {
      //       console.log("no hay usuarios guardados")
      //     }}
      //      catch(e){
      //     console.log(e)
      //     }
      //   }  

    async storeUsuariosBorrados(item){
    
        try{

          let usuarios = this.state.apiActualizada.filter((usuarios)=>{
            return usuarios !== item
                })
    
          let usuariosPapelera = this.state.usuariosPapelera
          usuariosPapelera.push(item)
          
          this.setState({apiActualizada: usuarios, usuariosPapelera: usuariosPapelera})
          const jsonUsuariosBorrados = JSON.stringify(this.state.usuariosPapelera);
          await AsyncStorage.setItem("UsuariosBorrados", jsonUsuariosBorrados);
         
       }
       catch(e){
          console.log(e)
      }
    }

    verDetalle(usuario){
      this.setState({ showModalDetalle: !this.state.showModalDetalle, itemSeleccionado: usuario })
      console.log(this.state.itemSeleccionado)
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
    }

    cerrarDetalle(tarjeta){
      this.setState({showModalDetalle: false, itemSeleccionado: tarjeta})
    }

renderItem = ({item}) => {
  
      return (
      <TarjetasViewImportedCards 
                          item = {item}  
                          verDetalle = {this.verDetalle.bind(this, item)}
                          storeUsuariosBorrados = {this.storeUsuariosBorrados.bind(this, item)}
                          >                 
      </TarjetasViewImportedCards>
              )
  }
  
keyExtractor = (item, idx) => idx.toString();

  render() {
   
    return(

          <View style = {styles.view}> 
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
              <TouchableOpacity onPress={ this.getData.bind(this) }>
                <View style = { styles.button }> 
                  <Text style = { styles.buttonText }>
                    ACTUALIZAR USUARIOS IMPORTADOS
                  </Text>
                </View>
              </TouchableOpacity>
              <Modal_verDetalle showModalDetalle = {this.state.showModalDetalle} cerrarDetalle={this.cerrarDetalle.bind(this, this.state.itemSeleccionado)} itemSeleccionado = {this.state.itemSeleccionado} ></Modal_verDetalle>
            </View>
        )}
        
}

export {Screen_ViewImportedCards};