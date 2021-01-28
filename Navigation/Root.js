import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	HomeScreenStack,
	ServicesScreenStack,
	SettingsScreenStack,
} from './Stacks';
import { BottomTabBar } from './BottomTab';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
		<Screen name="Home" component={HomeScreenStack} />
		<Screen name="Services" component={ServicesScreenStack} />
		<Screen name="Settings" component={SettingsScreenStack} />
	</Navigator>
);

const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);

export default AppNavigator;
