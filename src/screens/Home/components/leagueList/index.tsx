/**
 * Modules
 */
import React from 'react';
import { FlatList } from 'react-native';

// Components
import LeagueItem from '../leagueItem';
import HeaderList from '../headerList';

// Types
import { Props } from './types';

const LeagueList: React.FC<Props> = ({ data, onItemPress }) => {
  return (
    <FlatList
      ListHeaderComponent={<HeaderList />}
      keyExtractor={item => item.league.id.toString()}
      data={data.response}
      renderItem={({ item }) => (
        <LeagueItem league={item.league} onPress={onItemPress} />
      )}
    />
  );
};

export default LeagueList;
