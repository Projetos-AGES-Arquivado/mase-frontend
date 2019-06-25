//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { withRouter } from "react-router-native";
import { CheckBox, ListItem} from 'native-base';
import Header from '../Generic/Header'

// create a component
class DefesaCivilForm extends Component {
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

    handleSubmit = async () => {
        if(!this.state.termoAceito){
            Alert.alert(
                'Termo de aceitação',
                'É obrigatório aceitar o termo de aceitação!',
                [
                    {text: 'OK'},
                ],
                {cancelable: false},
                );
                return;
        }      
        const usuario =  this.props.history.location.state.usuario;
        await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8083/v1/register/civildefense", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            role: "CIVILDEFENSE",
          })
        })
          .then(response => {
            if (!response.ok) {
                console.log(response);
              console.log("erro ao cadastrar defesa civil register")
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({ emailError: "Erro de conexão!" });
        });

        await fetch("http://ec2-18-224-188-194.us-east-2.compute.amazonaws.com:8080/api/user/civil-defense-officials", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            active: true,
            civilDefenseRole: "ADMIN",
            cpf: usuario.cpf,
            email: usuario.email,
            firstName: usuario.nome,
            institutionalLink: this.state.vinculo,
            lastName: usuario.sobrenome,
            mobileId: usuario.mobileId,
            office: this.state.cargo,
            phoneNumber: usuario.telefone,
            photo: "foto",
          })
        })
          .then(response => {
            if (!response.ok) {
              console.log("erro ao cadastrar defesa civil user")
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({ emailError: "Erro de conexão!" });
          });
      }; 

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
        padding: 20,
        backgroundColor: '#fff',
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

export default withRouter(DefesaCivilForm);