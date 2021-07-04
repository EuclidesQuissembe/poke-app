import { TeamsState } from '../../store/modules/teams/types';

export type StateProps = {
  team: TeamsState;
};

export type DispatchProps = {
  loadRequestTeam: (teamId: number) => void;
};

export type Props = StateProps & DispatchProps;
