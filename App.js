import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import Route from "./views/routes/index"

export default class App extends React.Component {
  render() {
    var drawer = (
      <View style={{ flex: 1, backgroundColor: '#91c988' }}>
        <Text style={{ margin: 20, fontSize: 15, textAlign: 'left' }}>Your buttons here</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid renderNavigationView={() => drawer}>
        <View style={styles.container}>
          {Route()}
          {/* <Login/> */}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F9F5E6'
  },
});
