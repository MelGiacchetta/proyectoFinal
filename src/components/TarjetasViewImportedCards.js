import React, { Component } from 'react';
import styles from '../styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Text, 
        TouchableOpacity, 
        View, 
        Image, 
        Animated, 
        TextInput,
        } from 'react-native'

class TarjetasImportadas extends Component {
  constructor(props){
    super(props);
    this.state = {
      toValue: 1.5,
      toValueBorrar: 0,
      comentarios: [],
      text: [],
    }
  }

  position = new Animated.Value(1);

    agrandarImagen = () => {
    
      Animated.timing(this.position, {
          toValue: this.state.toValue,
          duration: 200,
          useNativeDriver: true,
         
      }).start()
      this.setState({toValue : this.state.toValue == 1 ? 1.5 : 1})
    
    }

    


render(){
    return(
    <View style= { styles.tarjeta }>   
        <TouchableOpacity onLongPress = {this.agrandarImagen.bind(this, this.props.item)}> 
        <Animated.Image style= {[{ transform:[
                                {scale: this.position}
                                ] 
                                }, styles.imagen]} 
          source={{ uri:  this.props.item.picture.medium }}/>
       </TouchableOpacity> 
       <View style={styles.datos}>
        <Text style= { styles.texto }> { this.props.item.name.first } { this.props.item.name.last } </Text>
        <Text style= { styles.texto }> { this.props.item.email } </Text>
        <Text style= { styles.texto }> { this.props.item.dob.date } ({ this.props.item.dob.age }) </Text>
        <View style= { styles.iconos }>
          <TouchableOpacity onPress= {this.props.verComentarios}>
          <Image style= { styles.iconoComentar } source={{uri: "https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png" }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.verDetalle}>
            <Image style= { styles.iconoVerDetalle } source={{uri: "https://image.flaticon.com/icons/png/512/673/673132.png" }}/>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.borrarPapelera } onPress = { this.props.storeUsuariosBorrados }> 
              <Text style = { styles.buttonText }>BORRAR</Text>
          </TouchableOpacity>
          <Text></Text>
          
          
      </View>
        </View> 
    </View>
    )
    }
}
export default TarjetasImportadas;