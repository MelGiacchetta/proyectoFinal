import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_ViewImportedCards } from './src/screens/Screen_ViewImportedCards';
import { Screen_Import } from './src/screens/Screen_import';
import { Screen_AcercaDe } from './src/screens/Screen_AcercaDe';
import { Screen_Papelera } from './src/screens/Screen_Papelera';
import { Screen_ModificarTarjetas } from './src/screens/Screen_ModificarTarjetas';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  Text,
  View,
  Button,
} from 'react-native';


const Drawer= createDrawerNavigator();

class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        contador: 0,
      }
    }

render() {

return(
   <NavigationContainer>
      <Drawer.Navigator drawerType= "slide" drawerPosition = "left" overlayColor = "blue" 
     drawerStyle = {{
         backgroundColor: "rojo",
        width: 250
      }}
       drawerContentOptions = {{
        activeTintColor: "white",
         activeBackgroundColor: "blue",
        inactiveBackgroundColor: "black",
        itemStyle: {borderRadius: 100, backgroundColor: "yellow"}
      }}
     >
       <Drawer.Screen name="Importar tarjetas" component= {Screen_Import} options = {{title: "Importar tarjetas"}}/>
       <Drawer.Screen name="Ver tarjetas importadas" component= {Screen_ViewImportedCards} options = {{title: "Tarjetas importadas"}}/>
       <Drawer.Screen name="Modificar tarjetas" component= {Screen_ModificarTarjetas} options = {{title: "Modificar Tarjetas"}}/>
       <Drawer.Screen name="Papelera de reciclaje" component= {Screen_Papelera} options = {{title: "Papelera de reciclaje"}}/>
       <Drawer.Screen name="Acerca de ..." component= {Screen_AcercaDe} options = {{title: "Acerca de"}}/>
       </Drawer.Navigator>
   </NavigationContainer>
  //  <Screen_Import></Screen_Import>
    // <Screen_ViewImportedCards></Screen_ViewImportedCards>
    // <Screen_FlatList></Screen_FlatList>
)
}
}
export default App;
