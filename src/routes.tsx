import 'react-native-gesture-handler';

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Screens
 */
const HomeScreen = React.lazy(() => import('./screens/Home'));

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
