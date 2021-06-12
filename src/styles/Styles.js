import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    view:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "lavender",
    },
    
    title:{
      fontSize:30
    },

    button:{
      fontSize:18,
      textAlign:"center",
      padding:10,
      margin:20,
      borderRadius:30,
      borderStyle:"solid",
    },

    input:{
        borderWidth:2,
        borderStyle:"solid",
        borderRadius:10,
        margin:10,
    },

    texto:{
        fontSize:15
      },

    card:{
        backgroundColor:"mistyrose",
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:1,
        margin:5,
      },
})

export default styles