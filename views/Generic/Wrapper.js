//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';

// create a component
class Wapper extends Component {
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
               <View style={styles.formContainer}>
                   {this.props.children}
               </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    header: {
        color: "#F8F9FF",
        fontSize: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F9FF',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        // position: 'absolute',
        width: 400,
        height: 150
    },
    formContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    }
});

//make this component available to the app
export default Wapper;