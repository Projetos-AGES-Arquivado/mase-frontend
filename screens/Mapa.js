import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
//import { MapView, Permissions } from 'expo';
import MenuButton from '../components/MenuButton'
//<View><MenuButton navigation={this.props.navigation} /></View>

export default class Mapa extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />

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
