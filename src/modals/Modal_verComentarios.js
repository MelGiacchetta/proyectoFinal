import React, { Component } from 'react';
import {Modal, View, Text} from 'react-native'
import styles from '../styles/Styles';


class Modal_verComentarios extends Component {
    constructor(props){
        super(props);
        this.state = {
         mostrarModal: this.props.showModalComentarios,
         itemSeleccionado: null,
        }
      }


render() {
console.log(this.props.showModalComentarios)
return(
   <Modal visible= {this.state.mostrarModal} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verModal}>
            {/* <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.name} </Text> */}
            <Text>Hola!</Text>
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verComentarios};