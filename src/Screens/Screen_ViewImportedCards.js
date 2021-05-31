import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state= {
       importedApi: [],
      }
    }
    
    render() {
        const values = this.state.importedApi.map(item=>
            <Text key={item.login.uuid} 
                  style={{fontSize: 20}}>{item.name.first}</Text>
            )
        return(
            <View>
              <Text>aca mostramos los valores importados</Text>
              {values}
              <TouchableOpacity onPress={ this.getData.bind(this) }>
                <View> 
                  <Text>Recuperar datos</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            
        )
        }
}
export {Screen_ViewImportedCards};