import React from 'react';
import { Component } from 'react';
import FlatList from './Screen_FlatList';
import {getData} from '../api/RandomUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiActualizada: [],
      }
    }

// componentDidMount() {
//   this.unscribe = this.props.navigation.addListener('focus', () => {
//     this.getData();
//   })
//   Alert.alert("Mount")
// }
// componentWillUnmount() {
//   this.unscribe();
// }

async getData(){
      try {
        const resultado = await AsyncStorage.getItem("Api");
        if (resultado !== null){
          this.setState({apiActualizada: JSON.parse(resultado)})
          console.log(this.state.apiActualizada)
        }else {
          console.log("no hay usuarios guardados")
        }
 
       
      } catch(e){
        console.log(e)
      }
    }
    
render() {
  renderItem = ({item}) => {
    return (
    <View style = {styles.card}>
        <Text style={styles.texto}>Los usuarios son: {item.name.first} {item.name.last} {item.picture.medium} {item.email} ({item.dob.age}) </Text>
    </View>
            )
}
  //  const values = this.state.apiActualizada.map(item =>
  //       <Text key = {item.login.uuid} style={{fontSize:15}}> {item.name.first} {item.name.last} </Text>
  //       )
        return(
            <View style={styles.view}>
              <Text style={styles.titile}>Usuarios</Text>
              <TouchableOpacity  onPress={ this.getData.bind(this) }>
                <View style = {styles.button}> 
                  <Text>
                    Recuperar usuarios importados
                  </Text>
                  {/* <Text style={styles.card}>
                    {values}
                  </Text> */}
                  <FlatList
                      data = {this.state.apiActualizada}
                      keyExtractor = {this.keyExtractor}
                      renderItem = {this.renderItem}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress = {()=> this.setState({apiActualizada: []})}>
                <View style = {styles.button}>
                  <Text >
                    Borrar todos los datos
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
            
            
        )

        };
        
}

const styles = StyleSheet.create ({

  view:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lavender",
  },
  
  titile:{
    fontSize:30
  },
  texto:{
    fontSize:15
  },


  button:{
    fontSize:15,
    textAlign:"center",
    padding:10,
    margin:20,
    borderRadius:30,
    borderStyle:"solid",
  },

  imput:{
      borderWidth:2,
      borderStyle:"solid",
      borderRadius:10,
      margin:10,
  },


})


export {Screen_ViewImportedCards};