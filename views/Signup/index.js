//import liraries
import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';
import Wapper from '../Generic/Wrapper';
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
            email: '',
            cpf: '',
            telefone: '',
            nome: '',
            sobrenome: ''
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email })
    }
    handlePasswordChange = (password) => {
        this.setState({ password: password })
    }
    handleCPFChange = (cpf) => {
        this.setState({ cpf: cpf })
    }
    handleTelefoneChange = (telefone) => {
        this.setState({ telefone: telefone })
    }
    handleNomeChange = (nome) => {
        this.setState({ nome: nome })
    }
    handleSobrenomeChange = (sobrenome) => {
        this.setState({ sobrenome: sobrenome })
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/anonimo.png')} />

                <TextInput style={styles.input}
                    autoCapitalize="words"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleNomeChange}
                    autoCorrect={false}
                    returnKeyT Numype="next"
                    placeholder='Nome'
                    placeholderTextColor='#2f4f4f' />

                <TextInput style={styles.input}
                    autoCapitalize="words"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleSobrenomeChange}
                    autoCorrect={false}
                    returnKeyT Numype="next"
                    placeholder='Sobrenome'
                    placeholderTextColor='#2f4f4f' />

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleTelefoneChange}
                    autoCorrect={false}
                    keyboardType='phone-pad'
                    returnKeyT Numype="next"
                    placeholder='Telefone'
                    placeholderTextColor='#2f4f4f' />

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleCPFChange}
                    autoCorrect={false}
                    keyboardType='numeric'
                    returnKeyT Numype="next"
                    placeholder='CPF'
                    placeholderTextColor='#2f4f4f' />

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleEmailChange}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyT Numype="next"
                    placeholder='Email'
                    placeholderTextColor='#2f4f4f' />

                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    onChangeText={this.handlePasswordChange}
                    placeholder='Senha'
                    placeholderTextColor='#2f4f4f'
                    secureTextEntry />

                <Text style={styles.buttonText}>Tipo de Perfil:</Text>

                    <Content>
                        <ListItem>
                            <CheckBox checked={false} color="red" />
                            <Body>
                                <Text>  Não Voluntário</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={false} color="red" />
                            <Body>
                                <Text>  Voluntário</Text>
                            </Body>
                        </ListItem>
                        
                        <ListItem>
                            <CheckBox checked={false} color="red" />
                            <Body>
                                <Text>  Defesa Civil</Text>
                            </Body>
                        </ListItem>
                    </Content>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
                <Link to="/" underlayColor="#f0f4f7" style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>VOLTAR PARA LOGIN</Text>
                </Link>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
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
    logo: {
        resizeMode: "contain",
        marginTop: 30,
        marginBottom: 20,
        width: 380,
        height: 150,
        borderRadius: 40,
    },
    buttonText: {
        color: '#000000',
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