import React, { Component } from 'react';
import {Text, 
        TouchableOpacity, 
        View, 
        Image, 
        } from 'react-native'
import styles from '../styles/Styles';


class TarjetasPapelera extends Component {
  constructor(props){
    super(props);
}

render(){
    return(
        <View style= { styles.tarjeta }>
        <Image style= { styles.imagen } source={{ uri: this.props.item.picture.medium }}/>
        <Text style= { styles.texto }> { this.props.item.name.first } { this.props.item.name.last } </Text>
        <Text style= { styles.texto }> { this.props.item.email } </Text>
        <Text style= { styles.texto }> { this.props.item.dob.date } ({ this.props.item.dob.age }) </Text>
        <TouchableOpacity style={ styles.borrarPapelera } onPress = { this.props.borrarDefinitivamente }>
       <Text style = { styles.buttonText }>Borrar definitivamente</Text>
       </TouchableOpacity>
    </View>
    )
}
}
export default TarjetasPapelera;