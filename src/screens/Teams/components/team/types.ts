import { Team } from '../../../../@types';

export type Props = {
  team: Team;
  onPress: (team: Team) => void;
};
