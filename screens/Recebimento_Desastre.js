import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

getDataUsingGet= () => {
    fetch('http://www.hml.ages.pucrs.br:8380/', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        JSON.parse(responseJson);
        console.log(responseJson);
    })
    .catch((error) => {
        JSON.stringify(error);
        console.error(error);
    });
  }
export default class Recebimento_Desastre extends React.Component {
    render() {
        return (
    <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
            <Text style = {{
              margin: 14,
              fontSize: 25,
              fontWeight: '500',
              }}>{this.information}</Text>
          
    <View style = {styles.button}>
	    <Button 
        color="#000000"
        title='Ativar Plano de Ação'
	    onPress={this.telaPlanos}/>
        </View>
        <View style = {styles.button}>
        <Button
          color="#000000"
          title='Cancelar'
          onPress={this.voltaMenu}/>
        </View>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
     button:{
        width: "90%", 
        margin: 10, 
    }
  })