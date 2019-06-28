//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { withRouter } from "react-router-native";
import { CheckBox, ListItem} from 'native-base';
import Header from '../Generic/Header'

// create a component
class AreaDeRiscoForm extends Component {
    handleMenu = () =>{
        this.props.history.push("/telaPrincipal");
    }

    render() {
        return (
            <View style={styles.container}>
                <Header texto="Cadastro Área de Risco" />
                <TextInput style={styles.input}
                    placeholder='Endereço'
                    />

                <TextInput style={styles.input}
                    placeholder="Latitude"
                />
                <TextInput style={styles.input}
                    placeholder='Longitude'
                />
                <TextInput style={styles.input}
                    placeholder='Grau de Risco'
                />
                <TextInput style={styles.input}
                    placeholder='Tipo de Risco'
                />
                <TextInput style={styles.input}
                    placeholder='Area de Alcance'
                />

                <View style={{marginBottom:10}}>                
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>                   
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleMenu}>
                        <Text style={styles.buttonText}>MENU</Text>
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
        textAlign: 'center',
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

export default withRouter(AreaDeRiscoForm);