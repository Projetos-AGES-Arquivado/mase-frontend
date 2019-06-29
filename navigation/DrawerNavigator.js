import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Mapa from '../screens/Mapa';
import Notificar_Desastre from '../screens/Notificar_Desastre';
import Cadastro_de_Areas_Risco from '../screens/Cadastro_de_Areas_Risco';
import Cadastro_de_Coordenador_de_Defesa_Civil from '../screens/Cadastro_de_Coordenador_de_Defesa_Civil';
import Cadastro_de_Funcionário_de_Defesa_Civil from '../screens/Cadastro_de_Funcionário_de_Defesa_Civil';
import Planos_de_Acao from '../screens/Planos_de_Acao';
import Cadastro_Planos_de_Acao from '../screens/Cadastro_Planos_de_Acao';
import Perfil from '../screens/Perfil';
import MenuDrawer from '../components/MenuDrawer';
import Login from '../views/Login';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{	
		Mapa: {
			screen: Mapa
		},
		Perfil:{
			screen: Perfil
		},
		Notificar_Desastre: {
			screen: Notificar_Desastre
		},
		Cadastro_de_Areas_Risco: {
			screen: Cadastro_de_Areas_Risco
		},
		Cadastro_de_Coordenador_de_Defesa_Civil:{
			screen: Cadastro_de_Coordenador_de_Defesa_Civil
		},
		Cadastro_de_Funcionário_de_Defesa_Civil:{
			screen: Cadastro_de_Funcionário_de_Defesa_Civil
		},
		Planos_de_Acao:{
			screen: Planos_de_Acao
		},
		Cadastro_Planos_de_Acao:{
			screen: Cadastro_Planos_de_Acao
		},
		Logout:{
			screen: Login
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);