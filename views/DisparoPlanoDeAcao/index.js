import React from 'react';
import { StyleSheet, TextInput,Text,Button, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class DisparoPlanoDeAcao extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <MenuButton navigation={this.props.navigation} />
            <Text style = {{
            margin: 14,
            fontSize: 25,
            fontWeight: '500',
             }}>Planos de Ação</Text>
             <View style = {styles.button}>
            <Button 
            color="#000000"
            title='Plano 1'
            />
            </View>
            <View style = {styles.button}>
            <Button 
            color="#000000"
            title='Plano 2'
            />
            </View>
            <View style = {styles.button}>
            <Button 
            color="#000000"
            title='Plano 3'
            />
            </View>
            <View style = {styles.button}>
            <Button 
            color="#000000"
            title='Plano 4'
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