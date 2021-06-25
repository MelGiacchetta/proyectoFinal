import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal, 
        View, 
        Text, 
        TouchableOpacity, 
        TextInput} from 'react-native'
import styles from '../styles/Styles';


class Modal_verComentarios extends Component {
    constructor(props){
        super(props);
        this.state = {
         mostrarModal: this.props.showModalComentarios,
         itemSeleccionado: this.props.itemSeleccionado,
         comentarios: []
        }
      }

      guardarComentario(comentario){
        let comentarios = this.state.comentarios.push(comentario)
        this.setState({comentarios: comentarios})
        console.log("hola")
      }

      async storeComentarios(){
        
        try{

          const jsonComentarios = JSON.stringify(this.state.comentarios);
          await AsyncStorage.setItem("Comentarios", jsonComentarios);
        }
        catch(e){
          console.log(e)
        }
    }

render() {
return(
   <Modal visible= {this.state.mostrarModal} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verModal}>
            <Text>Comentarios: {this.state.comentarios}</Text>
            <Text></Text>
            <TextInput style={styles.input} onChangeText={text => this.guardarComentario(this, text)} placeholder = "Agregar comentario..."></TextInput>
            <TouchableOpacity style={styles.button} onPress= {this.storeComentarios.bind(this, this.state.comentarios)}>
                <Text style={styles.buttonText}>
                    COMENTAR
                </Text>
            </TouchableOpacity>
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verComentarios};