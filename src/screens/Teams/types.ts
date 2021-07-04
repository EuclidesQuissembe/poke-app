import { StackScreenProps } from '@react-navigation/stack';
import { RootListScreensProps } from '../../@types/screens';
import { TeamsState } from '../../store/modules/teams/types';

export interface StateProps {
  teams: TeamsState;
}

export interface DispatchProps {
  loadRequestTeams: (countryName: string) => void;
}

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
