import React from 'react';
import { StyleSheet, Text,TextInput,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class CadastroAreasDeRisco extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
          <Text style = {{
            margin: 14,
            fontSize: 25,
            fontWeight: '500',
          }}>Cadastro de Areas Risco</Text>
        <TextInput
          style={styles.input}
          placeholder='Endereço'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Latitude'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Longitude'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Grau de Risco'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Tipo Risco'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Area de Alcance'
          autoCapitalize="none"
          placeholderTextColor='white'
        />
        <View style = {styles.button}>
        <Button 
          color="#000000"
          title='Confirmar'
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
