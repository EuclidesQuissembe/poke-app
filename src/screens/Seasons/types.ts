import {StackScreenProps} from '@react-navigation/stack';
import {RootListScreensProps} from '../../@types/screens';
import {SeasonsState} from '../../store/modules/seasons/types';

export interface StateProps {
  seasons: SeasonsState;
}

export interface DispatchProps {
  loadRequest: () => void;
}

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
