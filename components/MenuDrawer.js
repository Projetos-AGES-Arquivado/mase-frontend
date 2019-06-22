import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/logo.png')} />
								<Text>Mapeamento Articulção Simulação e Execução em Desastres</Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						{this.navLink('Mapa', 'Mapa')}
						{this.navLink('Perfil','Perfil')}
						{this.navLink('Notificar_Desastre', 'Notificar Desastre')}
						{this.navLink('Cadastro_de_Areas_Risco', 'Cadastro de Areas Risco')}
						{this.navLink('Cadastro_de_Coordenador_de_Defesa_Civil', 'Cadastro de Coordenador')}
						{this.navLink('Cadastro_de_Funcionário_de_Defesa_Civil', 'Cadastro de Funcionário')}
						{this.navLink('Planos_de_Acao','Planos de Ação')}
						{this.navLink('Cadastro_Planos_de_Acao','Cadastro de Planos')}
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Mase</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C0C0C0',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'black',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 160,
		backgroundColor: 'white',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	}
})