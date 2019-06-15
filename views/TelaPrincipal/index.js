
//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid, ToolbarAndroid, TouchableNativeFeedback } from "react-native";
import { withRouter } from "react-router-native";

class TelaPrincipalForm extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        var drawer = (
            <View style={{ flex: 1, backgroundColor: '#91c988' }}>
                <Text style={{ margin: 20, fontSize: 15, textAlign: 'left' }}>Your buttons here</Text>
            </View>
        );
        return (

            <View style={styles.container}>
                <DrawerLayoutAndroid renderNavigationView={() => drawer} drawerWidth={300}
                    statusBarBackgroundColor='#7faf77' ref={_drawer => (this.drawer = _drawer)}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                        <ToolbarAndroid style={styles.toolbar} navIcon={require('../../assets/icon.png')}
                            actions={[{ title: 'Settings', show: 'always' }]} onIconClicked={this.openDrawer} />
                    </TouchableNativeFeedback>
                </DrawerLayoutAndroid>
                <Text style={styles.text}>MAPA</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    toolbar: {
        height: 56,
        backgroundColor: '#699162'
    },
    text: {
        color: "#000000",
        textAlign: "center",
        fontWeight: "700",
        marginTop: 50,
        fontSize: 15,
        fontWeight: "bold"
    }
});

//make this component available to the app
export default withRouter(TelaPrincipalForm);
