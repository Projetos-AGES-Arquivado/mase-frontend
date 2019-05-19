//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';

// create a component
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.texto}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
    },
    title:{
        width: 180,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

//make this component available to the app
export default Header;