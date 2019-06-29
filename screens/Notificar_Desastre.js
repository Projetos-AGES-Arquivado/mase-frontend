import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class Notificar_Desastre extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Notificar Desastre</Text>
        <TextInput
          style={styles.input}
          placeholder='Endereço'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Tipo Desastre'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Foto'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <View style = {styles.button}>
        <Button 
          color="#000000"
          title='Enviar Notificação'
        />
        </View>
        <View style = {styles.button}>
        <Button 
          color="#000000"
          title='Cancelar'
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#C0C0C0',
    margin: 14,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
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
