import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class DadosPerfil extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style = {{
          margin: 14,
          fontSize: 25,
          fontWeight: '500',
          }}>Perfil</Text>
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
  }
})
