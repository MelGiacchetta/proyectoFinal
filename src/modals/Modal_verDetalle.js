import React, { Component } from 'react';
import {Modal, View, Text} from 'react-native'
import styles from '../styles/Styles';


class Modal_verDetalle extends Component {
    constructor(props){
        super(props);
        this.state = {
         mostrarModal: this.props.showModalDetalle,
         itemSeleccionado: null,
        }
      }


render() {
return(
   <Modal visible= {this.state.mostrarModal} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verModal}>
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.location.street.name} {this.state.itemSeleccionado && this.state.itemSeleccionado.location.street.number} </Text>
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.city}  {this.state.itemSeleccionado && this.state.itemSeleccionado.state} </Text>
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.country} </Text> 
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.postcode} </Text> 
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.registered.date} </Text> 
             <Text> {this.state.itemSeleccionado && this.state.itemSeleccionado.phone} </Text> 
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verDetalle};