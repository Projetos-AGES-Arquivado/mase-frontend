//import liraries
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, CheckBox, Body, ListItem} from 'native-base';
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
import { StyleSheet, Text } from 'react-native';
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

    handleVoltar = () => {
        this.props.history.push('/cadastro');
    }

    handleSubmit = () => {
        console.log(this.state.profissao)
        console.log(this.state.numeroConselho)
        console.log(this.state.vinculo)
    } 

    render() {
        return (
            <Container>
                <Header texto="Cadastrar Voluntário" />
                <Content>
                    <Form>
                        <Item>
                            <Input style={styles.input} placeholder="Profissão" onChangeText={this.handleProfissao}/>
                        </Item>
                        <Item >
                            <Input type="number" style={styles.input} placeholder="Numero Conselho" onChangeText={this.handleNumeroConselho}/>
                        </Item>
                        <Item>
                            <Input style={styles.input} placeholder="Vinculo Institucional" onChangeText={this.handleVinculo}/>
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
                        <Button full rounded style={styles.button} onPress={this.handleSubmit}><Text style={styles.text}>Confirmar</Text></Button>
                        <Button full rounded style={styles.button} onPress={this.handleVoltar}><Text style={styles.text}>Voltar</Text></Button>
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
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 18,
        padding: 15,
        fontWeight: 'bold',
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
export default withRouter(VoluntarioForm);