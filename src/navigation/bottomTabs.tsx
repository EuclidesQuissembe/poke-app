import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 * Screens
 */
import HomeScreen from '../screens/Home';
import CountriesScreen from '../screens/Countries';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Countries" component={CountriesScreen} />
    </Tab.Navigator>
  );
}
