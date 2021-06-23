import React, { Component } from 'react';
import {Text, 
        TouchableOpacity, 
        View, 
        Image, 
        FlatList,} from 'react-native'
import styles from '../styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

   //  async borrarDefinitivamente1(item){
      

   //    try{
   //       const jsonBorradosDefinitivamente = JSON.stringify(this.state.usuariosPapelera);
   //       await AsyncStorage.setItem("BorradosDefinitivamente", jsonBorradosDefinitivamente);
   //     // Alert.alert("Datos guardados correctamente.");
   //   }
   //   catch(e){
   //       console.log(e)
   //   }
   //  }

    async borrarDefinitivamente(idTarjeta) {
      
      let usuarios = this.state.usuariosPapelera.filter((usuarios)=>{
         return usuarios.login.uuid !== idTarjeta
             })

      this.setState({usuariosPapelera: usuarios})
      console.log(idTarjeta)

      try {
         this.state.usuariosPapelera.splice(idTarjeta, 1);
         await AsyncStorage.setItem("UsuariosBorrados",JSON.stringify(this.state.usuariosPapelera))
         this.setState({ usuariosPapelera: JSON.parse(await AsyncStorage.getItem("UsuariosBorrados")) })
 
       } catch (error) {
         console.log(error);
       }
   };

    renderItem = ({item}) => {
  
      return (
      <View style= { styles.tarjeta }>
          <Image style= { styles.imagen } source={{ uri:  item.picture.medium }}/>
          <Text style= { styles.texto }> { item.name.first } { item.name.last } </Text>
          <Text style= { styles.texto }> { item.email } </Text>
          <Text style= { styles.texto }> { item.dob.date } ({ item.dob.age }) </Text>
          <TouchableOpacity style={ styles.borrarPapelera } onPress = { this.borrarDefinitivamente.bind(this, item.login.uuid) }>
         <Text style = { styles.buttonText }>Borrar definitivamente</Text>
         </TouchableOpacity>
      </View>
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
      <View>
         <TouchableOpacity style={styles.button} onPress={this.getContactosBorrados.bind(this)}>
            <Text style={styles.buttonText}>
               Actualizar contactos borrados
            </Text>
         </TouchableOpacity>
      </View>
   </View>

)
}
}
export  {Screen_Papelera};