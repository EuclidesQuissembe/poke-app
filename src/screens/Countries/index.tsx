/**
 * Modules
 */
import React, { useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';

// Actions
import * as CountriesActions from '../../store/modules/countries/actions';

// Components
import Country from './components/country';
import Custom from '../../components/custom';
import Loading from '../../components/loading';

// Context
import { useApp } from '../../hooks/useApp';

// Types
import { Props } from './types';

const Countries: React.FC<Props> = ({ countries, loadRequest, navigation }) => {
  const { setCountryName } = useApp();

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  function handleSetCountryName(countryName: string) {
    setCountryName(countryName);

    navigation.navigate('Teams');
  }

  if (countries.error) {
    return (
      <Custom
        title="Falha ao buscar os anos"
        message="Houve um erro ao tentar buscar os anos. Por favor tente recarregar."
        onPress={() => loadRequest()}
        buttonText="Recarregar"
      />
    );
  }

  if (countries.loading) {
    return <Loading />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      numColumns={2}
      keyExtractor={item => item.name}
      data={countries.data.response}
      renderItem={({ item }) => (
        <Country country={item} onPress={handleSetCountryName} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  countries: state.countries,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CountriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
