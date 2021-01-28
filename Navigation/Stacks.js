import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { ServicesScreen } from '../Screens/ServicesScreen';
import { SettingsScreen } from '../Screens/SettingsScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';

const HomeStack = createStackNavigator();

export function HomeScreenStack() {
	return (
		<HomeStack.Navigator headerMode="none">
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Onboard" component={OnboardingScreen} />
		</HomeStack.Navigator>
	);
}

const ServicesStack = createStackNavigator();

export function ServicesScreenStack() {
	return (
		<ServicesStack.Navigator headerMode="none">
			<ServicesStack.Screen name="Services" component={ServicesScreen} />
		</ServicesStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

export function SettingsScreenStack() {
	return (
		<SettingsStack.Navigator headerMode="none">
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
		</SettingsStack.Navigator>
	);
}
