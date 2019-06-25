//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Input } from 'react-native';
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
import { Container, Content, Form, Item, CheckBox, Body, ListItem} from 'native-base';
import Header from '../Generic/Header'

// create a component
class VoluntarioForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            termoUm: false,
            termoDois: false,
            profissao: '',
            numeroConselho: '',
            vinculo: ''
        }
    }
    
    checkTermoUm = () => {
        if(this.state.termoUm === false){
            this.setState({ termoUm: true })  
        } else{
            this.setState({ termoUm: false })
        }
    }

    checkTermoDois = () => {
        if(this.state.termoDois === false){
            this.setState({ termoDois: true })  
        } else{
            this.setState({ termoDois: false })
        }
    }

    handleProfissao = (profissao) => {
        this.setState({ profissao });
    }

    handleVinculo= (vinculo) => {
        this.setState({ vinculo });
    }

    handleNumeroConselho = (numeroConselho) => {
        this.setState({ numeroConselho });
    }

    handleCancel = () => {
        this.props.history.push('/cadastro');
    }

    handleSubmit = async () => {
        if(!this.state.termoUm || !this.state.termoDois){
            Alert.alert(
                'Termos de aceitação',
                'É obrigatório aceitar os termos de aceitação!',
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
                );
                return;
        }      
        const usuario =  this.props.history.location.state.usuario;
        await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8083/v1/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            role: "VOLUNTEER",
          })
        })
          .then(response => {
            if (!response.ok) {
              console.log("erro ao cadastrar usuario")
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({ emailError: "Erro de conexão!" });
        });

        await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8080/api/user/volunteers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            councilNumber: this.state.numeroConselho,
            cpf: usuario.cpf,
            email: usuario.email,
            firstName: usuario.nome,
            institutionalLink: this.state.vinculo,
            lastName: usuario.sobrenome,
            mobileId: "2010304050",
            occupation: this.state.profissao,
            phoneNumber: usuario.telefone,
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
            this.setState({ emailError: "Erro de conexão!" });
          });
      };

    render() {
        return (
            <View style={styles.container}>
                <Header texto="Cadastro Voltuntário" />
                <TextInput style={styles.input}
                    onChangeText={this.handleProfissao}
                    placeholder='Profissão'
                    placeholderTextColor='#2f4f4f'
                    keyboardType="default"
                    />

                <TextInput style={styles.input}
                    onChangeText={this.handleNumeroConselho}
                    placeholder="Numero Conselho"
                    placeholderTextColor='#2f4f4f'
                    keyboardType="numeric"
                    type="number"
                />
                <TextInput style={styles.input}
                    onChangeText={this.handleVinculo}
                    placeholder='Vinculo Institucional'
                    placeholderTextColor='#2f4f4f'
                    keyboardType="default"
                />
                <Text style={styles.termoAceitacao}>Termo de aceitação</Text>
                <View style={styles.checkBoxContent}>
                        <ListItem>
                            <CheckBox checked={this.state.termoUm} onPress={this.checkTermoUm} color="red"/>
                                <Text style={{ marginLeft: 10, fontSize: 15}} >Concordo que falsificar quaisquer dados do cadastro é crime</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.termoDois} onPress={this.checkTermoDois} color="red"/>
                                <Text style={{ marginLeft: 10, fontSize: 15 }} >Concordo dar meu constentimento jurídico de que não vou responsabilizar a Pedra Circular nem a Defesa Civil por quaisquer danos</Text>
                        </ListItem>
                </View>
                <View style={{marginBottom:10}}>                
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>                   
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleCancel}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>   
                </View>
            </View>
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
        fontSize: 20,
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
        textAlign: 'center',
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
    checkBoxContent: {
        marginTop: 15,
        marginBottom: 15,
    }

});

export default withRouter(VoluntarioForm);