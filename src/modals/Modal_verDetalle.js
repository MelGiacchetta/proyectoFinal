import React, { Component } from 'react';
import styles from '../styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Modal, 
        View, 
        Text, 
        TouchableOpacity, 
        TextInput} from 'react-native'


class Modal_verDetalle extends Component {
    constructor(props){
        super(props);
            this.state={
                comentarios: [], 
                text: null,
            }
    this.storeInformacion = this.storeInformacion.bind(this)
    }
async storeInformacion(){

        let comentarios = this.state.comentarios
        comentarios.push(this.state.text + " ")
            this.setState({comentarios: comentarios})

            try{
                const jsonComentarios = JSON.stringify(this.state.comentarios);
                await AsyncStorage.setItem("Comentarios", jsonComentarios);
        
            }catch(e){
                console.log(e)
            }
    
}

async getInformacion(comentariosGuardados){
    
      let comentarios = this.state.comentarios.filter((comentario)=>{
          return comentariosGuardados == comentarios
      })
      try {
        const comentarios = await AsyncStorage.getItem("Comentarios");
        if (comentarios !== null){
          this.setState({comentarios: JSON.parse(comentarios)})
          
        } else {
          console.log("no hay comentarios")
        }
        } catch(e){
        console.log(e)
        }
    } 

render() {
return(
   <Modal visible= {this.props.showModalDetalle} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verModal}>
           <TouchableOpacity style= {styles.borrar2} onPress = {  this.props.cerrarDetalle.bind(this)}>
                <Text style = { styles.buttonText }>X</Text>
          </TouchableOpacity>
          <Text style={styles.title}>DETALLE DEL CONTACTO</Text>
          <Text></Text>
             <Text> Street: {this.props.itemSeleccionado && this.props.itemSeleccionado.location.street.name} ({this.props.itemSeleccionado && this.props.itemSeleccionado.location.street.number}) </Text>
             <Text> City/State: {this.props.itemSeleccionado && this.props.itemSeleccionado.location.city} - {this.props.itemSeleccionado && this.props.itemSeleccionado.location.state} </Text>
             <Text> Country: {this.props.itemSeleccionado && this.props.itemSeleccionado.location.country} </Text> 
             <Text> Postcode: {this.props.itemSeleccionado && this.props.itemSeleccionado.location.postcode} </Text> 
             <Text> Register date: {this.props.itemSeleccionado && this.props.itemSeleccionado.registered.date} </Text> 
             <Text> Phone: {this.props.itemSeleccionado && this.props.itemSeleccionado.phone} </Text> 
             <Text style={styles.comentarios}>{this.props.itemSeleccionado && this.state.comentarios}</Text>
          <TextInput style = {styles.comentarInput} onChangeText={value => this.setState({text: value})} placeholder="Agregar información...">
          </TextInput>
          <TouchableOpacity onPress={this.storeInformacion.bind(this, this.props.itemSeleccionado)}>
            <Text>
                Agregar información
            </Text>
        </TouchableOpacity>
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verDetalle};