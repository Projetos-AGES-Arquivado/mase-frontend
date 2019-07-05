import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class Envio_Notificacao_Voluntario extends React.Component {
    render() {
        return (
    <View style={styles.container}>
            <MenuButton navigation={this.props.navigation} />
            <Text style = {{
              margin: 14,
              fontSize: 25,
              fontWeight: '500',
              }}>Houve um desastre no local:{this.location.nome} do tipo {this.location.disasterType}</Text>
	
    <View style = {styles.button}>
	<Button 
        color="#000000"
        title='Confirmar Presença'
        />
        </View>
        <View style = {styles.button}>
        <Button
          color="#000000"
          title='Cancelar'
            onPress={this.voltaMenu}
        />
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