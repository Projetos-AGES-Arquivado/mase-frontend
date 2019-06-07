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

//make this component available to the app
export default Login;