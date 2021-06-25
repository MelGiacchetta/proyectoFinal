import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      backgroundColor: "lightcyan",
      justifyContent: "center",
    },

    secondView: {
      top: 35
    },

    title: {
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 20,
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

    textImportVisibles: {
      fontSize: 20,
      textAlign: "center",
    },

    textImportImportados: {
      fontSize: 20,
      textAlign: "center",
      bottom: 20,
      backgroundColor: "lightcyan"
    },

    input:{
        borderWidth:2,
        borderStyle:"solid",
        borderRadius: 15,
        margin:10,
        paddingTop: 10,
        paddingBottom: 10, 
        fontSize: 20,
        textAlign: "center",
    },

    texto:{
        fontSize: 20,
        textAlign: "center",
        color: 'black',
        marginTop: 10,
    },

    card:{
      height: 500, 
    },

    borrar:{
      fontSize:18,
      position:"absolute",
      marginLeft:330,
      padding:5,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'red',
      borderColor: 'white',
    },

    borrar2:{
      fontSize:18,
      position:"relative",
      marginLeft:330,
      padding:5,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'red',
      borderColor: 'white',
    },

    acercaDe: {
      backgroundColor: "lightcyan",
      flex: 1,
      justifyContent: "center",
    },

    tarjeta:{ 
      borderWidth:2,
      borderStyle:"solid",
      padding:30,
      margin:10,
      borderRadius:30,
      backgroundColor:"lavender",
    },

    imagen:{
      width: 100,
      height: 100,
      borderRadius: 100,
      alignSelf: "center",
    },

    drawerStyle : {
      backgroundColor: "black",
      width: 250,
    },
    
    iconoComentar: {
      width: 50,
      height: 50,

    },

    iconoVerDetalle: {
      width: 45,
      height: 45,

    },
    
    iconos: {
      flexDirection: "row",
      marginTop: 10,
      alignSelf: "center"
    },

    modalContenedor: {
      justifyContent: "center", 
      alignItems: "center",
      flex: 1,
    },
 
    verModal: {
      fontSize: 30,
      textAlign: "center",
      backgroundColor: "lightcyan",
      height: 400,
      width: 400,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      borderWidth: 1,
      borderStyle:"solid",
      elevation: 20, 
      shadowColor: "black",
    },

    borrarPapelera: {
      fontSize:18,
      textAlign:"center",
      padding:4,
      margin:10,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'red',
      borderColor: 'white',
    },

    programacion: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      margin: 25,
      fontStyle: "italic",
    },

    nombres: {
      fontSize: 14,
      textAlign: "center",
      margin: 20,
    },

    introduccion: {
      fontSize: 18,
      textAlign: "center",
      margin: 20,
    },

    iconosAcercaDe: {
      width: 150,
      height: 150,
      flexDirection: "row",
      marginTop: 10,
      alignSelf: "center",
    },
    
    nosotras: {
      fontSize: 40,
      textAlign: "center",
      fontWeight: "bold",
    }, 

    datos: {
      top: 20,
    },

    buttonAnimate: {
      backgroundColor: "lavender",
      width: "70%",
      borderRadius: 30,
      borderColor: "black",
      borderWidth: 2,
      alignSelf: "center",
    },

    textButtonAnimate: {
      color: "black",
      textAlign: "center",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20, 
      paddingRight: 20,
      fontSize: 15,
     
    },

    comentarInput: {
      borderWidth: 2,
      borderStyle:"solid",
      borderRadius: 15,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 50,
      paddingLeft: 50,
      fontSize: 20,
      textAlign: "center",
    }, 

    comentarios: {
      paddingLeft: 50, 
      paddingRight: 50, 
      paddingTop: 10, 
      paddingBottom: 10, 
    }

})

export default styles