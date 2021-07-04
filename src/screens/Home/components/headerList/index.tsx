import React from 'react';

import { Container, Title, Description } from './styles';

const HeaderList: React.FC = () => {
	return <Container style={{ elevation: 2 }}>
		<Title>Leagues</Title>
		<Description>Selecione a sua liga favorita e saiba mais</Description>
	</Container>;
}

export default HeaderList;