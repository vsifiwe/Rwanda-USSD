import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { DetailsScreen } from '../Screens/DetailsScreen';
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

const DetailStack = createStackNavigator();

export function DetailScreenStack() {
	return (
		<DetailStack.Navigator headerMode="none">
			<DetailStack.Screen name="Detail" component={DetailsScreen} />
		</DetailStack.Navigator>
	);
}
