import React from 'react';
import {
 StyleSheet,
 TextInput,
 Text,
 Button,
 Image,
 View,
 ScrollView
} from 'react-native';

import MenuButton from '../components/MenuButton'

export default class Cadastro_Planos_de_Acao extends React.Component {
 render() {
   return (
     <ScrollView>
       <View style={styles.container}>
         <MenuButton navigation={this.props.navigation} />
         <Text style={{
           margin: 14,
           fontSize: 25,
           fontWeight: '500',
           paddingTop: 75,
         }}>Cadastro de Plano de Ação</Text>

         <View style={styles.imgView}>
           <Image style={styles.img} source={require('../assets/hospital.png')} />
           <Text style={styles.textStyle}> Médicos</Text>
         </View>

         <TextInput keyboardType='numeric'
           style={styles.input}
           placeholder='Insira a quantidade de médicos'
           autoCapitalize="none"
           placeholderTextColor='white'
         />

         <View style={styles.imgView}>
           <Image style={styles.img} source={require('../assets/firefighter.png')} />
           <Text style={styles.textStyle}> Bombeiros</Text>
         </View>

         <TextInput keyboardType='numeric'
           style={styles.input}
           placeholder='Insira a quantidade de bombeiros'
           autoCapitalize="none"
           placeholderTextColor='white'
         />

         <View style={styles.imgView}>
           <Image style={styles.img} source={require('../assets/vehicle.png')} />
           <Text style={styles.textStyle}> Veículos</Text>
         </View>

         <TextInput keyboardType='numeric'
           style={styles.input}
           placeholder='Insira a quantidade de veículos'
           autoCapitalize="none"
           placeholderTextColor='white'
         />

       </View>
     </ScrollView>
   )
 }
}
const styles = StyleSheet.create({
 input: {
   width: 350,
   height: 55,
   backgroundColor: '#C0C0C0',
   margin: 14,
   padding: 8,
   color: 'black',
   fontSize: 18,
   fontWeight: '500',
 },
 textStyle: {
   fontSize: 20,
   fontWeight: '300',
   textAlignVertical: "center",
   textAlign: "center",
   paddingLeft: 20
 },
 imgView: {
   flex: 1,
   paddingLeft: 20,
   paddingRight: 20,
   flexDirection: 'row',
   justifyContent: 'center'
 },
 img: {
   height: 70,
   width: 70,
   borderRadius: 50,
 },
 container: {
   flex: 1,
   backgroundColor: '#FFFFFF',
   alignItems: 'center',

 }
})