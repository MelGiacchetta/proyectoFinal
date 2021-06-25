import React from 'react';
import { Component } from 'react';
import { Screen_ViewImportedCards } from './src/screens/Screen_ViewImportedCards';
import { Screen_Import } from './src/screens/Screen_Import';
import { Screen_AcercaDe } from './src/screens/Screen_AcercaDe';
import { Screen_Papelera } from './src/screens/Screen_Papelera';
import { Screen_ModificarTarjetas } from './src/screens/Screen_ModificarTarjetas';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './src/styles/Styles';

const Drawer = createDrawerNavigator();

class App extends Component {

render() {

return(
   <NavigationContainer>
      <Drawer.Navigator drawerType= "slide" drawerPosition = "left" overlayColor = "paleturquoise" 
      drawerStyle= { styles.drawerStyle }
       drawerContentOptions = {{
      activeTintColor: "black",
      backgroundColor: "black",
      activeBackgroundColor: "lightcyan",
      inactiveBackgroundColor: "black",
      itemStyle: {borderRadius: 50, backgroundColor: "lightcyan"}
      }}
     >
       <Drawer.Screen name = "Importar tarjetas" component = {Screen_Import} options = {{title: "Importar tarjetas"}}/>
       <Drawer.Screen name = "Ver tarjetas importadas" component = {Screen_ViewImportedCards} options = {{title: "Tarjetas importadas"}}/>
       <Drawer.Screen name = "Papelera de reciclaje" component = {Screen_Papelera} options = {{title: "Papelera de reciclaje"}}/>
       <Drawer.Screen name = "Acerca de ..." component = {Screen_AcercaDe} options = {{title: "Acerca de"}}/>
       </Drawer.Navigator>
   </NavigationContainer>
)
}
}
export default App;
