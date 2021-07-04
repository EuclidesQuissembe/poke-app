import React from 'react';

import { FlatList } from 'react-native';

import Standing from '../standing';

import { Props } from './types';

const Standings: React.FC<Props> = ({ standings }) => {
  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={standings}
      renderItem={({ item }) => <Standing standing={item} />}
    />
  );
};

export default Standings;
