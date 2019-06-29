import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from "./views/routes/index"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { Route() }
      </View>
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
