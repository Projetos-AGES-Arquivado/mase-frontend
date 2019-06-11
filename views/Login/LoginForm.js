//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Input } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: '',
            emailError: '',
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email })
    }
    handlePasswordChange = (password) => {
        this.setState({ password: password })
    }
    handleSubmit = async() => {
        let mensagem = '';
        //console.log('10.0.2.2')
        await fetch('http://10.0.2.2:8081/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          })
        }).then(function (response) {
            if (!response.ok) {
                mensagem = "Email ou senha estão inválidos, favor digitar corretamente!";
            }
            console.log(response);
          })
          .catch(function (error){
            console.log(error);
          });
        this.setState({ emailError: mensagem});
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
                    placeholderTextColor='#2f4f4f'
                    textContentType="emailAddress" />
                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    onChangeText={this.handlePasswordChange}
                    placeholder='Senha'
                    placeholderTextColor='#2f4f4f'
                    secureTextEntry />
                {this.state.emailError !== '' && (
                    <Text style={styles.textError}>{this.state.emailError}</Text>
                )}
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <View style={{marginBottom:50}}>                
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>                   
                    <Link to="/cadastro" underlayColor="#f0f4f7" style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                        {/* <Button onPress={()=>{}} title='Cadastrar' style={styles.loginButton}/> */}
                    </Link>              
                </View>
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
        height: 50,
        borderBottomWidth: 1,
        marginBottom: 40,
        padding: 10,
        color: '#2f4f4f',
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 20,
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    },
    textError: {
        color: '#ff0000',
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 15,
        fontWeight: 'bold',

    }
});

//make this component available to the app
export default LoginForm;