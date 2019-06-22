//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Input } from 'react-native';
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
import { Container, Content, Form, Item, CheckBox, Body, ListItem} from '../CadastroUsuario/node_modules/native-base';
import Header from '../Generic/Header'

// create a component
class CadastroDefesaCivil extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    handleCargo = (cargo) => {
        this.setState({ cargo });
    }
    handleVinculo= (vinculo) => {
        this.setState({ vinculo });
    }
    handleCancel = () => {
        this.props.history.push('/cadastro');
    }
    handleSubmit = () => {
        console.log(this.state.cargo)
        console.log(this.state.vinculo)
    } 

    render() {
        return (
            <View style={styles.container}>
                <Header texto="Cadastro Defesa Civil" />
                <TextInput style={styles.input}
                    onChangeText={this.handleCargo}
                    placeholder='Cargo'
                    placeholderTextColor='#2f4f4f'/>

                <TextInput style={styles.input}
                    onChangeText={this.handleVinculo}
                    placeholder='Vinculo Institucional'
                    placeholderTextColor='#2f4f4f'
                />
                <Text style={styles.termoAceitacao}>Termo de aceitação</Text>
                <View style={styles.checkBoxContent}>
                        <ListItem>
                            <CheckBox checked={this.state.termoAceito} onPress={this.checkTermoAceito} color="red"/>
                                <Text style={{ marginLeft: 10, fontSize: 15}} >Concordo que falsificar quaisquer dados do cadastro é crime</Text>
                        </ListItem>
                </View>
                <View style={{marginBottom:50}}>                
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
        padding: 20
    },
    input: {
        height: 50,
        fontSize: 20,
        borderBottomWidth: 1,
        marginBottom: 25,
        padding: 10,
        color: '#2f4f4f',
        textAlign: 'center',
    },
    termoAceitacao: {
        height: 35,
        marginTop: 20,
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
        marginBottom: 35,
    }

});

export default withRouter(CadastroDefesaCivil);