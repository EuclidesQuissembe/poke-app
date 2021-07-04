import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Screens
 */
const BottomTabs = React.lazy(() => import('./navigation/bottomTabs'));
const SeasonsScreen = React.lazy(() => import('./screens/Seasons'));
const TeamScreen = React.lazy(() => import('./screens/Team'));
const TeamsScreen = React.lazy(() => import('./screens/Teams'));
const StandingsScreen = React.lazy(() => import('./screens/Standings'));

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Seasons"
        component={SeasonsScreen}
        options={{
          title: 'Selecione um ano',
          headerStyle: {
            elevation: 0,
          },
        }}
      />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Teams" component={TeamsScreen} />
      <Stack.Screen name="Standings" component={StandingsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
