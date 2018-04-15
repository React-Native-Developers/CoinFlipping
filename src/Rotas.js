import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';
/*sceneStyle: Optional Style in all Scene*/

const Rotas = () => (
	<Router sceneStyle={{ }}>  
		<Scene key="root">
			<Scene key={'principal'} component={Principal} initial title="Cara ou Coroa" />
			<Scene key={'sobreJogo'} component={SobreJogo} title="Sobre Jogos" />
			<Scene key={'outrosJogos'} component={OutrosJogos} title="Outros Jogos" />
			<Scene key='resultado' component={Resultado} title="Resultado" />
		</Scene>
	</Router>
);

export default Rotas;
