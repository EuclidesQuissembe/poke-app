import { StackScreenProps } from '@react-navigation/stack';
import { RootListScreensProps } from '../../@types/screens';
import { TeamsState } from '../../store/modules/teams/types';

export type StateProps = {
  team: TeamsState;
};

export type DispatchProps = {
  loadRequest: (query: string) => void;
};

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
