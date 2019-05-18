//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import Wapper from '../Generic/Wrapper';

// create a component
class Login extends Component {
    render() {
        return (
            <Wapper>
                <LoginForm/>
            </Wapper>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    header: {
        color: "#d3d3d3",
        fontSize: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,
        borderRadius: 1000
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;