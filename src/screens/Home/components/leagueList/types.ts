import { League, LeagueData } from '../../../../store/modules/leagues/types';

export type Props = {
  data: LeagueData;
  onItemPress: (league: League) => void;
};
