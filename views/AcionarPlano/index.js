import React, { Component } from "react";
import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  StatusBar,
  Input
} from "react-native";
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
import { AsyncStorage } from "react-native";
// create a component
class AcionarPlano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termoAceito1: false,
      termoAceito2: false,
      termoAceito3: false,
      termoAceito4: false,
    };
  }

  handleSubmit = () => {
    
  }

  checkTermoAceito1 = () => {
    if(this.state.termoAceito1 === false){
        this.setState({ termoAceito1: true })  
    } else{
        this.setState({ termoAceito1: false })
    }
  };
  checkTermoAceito2 = () => {
    if(this.state.termoAceito2 === false){
        this.setState({ termoAceito2: true })  
    } else{
        this.setState({ termoAceito2: false })
    }
  };
  checkTermoAceito3 = () => {
    if(this.state.termoAceito3 === false){
        this.setState({ termoAceito3: true })  
    } else{
        this.setState({ termoAceito3: false })
    }
  };
  checkTermoAceito4 = () => {
    if(this.state.termoAceito4 === false){
        this.setState({ termoAceito4: true })  
    } else{
        this.setState({ termoAceito4: false })
    }
  };

  render() {
    return (
    <Container>
      <Header style={styles.headerStyle}>
        <Text style={styles.textTitle}>Planos De Ação</Text>
      </Header>
      <Content>
        <ListItem selected={false} >
          <Left>
            <Text style={styles.buttonText}>Plano de Incêndio</Text>
          </Left>
          <Right>
            <Radio
              color={"#000000"}
              selectedColor={"#ff0000"}
              selected={this.state.termoAceito1}
              onPress={this.checkTermoAceito1}
            />
          </Right>
        </ListItem>
        <ListItem selected={true}>
          <Left>
            <Text style={styles.buttonText}>Plano de Enchente</Text>
          </Left>
          <Right>
            <Radio
              color={"#000000"}
              selectedColor={"#ff0000"}
              selected={this.state.termoAceito2}
              onPress={this.checkTermoAceito2}
            />
          </Right>
        </ListItem>
        <ListItem selected={false} >
          <Left>
            <Text style={styles.buttonText}>Plano para Terremoto</Text>
          </Left>
          <Right>
            <Radio
              color={"#000000"}
              selectedColor={"#ff0000"}
              selected={this.state.termoAceito3}
              onPress={this.checkTermoAceito3}
            />
          </Right>
        </ListItem>
        <ListItem selected={false} >
          <Left>
            <Text style={styles.buttonText}>Plano X</Text>
          </Left>
          <Right>
            <Radio 
              color={"#000000"}
              selectedColor={"#ff0000"}
              selected={this.state.termoAceito4}
              onPress={this.checkTermoAceito4}
            />
          </Right>
        </ListItem>
      </Content>
      <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Executar Plano!</Text>
          </TouchableOpacity>
    </Container>
  );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 20
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20
  },
  headerStyle: {
    marginTop: 30,
    backgroundColor: "#fff",
    paddingVertical: 1
  },
  textError: {
    color: "#ff0000",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 15,
    fontWeight: "bold"
  },
  textTitle: {
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

//make this component available to the app
export default withRouter(AcionarPlano);
