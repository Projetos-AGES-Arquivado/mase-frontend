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
            nome: '',
            sobrenome: '',
            password: '',
            cpf: '',
            email: '',
            telefone: '',
            imagem: 'foto',
            naoVoluntario: false,
            voluntario: false,
            defesaCivil: false,
            msgNome: '',
            msgSobrenome: '',
            msgPerfilError: '', 
            msgGeral: '',
            msgTelefeone: '',
            msgSenha: '',
            msgEmail: '',
        }
    }

    handleEmailChange = (email) => {
        if(this.validaEmail(email)){
            this.setState({ email, msgEmail: ''})
        } else{
            this.setState({ email, msgEmail: 'Digite um email válido!'})
        }
    }
    
    handlePasswordChange = (password) => {
        if(this.validaSenha(password)){
            this.setState({ password, msgSenha: ''})
        } else{
            this.setState({ password, msgSenha: 'Sua senha deve possuir no mínimo 8 caractéres'})
        }
    }

    handleCPFChange = (cpf) => {
        this.setState({ cpf });
    }

    handleTelefoneChange = (telefone) => {
        if(this.validaTelefone(telefone)){
            this.setState({ telefone, msgTelefone: '' })
        } else{
            this.setState({ telefone, msgTelefone: 'Digite um telefone válido!' })
        }
    }

    handleNomeChange = (nome) => {
        if(nome.length === 0){
            this.setState({ msgNome: "Campo obrigatório!" })
        }else{
            this.setState({ nome, msgNome: ''});
        }
    }
    handleSobrenomeChange = (sobrenome) => {
        if(sobrenome.length === 0){
            this.setState({ msgSobrenome: "Campo obrigatório!" })
        }else{
            this.setState({ sobrenome, msgSobrenome: ''});
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
             this.state.msgEmail.length > 0 ||
             this.state.msgTelefeone.length > 0 ||
             this.state.msgSenha > 0) {
            this.setState({ msgGeral: "Preencha todos os campos do formulário!" });
            return false;
        }
        this.setState({ msgGeral: "" });
        return true;
    }


    handleContinue =  async() => {
        if(this.checkFormulario() === false){
            return;
        };
        if (!this.state.voluntario && !this.state.naoVoluntario && !this.state.defesaCivil ){
            this.setState({ msgPerfilError: 'É necessário selecionar um tipo de perfil!' });
        } else if(this.state.voluntario || this.state.naoVoluntario || this.state.defesaCivil) { 
            const usuario = {
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                cpf: this.state.cpf,
                email: this.state.email,
                password: this.state.password,
                telefone: this.state.telefone,
            }
            if(this.state.naoVoluntario){
                //cadastrar nao voluntario e direcionar para menu principal
                await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8083/v1/register", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    role: "USER",
                  })
                })
                  .then(response => {
                    if (!response.ok) {
                      console.log("erro ao cadastrar usuario")
                    }
                  })
                  .catch(error => {
                    console.log(error);
                });

                await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8080/api/user", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      cpf: this.state.cpf,
                      email: this.state.email,
                      firstName: this.state.nome,
                      lastName: this.state.sobrenome,
                      mobileId: "2010304050",
                      phoneNumber: this.state.telefone,
                      photo: "foto",
                    })
                  })
                    .then(response => {
                      if (!response.ok) {
                        console.log("erro ao cadastrar usuario")
                      }
                      return response.json();
                    })
                    .then(data => {
                      console.log(data);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                this.props.history.push("/telaPrincipal")
            }else if(this.state.voluntario){
                //direcionar para pagina de cadastro de voluntario
                ////this.props.history.push("/cadastro-voluntario", state:{ usuario })
                this.props.history.push({pathname: "/cadastro-voluntario", state: { usuario: usuario }});
            }else if(this.state.defesaCivil){
                //direcionar para pagina de cadastro de defesa civil
                this.props.history.push({pathname: "/cadastro-defesaCivil", state: { usuario: usuario }})
            }
        }
    }

    handleSubmit = async () => {
        //console.log('10.0.2.2')
        await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8083/v1/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
        })
          .then(response => {
            if (!response.ok) {
              console.log("Erro ao cadastrar voluntario");
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            if (data && data.token) {
              AsyncStorage.multiSet([
                ["token", data.token],
                ["refreshToken", data.refreshToken],
                ["role", data.role],
                ["expires", String(data.expires)]
              ]);
              this.props.history.push("/cadastro");
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({ emailError: "Erro de conexão!" });
          });
      };

    render() {
        return (
            <ScrollView style={styles.container}>
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
        backgroundColor: '#fff',
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