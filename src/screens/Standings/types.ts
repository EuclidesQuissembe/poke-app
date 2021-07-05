import { StackScreenProps } from '@react-navigation/stack';
import { RootListScreensProps } from '../../@types/screens';
import { StandingsState } from '../../store/modules/standings/types';

export interface StateProps {
  standings: StandingsState;
}

export interface DispatchProps {
  loadRequest: (query: string) => void;
}

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
