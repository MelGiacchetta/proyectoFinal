import React, { Component } from 'react';
import {Text, 
        TouchableOpacity, 
        View, 
        FlatList,
        } from 'react-native'
import styles from '../styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarjetasPapelera from '../components/TarjetasPapelera'

class Screen_Papelera extends Component {
   constructor(props){
      super(props);
      this.state = {
        usuariosPapelera: [],
      }
    }

   async getContactosBorrados(){
      try {
        const resultado = await AsyncStorage.getItem("UsuariosBorrados");
        if (resultado !== null){
          this.setState({usuariosPapelera: JSON.parse(resultado)})
          
        } else {
          console.log("no hay usuarios borrados")
        }
        } catch(e){
        console.log(e)
        }
    }

    async borrarDefinitivamente(idTarjeta) {
   
      let usuarios = this.state.usuariosPapelera.filter((usuarios)=>{
         return usuarios.login.uuid !== idTarjeta
             })

      let usuariosBorradosDefinitivamente = this.state.usuariosPapelera.filter((usuarios)=>{
         return usuarios.login.uuid == idTarjeta
             })

      this.setState({usuariosPapelera: usuarios, usuariosBorradosDefinitivamente: usuariosBorradosDefinitivamente})
      console.log(idTarjeta)

      try {
         this.state.usuariosPapelera.splice(idTarjeta, 1);
         await AsyncStorage.setItem("UsuariosBorrados", JSON.stringify(this.state.usuariosPapelera))
         this.setState({ usuariosPapelera: JSON.parse(await AsyncStorage.getItem("UsuariosBorrados")) })

         await AsyncStorage.setItem("UsuariosBorradosDefinitivamente", JSON.stringify(this.state.usuariosBorradosDefinitivamente))
         this.setState({ usuariosBorradosDefinitivamente: JSON.parse(await AsyncStorage.getItem("UsuariosBorradosDefinitivamente")) })
 
       } catch (error) {
         console.log(error);
       }
   };

    renderItem = ({item}) => {
  
      return (
      <TarjetasPapelera item = {item} borrarDefinitivamente = {this.borrarDefinitivamente.bind(this, item.login.uuid)}></TarjetasPapelera>
              )
  }
  
keyExtractor = (item, idx) => idx.toString();

render() {

return(
   <View style= {styles.acercaDe}>
      <Text style={styles.title}> PAPELERA DE RECICLAJE </Text>
      <FlatList style= {styles.card}
                      data = {this.state.usuariosPapelera}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
              />
         <TouchableOpacity style={styles.button} onPress={this.getContactosBorrados.bind(this)}>
            <Text style={styles.buttonText}>
               Actualizar contactos borrados
            </Text>
         </TouchableOpacity>
   </View>

)
}
}
export  {Screen_Papelera};