/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

// Components
import Classifications from '../../components/classifications';

// Actions
import * as StandingsActions from '../../store/modules/standings/actions';

// Styles
import { Container } from './styles';

// Types
import { Props } from './types';

const Standings: React.FC<Props> = ({ standings, loadRequest, route }) => {
	// const { league, season } = route.params

	useEffect(() => {
		loadRequest(39, 2019);
	}, [loadRequest]);


	if (standings.loading) {
		return <Text>Loading...</Text>
	}

	if (standings.error) {
		return <Text>Error</Text>
	}


	return (<Container>
		<Classifications data={standings.data.response} />
	</Container>);
};

const mapStateToProps = (state: ApplicationState) => ({
	standings: state.standings,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(StandingsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
