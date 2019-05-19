//import liraries
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, CheckBox, Body, ListItem} from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text } from 'react-native';
import Header from '../Generic/Header'

// create a component
class VoluntarioForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            termoUm: false,
            termoDois: false,
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

    render() {
        return (
            <Container>
                <Header texto="Cadastro de Voluntário" />
                <Content>
                    <Form>
                        <Item>
                            <Input style={styles.input} placeholder="Profissão" />
                        </Item>
                        <Item >
                            <Input type="number" style={styles.input} placeholder="Numero Conselho" />
                        </Item>
                        <Item>
                            <Input style={styles.input} placeholder="Vinculo Institucional" />
                        </Item>
                    </Form>
                    <Content style={styles.checkBoxContent}>
                        <ListItem>
                            <CheckBox checked={this.state.termoUm} onPress={this.checkTermoUm} color="red"/>
                                <Body>
                                    <Text style={{ marginLeft: 10 }} >Concordo que falsificar quaisquer dados do cadastro é crime</Text>
                                </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={this.state.termoDois} onPress={this.checkTermoDois} color="red"/>
                                <Body>
                                    <Text style={{ marginLeft: 10 }} >Concordo dar meu constentimento jurídico de que não vou responsabilizar a Pedra Circular nem a Defesa Civil por quaisquer danos</Text>
                                </Body>
                        </ListItem>
                    </Content>
                    <Content style={styles.buttonContent}>
                        <Button full rounded danger style={styles.button}><Text style={styles.text}>Confirmar</Text></Button>
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
export default VoluntarioForm;