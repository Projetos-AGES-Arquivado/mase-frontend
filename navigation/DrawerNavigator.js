import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import MenuDrawer from '../components/MenuDrawer';
import Mapa from '../views/Mapa/index';
import DadosPerfil from '../views/DadosPerfil/index';
import EnvioNotificacaoDesastre from '../views/EnvioNotificacaoDesastre/index';
import DisparoPlanoDeAcao from '../views/DisparoPlanoDeAcao/index';
import CadastroDefesaCivil from '../views/CadastroDefesaCivil/index';
import CadastroFuncionarioDefesaCivil from '../views/CadastroFuncionárioDefesaCivil/index';
import CadastroAreasDeRisco from '../views/CadastroAreasDeRisco/index';
import CadastroPlanosDeAcao from '../views/CadastroPlanosDeAcao/index';

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
		DadosPerfil:{
			screen: DadosPerfil
		},
		EnvioNotificacaoDesastre: {
			screen: EnvioNotificacaoDesastre
		},
		DisparoPlanoDeAcao:{
			screen: DisparoPlanoDeAcao
		},
		CadastroDefesaCivil:{
			screen: CadastroDefesaCivil
		},
		CadastroCadastroFuncionarioDefesaCivil:{
			screen: CadastroFuncionarioDefesaCivil
		},
		CadastroAreasDeRisco: {
			screen: CadastroAreasDeRisco
		},
		CadastroPlanosDeAcao:{
			screen: CadastroPlanosDeAcao
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);