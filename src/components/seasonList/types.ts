import { APIData } from '../../@types';
import { SeasonsState } from '../../store/modules/seasons/types';

export type Props = {
  data: APIData<number[]>;
  onItemPress: (season: number) => void;
};
