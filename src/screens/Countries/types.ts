import { StackScreenProps } from '@react-navigation/stack';
import { RootListScreensProps } from '../../@types/screens';
import { CountriesState } from '../../store/modules/countries/types';

export interface StateProps {
  countries: CountriesState;
}

export interface DispatchProps {
  loadRequest: () => void;
}

export type Props = StateProps &
  DispatchProps &
  StackScreenProps<RootListScreensProps>;
