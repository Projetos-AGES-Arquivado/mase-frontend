import React from 'react';
import { StyleSheet, TextInput,Text,Button, View, Image, ScrollView } from 'react-native';

import MenuButton from '../components/MenuButton'

class Perfil extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
    

						<Image style={styles.img} source={require('../assets/perfilAvatar.png')} />

        
        
        <MenuButton navigation={this.props.navigation} />
        <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Nome</Text>
            <Text>John Doe </Text>

          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>CPF</Text>
          <Text>032.833.000.51</Text>
          
          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Telefone</Text>
          <Text>(51) 3344-4697</Text>

          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Telefone</Text>
          <Text>(51) 3344-4697</Text>

          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>E-mail</Text>
          <Text>JoãoDoe@gmail.com</Text>

          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Tipo de Perfil</Text>
          <Text>Não voluntário</Text>

          <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Profissão</Text>
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
    marginTop: 20
  },
  img: {
    height: 85,
    width: 85,
    marginBottom: 20
  }
});

export default Perfil;