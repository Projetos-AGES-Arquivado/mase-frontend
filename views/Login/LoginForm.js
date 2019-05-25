//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

const onButtonPress = () => {
    Alert.alert(`Success!`);
};


// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: ''
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email })
    }
    handlePasswordChange = (password) => {
        this.setState({ password: password })
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleEmailChange}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    onChangeText={this.handlePasswordChange}
                    placeholder='Senha'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                
                <Link to="/cadastro" underlayColor="#f0f4f7" style={styles.buttonContainer2}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    {/* <Button onPress={()=>{}} title='Cadastrar' style={styles.loginButton}/> */}
                </Link>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
    },
    buttonContainer2: {
        backgroundColor: '#46a8e4',
        paddingVertical: 5,
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});

//make this component available to the app
export default LoginForm;