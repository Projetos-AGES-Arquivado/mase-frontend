import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class CadastroPlanoDeAcao extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <MenuButton navigation={this.props.navigation} />
            <Text style = {{
              margin: 14,
              fontSize: 25,
              fontWeight: '500',
              }}>Cadastro de Planos de Ação</Text>
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