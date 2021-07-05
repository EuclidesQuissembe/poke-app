/**
 * Modules
 */
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// Components
import SeasonItem from '../seasonItem';

// Context
import { useApp } from '../../hooks/useApp';

// Styles
import { Container, Logo, Title } from './styles';

// Types
import { Props } from './types';

const SeasonList: React.FC<Props> = ({ data, onItemPress }) => {
  const { league } = useApp();

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <Logo source={{ uri: league.logo }} />
            <Title>{league.name}</Title>
          </>
        }
        showsVerticalScrollIndicator={false}
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
    paddingHorizontal: 20,
  },
});

export default SeasonList;
