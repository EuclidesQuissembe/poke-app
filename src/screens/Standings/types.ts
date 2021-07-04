import { StackScreenProps } from '@react-navigation/stack';
import { RootListScreensProps } from '../../@types/screens';
import { StandingsState } from '../../store/modules/standings/types';

export interface StateProps {
	standings: StandingsState;
}

export interface DispatchProps {
	loadRequest: (league: number, season: number) => void;
}

export type Props = StateProps &
	DispatchProps &
	StackScreenProps<RootListScreensProps>;
