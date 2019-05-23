//import liraries
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, CheckBox, Body, ListItem} from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text } from 'react-native';
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


    handleSubmit = () => {
        console.log(this.state.cargo)
        console.log(this.state.vinculo)
    } 

    render() {
        return (
            <Container>
                <Header texto="Cadastro Defesa Civil" />
                <Content>
                    <Form>
                        <Item>
                            <Input style={styles.input} placeholder="Cargo" onChangeText={this.handleCargo}/>
                        </Item>
                        <Item>
                            <Input style={styles.input} placeholder="Vinculo Institucional" onChangeText={this.handleVinculo}/>
                        </Item>
                    </Form>
                    <Content style={styles.checkBoxContent}>
                        <ListItem>
                            <CheckBox checked={this.state.termoAceito} onPress={this.checkTermoAceito} color="red"/>
                                <Body>
                                    <Text style={{ marginLeft: 10 }} >Concordo que falsificar quaisquer dados do cadastro é crime</Text>
                                </Body>
                        </ListItem>
                    </Content>
                    <Content style={styles.buttonContent}>
                        <Button full rounded danger style={styles.button} onPress={this.handleSubmit}><Text style={styles.text}>Confirmar</Text></Button>
                        <Button full rounded warning style={styles.button}><Text style={styles.text}>Cancelar</Text></Button>
                    </Content>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
    },
    input: {
        width: '80%',
        textAlign: 'center'
    },
    button:{
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        padding: 15
    },
    buttonContent: {
        marginTop: 40,
        marginBottom: 0,
    },
    checkBoxContent: {
        marginTop: 15,
        marginBottom: 0,
    }
});

//make this component available to the app
export default DefesaCivilForm;