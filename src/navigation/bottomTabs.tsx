import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 * Screens
 */
import HomeScreen from '../screens/Home';
import TeamsScreen from '../screens/Teams'

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Teams" component={TeamsScreen} />
		</Tab.Navigator>
	);
}