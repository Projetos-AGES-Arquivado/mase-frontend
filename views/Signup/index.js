//import liraries
import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';
import Wapper from '../Generic/Wrapper';
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
import {ImagePicker, Permissions, Constants} from 'expo';


const onButtonPress = () => {
    Alert.alert(`Success!`);
};


// create a component
class LoginForm extends Component {
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
                imagem: '',
            },
            naoVoluntario: false,
            voluntario: false,
            defesaCivil: false,
            msgNome: '',
            msgSobrenome: '',
            msgPerfilError: '', 
            msgGeral: '',
            msgTelefeone: '',
            msgCpf: '',
            msgSenha: '',
            msgEmail: '',
            msgImagem: '',
            
        }
    }

    handleEmailChange = (email) => {
        if(this.validaEmail(email)){
            this.setState({ usuario: { email }, msgEmail: ''})
        } else{
            this.setState({ usuario: { email }, msgEmail: 'Digite um email válido!'})
        }
    }
    
    handlePasswordChange = (password) => {
        if(this.validaSenha(password)){
            this.setState({ usuario: { password }, msgSenha: ''})
        } else{
            this.setState({ usuario: { password }, msgSenha: 'Sua senha deve possuir no mínimo 8 caractéres'})
        }
    }

    handleCPFChange = (cpf) => {
        if(this.validaCPF(cpf)){
            this.setState({ usuario: { cpf }, msgCpf: ''})
        } else{
            this.setState({ usuario: { cpf }, msgCpf: 'Digite um cpf válido!'})
        }
    }

    handleTelefoneChange = (telefone) => {
        if(this.validaTelefone(telefone)){
            this.setState({ usuario: { telefone }, msgTelefone: '' })
        } else{
            this.setState({ usuario: { telefone }, msgTelefone: 'Digite um telefone válido!' })
        }
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

    validaEmail = (email) => {
        var str = email;
        var filtro = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;
        if(filtro.test(str)) {
            return true;
       } else {
           return false;
        }
    }

    validaTelefone = (telefone)  => {
        var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
        return regex.test(telefone);
    }

    validaSenha = (senha) =>{
        var str = senha;
        var filtro = /[a-zA-Z0-9]{8,12}$/;
        if(filtro.test(str)) {
            return true;
       } else {
           return false;
        }
    }

    checkFormulario = () => {
        if (this.state.msgPerfilError.length > 0 ||
             this.state.msgNome.length > 0 ||
             this.state.msgSobrenome.length > 0 ||
             this.state.msgCpf.length > 0 ||
             this.state.msgEmail.length > 0 ||
             this.state.msgTelefeone.length > 0 ||
             this.state.msgSenha > 0 ||
             this.state.msgImagem > 0) {
            this.setState({ msgGeral: "Preencha todos os campos do formulário!" });
            return false;
        }
        return true;
    }


    handleContinue = () => {
        if(this.checkFormulario() === false){
            return;
        };
        if (!this.state.voluntario || !this.state.naoVoluntario || !this.state.defesaCivil ){
            this.setState({ msgPerfilError: 'É necessário selecionar um tipo de perfil!' });
        } else if(this.state.voluntario || this.state.naoVoluntario || this.state.defesaCivil) { 
            this.setState({ msgPerfilError: '' })
        }
    }

    handleChoosePhoto = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        await this.setState({ imagem: result.uri, msgImagem: '' });
      } else if(this.state.usuario.imagem.length === '' &&  msgImagem.length === ''){
        this.setState({ msgImagem: "É obrigatório inserir uma imagem para seu perfil!" });
      }
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.logo} source={{ uri: this.state.imagem }} />
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgImagem}</Text>
                </View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={this.handleChoosePhoto}>
                        <Text style={styles.buttonText}>Escolher Foto</Text>
                    </TouchableOpacity>
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
                    <Text style={styles.msgError}>{this.state.msgTelefone}</Text>
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
                <Text style={styles.buttonText}>Tipo de Perfil:</Text>
                <View style={styles.msgErrorView}>
                    <Text style={styles.msgError}>{this.state.msgPerfilError}</Text>
                </View>
                    <Content>
                        <ListItem>
                            <CheckBox checked={this.state.naoVoluntario} onPress={this.checkNaoVoluntario} color="red" />
                            <Body>
                                <Text>  Não Voluntário</Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <CheckBox checked={this.state.voluntario} onPress={this.checkVoluntario} color="red" />
                            <Body>
                                <Text>  Voluntário</Text>
                            </Body>
                        </ListItem>
                        
                        <ListItem>
                            <CheckBox checked={this.state.defesaCivil} onPress={this.checkDefesaCivil} color="red" />
                            <Body>
                                <Text>  Defesa Civil</Text>
                            </Body>
                        </ListItem>
                    </Content>
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
    }
});

//make this component available to the app
export default withRouter(LoginForm);