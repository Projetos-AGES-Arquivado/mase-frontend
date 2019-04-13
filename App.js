import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login/index'
import Route from "./views/routes/index"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { Route() }
        {/* <Login/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
