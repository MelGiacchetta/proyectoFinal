import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Styles';
// import Animated from 'react-native-reanimated';

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  FlatList,
  Image,
} from 'react-native';

class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state= {
       api: [],
       cantidadElegida: 0,
       cantidadImportada: 0,
       tarjetasImportadas: [],
       
      }
    }

//  async componentDidMount(){
//   await AsyncStorage.removeItem("Api")
//    }

// async storeData(){
//         try{
  
//             let resultado = await AsyncStorage.getItem('item');
//             console.log(resultado)
//             resultado = JSON.parse(resultado)
//             if (resultado == null) resultado = []
//             this.state.tarjetasImportadas.map(data=>{ 
//               resultado.push(data)
//             })
//             const jsonApi = JSON.stringify(resultado);
//             await AsyncStorage.setItem('item', jsonApi);
           
//           // Alert.alert("Datos guardados correctamente.");
//         }
//         catch(e){
//             console.log(e)
//         }
//     }

    async storeData(item){
      let tarjetasImportadas = this.state.tarjetasImportadas
      tarjetasImportadas.push(item)

      let usuariosNoImportados = this.state.api.filter((usuarios)=>{
        return usuarios !== item
      })

      this.setState({tarjetasImportadas: tarjetasImportadas, api: usuariosNoImportados})
     
      try{
        
        const jsonTarjetasImportadas = JSON.stringify(this.state.tarjetasImportadas);
        await AsyncStorage.setItem("Usuarios", jsonTarjetasImportadas);
      // Alert.alert("Datos guardados correctamente.");
    }
    catch(e){
        console.log(e)
    }
    
  }

  //   async importar(){
  //     try{
  //         const result = await AsyncStorage.getItem('usuario')
  //         this.setState({tarjetasImportadas: JSON.parse(result)})
  //         console.log(this.state.tarjetasImportadas)
  //     } catch(e){
  //         console.log(e);
  //     }

  // }

verTarjetas(){
  fetch("https://randomuser.me/api/?results=" + this.state.cantidadElegida)
  .then(result => result.json())
  .then(data =>{
      this.setState({api: data.results, cantidadImportada: this.state.cantidadElegida})

  })
  .catch((e) => console.log(e))
}

// importarTarjeta(idTarjeta){
//   let tarjetasImportadas = this.state.tarjetasImportadas.push(()=>{
//     return this.state.api.login.uuid === idTarjeta
//     })
//     this.setState({tarjetasImportadas: tarjetasImportadas})
//     console.log(tarjetasImportadas)
//   }

// position = new Animated.Value(0);
// rotation = new Animated.Value(0);

// topDown = () => {
//   // Animated.timing(this.position, {
//   //   tovalue: 300,
//   //   duration: 1000,
//   //   useNativeDriver: true,  
//   // }).start();
//   Animated.timing(this.rotation, {
//     toValue: 1,
//     duration: 1000,
//     useNativeDriver: true
//   }).start();
// }

/* <Animated.View style= { {
            width: 60,
            height: 100,
            backgroundColor: "grey",
            backfaceVisibility: 'true',
            position: "absolute",
            transform: [
                {translateY: this.position},
                {rotateX: rot}
            ]
            }
            }>
</Animated.View> */
renderItem = ({item}) => {
  return (
  <View style= {styles.tarjeta}>
      <Image style= { styles.imagen } source={{uri:  item.picture.medium }}/>
      <Text style= { styles.texto }> { item.name.first } { item.name.last } </Text>
      <Text style= { styles.texto }> { item.email } </Text>
      <Text style= { styles.texto }> {item.dob.date} ({ item.dob.age }) </Text>
      <TouchableOpacity style={styles.button} onPress={this.storeData.bind(this, item)} >
        <Text style={styles.buttonText}>
          IMPORTAR
        </Text>
      </TouchableOpacity>
  </View>
          )
}

keyExtractor = (item, idx) => idx.toString();

render() {
  // const rot = this.rotation.interpolate({
  //   inputRange: [0,1],
  //   outputRange: ['0deg', '180deg']
  // })

return(
  
  <View style = {styles.view}>
    <View style = {styles.secondView}>
      <Text style={styles.title}>¿Cuántas tarjetas deseas ver?</Text>
      <TextInput style={styles.input} onChangeText={text => this.setState({cantidadElegida : text})} placeholder="Cantidad de usuarios que quiero ver..."></TextInput>
      
        {/* <TouchableOpacity onPress = {this.importarTarjetas.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } onPress = {this.cantidadImportada.bind(this)}>IMPORTAR</Text>
            </View>
        </TouchableOpacity> */}
        <TouchableOpacity style= {styles.button} onPress={this.verTarjetas.bind(this)}>
          <Text style= {styles.buttonText}>VER</Text>
        </TouchableOpacity>
      <Text style = {styles.textImportVisibles}> USUARIOS VISIBLES: {this.state.api.length}</Text>
      <FlatList style= {styles.card}
                      data = {this.state.api}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
      />
     
      {/* <TouchableOpacity  onPress = {this.storeData.bind(this)}>
            <View style={styles.button}>
                <Text style = { styles.buttonText } > GUARDAR </Text>
              </View>
      </TouchableOpacity> */}
      <Text style = {styles.textImportImportados}> USUARIOS IMPORTADOS: {this.state.tarjetasImportadas.length}</Text>
      </View>
  </View>
)}

}
export {Screen_Import};