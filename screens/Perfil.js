import React from 'react';
import { StyleSheet, TextInput,Text,Button, View, Image, ScrollView } from 'react-native';

import MenuButton from '../components/MenuButton'

class Perfil extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <MenuButton navigation={this.props.navigation} />
        <Image style={styles.img} source={require('../assets/perfilAvatar.png')} />

        <Text style = {styles.textStyle}>Nome</Text>
            <Text>John Doe </Text>

        <Text style = {styles.textStyle}>CPF</Text>
          <Text>032.833.000.51</Text>
          
        <Text style = {styles.textStyle}>Telefone</Text>
          <Text>(51) 3344-4697</Text>

        <Text style = {styles.textStyle}>Telefone</Text>
          <Text>(51) 3344-4697</Text>

        <Text style = {styles.textStyle}>E-mail</Text>
          <Text>JoãoDoe@gmail.com</Text>

        <Text style = {styles.textStyle}>Tipo de Perfil</Text>
          <Text>Não voluntário</Text>

        <Text style = {styles.textStyle}>Profissão</Text>
          <Text>Bombeiro</Text>

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
    marginTop: 30
  },
  img: {
    height: 85,
    width: 85,
    marginBottom: 20,
    marginTop:15
  },
  textStyle: {
    margin: 14,
    fontSize: 25,
    fontWeight: '500',
  }
});

export default Perfil;