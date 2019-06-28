import React, { Component } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import Login from "../Login";
import Signup from "../Signup";
import VoluntarioForm from "../VoluntarioForm";
import DefesaCivilForm from "../DefesaCivilForm";
import TelaPrincipal from "../TelaPrincipal";
import AreaDeRiscoForm from "../AreaDeRiscoForm";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  StatusBar
} from "react-native";

function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Signup} />
      <Route path="/cadastro-voluntario" component={VoluntarioForm} />
      <Route path="/cadastro-defesaCivil" component={DefesaCivilForm} />
      <Route path="/telaPrincipal" component={TelaPrincipal} />
      <Route path="/cadastro-areaDeRisco" component={AreaDeRiscoForm} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    color: "#FFF",
    backgroundColor: "#2c3e50",
    padding: 3,
    flexDirection: "column",
    justifyContent: "center"

    //   height: 100
  },
  header: {
    fontSize: 20,
    top: 0
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#FFF"
  },
  navItem: {},
  subNavItem: {
    //   padding: 5
  },
  topic: {
    //   textAlign: "center",
    //   fontSize: 15
  }
});
export default App;
