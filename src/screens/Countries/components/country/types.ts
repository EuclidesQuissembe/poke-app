import { Country } from '../../../../store/modules/countries/types';

export type Props = {
  country: Country;
  onPress: (countryName: string) => void;
};
