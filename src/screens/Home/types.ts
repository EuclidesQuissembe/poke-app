import {StackScreenProps} from '@react-navigation/stack';
import {RootListScreensProps} from '../../@types/screens';
import {LeagueState} from '../../store/modules/leagues/types';

export interface StateProps {
  leagues: LeagueState;
}

export interface DispatchProps {
  loadRequest: () => void;
}

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
