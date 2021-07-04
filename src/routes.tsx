import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Screens
 */
import HomeScreen from './screens/Home';
const SeasonsScreen = React.lazy(() => import('./screens/Seasons'));
const LeagueSeasonScreen = React.lazy(
  () => import('./screens/LeagueSeasonMenu'),
);
const TeamScreen = React.lazy(() => import('./screens/Team'));
const TeamsScreen = React.lazy(() => import('./screens/Teams'));
const StandingsScreen = React.lazy(() => import('./screens/Standings'));

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
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
  );
};

export default Routes;
