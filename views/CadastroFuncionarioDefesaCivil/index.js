//import liraries
import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body } from '../CadastroUsuario/node_modules/native-base';
import Wapper from '../Generic/Wrapper';
import { NativeRouter, Route, Link, withRouter } from "react-router-native";

// create a component
class CadastroFuncionarioDefesaCivil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                nome: '',
                sobrenome: '',
                password: '',
                cpf: '',
                email: '',
                telefone: '',
            },
            naoVoluntario: false,
            voluntario: false,
            defesaCivil: false,
            msgNome: '',
            msgSobrenome: '',
            msgPerfilError: '', 
            msgGeral: '',
            termoAceito: false,
            cargo: '',
            vinculo: ''
        }
    }

    checkTermoAceito = () => {
        if(this.state.termoAceito === false){
            this.setState({ termoAceito: true })  
        } else{
            this.setState({ termoAceito: false })
        }
    }
    handleEmailChange = (email) => {
            this.setState({ usuario: { email }, email: ''})
    }
    
    handlePasswordChange = (password) => {
        this.setState({ usuario: { password }})
    }

    handleCPFChange = (cpf) => {
        if(this.validaCPF(cpf)){
            this.setState({ usuario: { cpf }, msgCpf: ''})
        } else{
            this.setState({ usuario: { cpf }, msgCpf: 'Digite um cpf válido!'})
        }
    }

    handleTelefoneChange = (telefone) => {
        this.setState({ usuario: { telefone }})
    }

    handleNomeChange = (nome) => {
        if(nome.length === 0){
            this.setState({ msgNome: "Campo obrigatório!" })
        }else{
            this.setState({ usuario: { nome }, msgNome: ''});
        }
    }
    handleSobrenomeChange = (sobrenome) => {
        if(sobrenome.length === 0){
            this.setState({msgSobrenome: "Campo obrigatório!" })
        }else{
            this.setState({ usuario: { sobrenome }, msgSobrenome: ''});
        }
    }

    checkNaoVoluntario = () => {
        this.setState({ naoVoluntario: true, voluntario: false, defesaCivil: false})
    }

    checkVoluntario = () => {
        this.setState({ naoVoluntario: false, voluntario: true, defesaCivil: false})
    }

    checkDefesaCivil = () => {
        this.setState({ naoVoluntario: false, voluntario: false, defesaCivil: true})
    }

    handleVoltar = () => {
        this.props.history.push('/');
    }

    validaCPF = (cpf) => {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
              return false;
        for (i = 0; i < cpf.length - 1; i++)
              if (cpf.charAt(i) != cpf.charAt(i + 1))
                    {
                    digitos_iguais = 0;
                    break;
                    }
        if (!digitos_iguais)
              {
              numeros = cpf.substring(0,9);
              digitos = cpf.substring(9);
              soma = 0;
              for (i = 10; i > 1; i--)
                    soma += numeros.charAt(10 - i) * i;
              resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
              if (resultado != digitos.charAt(0))
                    return false;
              numeros = cpf.substring(0,10);
              soma = 0;
              for (i = 11; i > 1; i--)
                    soma += numeros.charAt(11 - i) * i;
              resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
              if (resultado != digitos.charAt(1))
                    return false;
              return true;
              }
        else
            return false;
    } 
    checkFormulario = () => {
        if (this.state.msgPerfilError.length > 0 ||
             this.state.msgNome.length > 0 ||
             this.state.msgSobrenome.length > 0 ||
             this.state.msgCpf.length > 0 ||
             this.state.msgEmail.length > 0){
            this.setState({ msgGeral: "Preencha todos os campos do formulário!" });
        }
    }

    handleContinue = () => {
        if (!this.state.voluntario || !this.state.naoVoluntario || !this.state.defesaCivil ){
            this.setState({ msgPerfilError: "É necessário selecionar um tipo de perfil!" });
        }
        this.checkFormulario();
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
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgNome}</Text>
                </View>
                <TextInput style={styles.input}
                    autoCapitalize="words"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleSobrenomeChange}
                    autoCorrect={false}
                    returnKeyT Numype="next"
                    placeholder='Sobrenome'
                    placeholderTextColor='#2f4f4f' />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgSobrenome}</Text>
                </View>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleTelefoneChange}
                    autoCorrect={false}
                    keyboardType='phone-pad'
                    returnKeyT Numype="next"
                    placeholder='Telefone'
                    placeholderTextColor='#2f4f4f' />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgTelefeone}</Text>
                </View>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleCPFChange}
                    autoCorrect={false}
                    keyboardType='numeric'
                    returnKeyT Numype="next"
                    placeholder='CPF'
                    placeholderTextColor='#2f4f4f' />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgCpf}</Text>
                </View>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={this.handleEmailChange}
                    autoCorrect={false}
                    type="email"
                    keyboardType='email-address'
                    returnKeyT Numype="next"
                    placeholder='Email'
                    placeholderTextColor='#2f4f4f' />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgEmail}</Text>
                </View>
                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    onChangeText={this.handlePasswordChange}
                    placeholder='Senha'
                    placeholderTextColor='#2f4f4f'
                    secureTextEntry />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgSenha}</Text>
                </View>

                <Text style={styles.termoAceitacao}>Dados da Defesa Civíl</Text>
                <TextInput style={styles.input}
                    onChangeText={this.handleCargo}
                    placeholder='Cargo'
                    placeholderTextColor='#2f4f4f'/>

                <TextInput style={styles.input2}
                    onChangeText={this.handleVinculo}
                    placeholder='Vinculo Institucional'
                    placeholderTextColor='#2f4f4f'/>

                <Text style={styles.termoAceitacao}>Termo de aceitação</Text>
                <View style={styles.checkBoxContent}>
                        <ListItem>
                            <CheckBox checked={this.state.termoAceito} onPress={this.checkTermoAceito} color="red"/>
                                <Text style={{ marginLeft: 10, fontSize: 15}} >Concordo que falsificar quaisquer dados do cadastro é crime</Text>
                        </ListItem>
                </View>

                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgGeral}</Text>
                </View>

                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleContinue}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleVoltar}>
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
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
        padding: 10,
        color: '#2f4f4f',
        textAlign: 'center',
    },
    input2: {
        height: 50,
        borderBottomWidth: 1,
        padding: 10,
        color: '#2f4f4f',
        textAlign: 'center',
        marginBottom: 20
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
    termoAceitacao: {
        height: 35,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2f4f4f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        padding: 5,
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
    },

    buttonsView: {
        marginBottom: 30,
    },  

    msgError:{
        color: 'red', 
        fontSize: 13, 
        marginBottom: 7,
        marginTop: 7,
        textAlign: 'center',
    },

    msgErrorView: {
        margin: 0,
    },
    checkBoxContent: {
        marginTop: 15,
        marginBottom: 5,
    }
});

//make this component available to the app
export default withRouter(CadastroFuncionarioDefesaCivil);