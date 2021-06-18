import React, { Component } from 'react';
import {Modal, View, Text} from 'react-native'
import styles from '../styles/Styles';


class Modal_verDetalle extends Component {
    constructor(props){
        super(props);
        this.state = {
         mostrarModal: this.props.showModal,
         itemSeleccionado: null,
        }
      }


render() {
console.log(this.props.showModal)
return(
   <Modal visible= {this.props.showModal} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verDetalle}>
            <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.name} </Text>
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verDetalle};