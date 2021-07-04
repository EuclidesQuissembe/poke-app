import { League } from '../../../../store/modules/leagues/types';

export type Props = {
  league: League;
  onPress: (league: League) => void;
};
