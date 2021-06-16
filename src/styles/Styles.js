import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      backgroundColor: "mistyrose",
    },
    

    title: {
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: 'plum'

    },

    button:{
      fontSize:18,
      textAlign:"center",
      padding:10,
      margin:20,
      borderRadius:30,
      borderStyle:"solid",
      backgroundColor: 'black',
      borderColor: 'white',
    },

    buttonText: {
      color: 'white',
      fontSize: 20,
    },

    textImport: {
      fontSize: 17,
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
        fontSize:15
    },

    card:{
      borderWidth: 2,
      height: 60, 
    }

    
})

export default styles