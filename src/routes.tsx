import 'react-native-gesture-handler';

import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { useApp } from './hooks/useApp';

/**
 * Screens
 */
const HomeScreen = React.lazy(() => import('./screens/Home'));
const SeasonsScreen = React.lazy(() => import('./screens/Seasons'));
const LeagueSeasonScreen = React.lazy(
  () => import('./screens/LeagueSeasonMenu'),
);
const TeamScreen = React.lazy(() => import('./screens/Team'));
const TeamsScreen = React.lazy(() => import('./screens/Teams'));
const StandingsScreen = React.lazy(() => import('./screens/Standings'));

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { isConnected } = useApp();
  return (
    <>
      {!isConnected && (
        <Text style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
          Acessando dados local
        </Text>
      )}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Seasons"
          component={SeasonsScreen}
          options={{
            title: 'Selecione um ano',
          }}
        />

        <Stack.Screen
          name="LeagueSeasonMenu"
          component={LeagueSeasonScreen}
          options={{
            title: '',
          }}
        />

        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen
          name="Standings"
          component={StandingsScreen}
          options={{
            title: 'Classificações',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
