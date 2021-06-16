import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      backgroundColor: "whitesmoke",
      justifyContent: "center",
    },

    title: {
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    button:{
      fontSize:18,
      textAlign:"center",
      padding:4,
      margin:10,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'black',
      borderColor: 'white',
    },

    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: "center",
    },

    textImport: {
      fontSize: 17,
      textAlign: "center",
    },

    input:{
        borderWidth:2,
        borderStyle:"solid",
        borderRadius: 15,
        margin:10,
        paddingTop: 10,
        paddingBottom: 10, 
        fontSize: 20,
    },

    texto:{
        fontSize: 20,
        textAlign: "center",
    },

    card:{
      height: 500, 
    },

    tarjeta: {
      borderWidth: 2,
      backgroundColor: "lavender",
      padding: 10,
      margin: 5,
      borderRadius: 30,
    },

    nombres: {
      textAlign: "center",
      fontSize: 25,
    },

    acercaDe: {
      backgroundColor: "whitesmoke",
      flex: 1,
      justifyContent: "center",
    },

    imagen: {
      width: 100,
      height: 100,
      alignSelf: "center",
      borderRadius: 100,
    },

    drawerStyle : {
      backgroundColor: "black",
      width: 250,
    },
})

export default styles