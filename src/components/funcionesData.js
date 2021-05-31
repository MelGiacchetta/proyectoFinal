// arreglar esto. 
async getData(){
    try{
      const resultado = await AsyncStorage('Api'); 
      this.setState({importedApi: JSON.parse(resultado)})
    }
    catch(e){
      console.log(e)
    }
  }

