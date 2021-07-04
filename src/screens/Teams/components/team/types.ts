import { Team } from '../../../../@types';

export type Props = {
  team: Team;
  onPress: (teamId: number) => void;
};
