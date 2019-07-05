import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { MapView, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import { Marker } from 'react-native-maps'
import MenuButton from '../components/MenuButton'
//<View><MenuButton navigation={this.props.navigation} /></View>

const locations = require('/home/18103836/Área de Trabalho/mase-frontend/screens/locations.json');
export default class Mapa extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    locations: locations
  }
  
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => ('state:', this.state)),
      (error) => console.log('Error:', error)
)
    const { locations: [ sampleLocation ] } = this.state

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
  }, () => ('state:', this.state))
}
renderMarkers = () => {
  const { locations } = this.state
  return (
    <View>
      {
        locations.map((location, idx) => {
          const {
            center: { latitude, longitude }
          } = location
          return (
            <Marker
              key={idx}
              coordinate={{ latitude, longitude }}
            />
          )
        })
      }
    </View>
  )
}

  render() {
    const {latitude,
      longitude,
     
    } = this.state
  
    return (
    <View style={{flex:1}}>
      <MapView  
        showsUserLocation
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
         {this.renderMarkers()}
        </MapView>
      <View
    style={{
        position: 'absolute',
       
    }}
>
<MenuButton navigation={this.props.navigation} />
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
  menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	}
})
