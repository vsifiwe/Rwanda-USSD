import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenStack, DetailScreenStack } from './Stacks';
import { BottomTabBar } from './BottomTab';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
		<Screen name="Home" component={HomeScreenStack} />
		<Screen name="Details" component={DetailScreenStack} />
	</Navigator>
);

const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);

export default AppNavigator;
