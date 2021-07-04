/**
 * Modules
 */
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// Components
import SeasonItem from '../seasonItem';

// Styles
import { Container } from './styles';

// Types
import { Props } from './types';

const SeasonList: React.FC<Props> = ({ data, onItemPress }) => {
  return (
    <Container>
      <FlatList
        contentContainerStyle={styles.containerStyle}
        numColumns={3}
        keyExtractor={item => item.toString()}
        data={data.response}
        renderItem={({ item }) => (
          <SeasonItem year={item} onPress={onItemPress} />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default SeasonList;
