import React from 'react';
import { Component } from 'react';
import Tarjeta from './Tarjeta';

class Tarjetas extends Component {
    constructor(){
      super();
      this.state= {
          api:[], 
      }
    }
componentDidMount(){
    fetch("https://randomuser.me/api/?results=10")
    .then(result => result.json())
    .then(data =>{
        this.setState({api: data.results})
    })
    .catch((e) => console.log(e))
   }
   
render() {

return(
    <View> 
      <Text>Hola</Text>
    </View>
)
}
}
export default Tarjetas;