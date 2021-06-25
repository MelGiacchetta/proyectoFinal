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
                item: null,
            }
    this.storeInformacion = this.storeInformacion.bind(this)
    }

async storeInformacion(comentario, item){
    
    if(item == this.props.itemSeleccionado && comentario !== null){
     this.setState({comentarios: comentario})
        console.log(this.state.text)
        
            try{
                const jsonComentarios = JSON.stringify(this.state.comentarios);
                await AsyncStorage.setItem("Comentarios", jsonComentarios);
        
            }catch(e){
                console.log(e)
            }}else{
                console.log("no hay informaciona adicional")
            }
        
}

async getInformacion(comentariosUsuario, item){
    
    if(item == this.props.itemSeleccionado && comentariosUsuario !== null){

            let comentarios = this.state.comentarios

        this.setState({comentarios: comentarios.concat(comentariosUsuario)})
        

      try {
        const comentarios = await AsyncStorage.getItem("Comentarios");
        if (comentarios !== null){
        this.setState({comentarios: comentarios})
          this.setState({comentarios: JSON.parse(comentarios)})
          
        } else {
          console.log("no hay comentarios")
        }
        } catch(e){
        console.log(e)
        }} else {
            console.log("no hay comentarios")
        }
    } 

render() {
return(
   <Modal visible= {this.props.showModalDetalle} animationType= "slide" transparent= {true} >
       <View style= {styles.modalContenedor}>
           <View style= {styles.verModal}>
           <TouchableOpacity style= {styles.borrar2} onPress = {  this.props.cerrarDetalle }>
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
             <Text style={styles.comentarios}>{this.props.itemSeleccionado == this.state.item ? this.state.comentarios : []}</Text>
          <TextInput style = {styles.comentarInput} onChangeText={value => this.setState({text: value, item: this.props.itemSeleccionado})} placeholder="Agregar información...">
          </TextInput>
          <TouchableOpacity onPress={this.storeInformacion.bind(this, this.state.text, this.state.item)}>
            <Text>
                Agregar información
            </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={this.getInformacion.bind(this, this.state.text, this.state.item)}>
            <Text>
                Actualizar comentarios
            </Text>
        </TouchableOpacity> */}
           </View>
       </View>
   </Modal>
)
}
}
export  {Modal_verDetalle};