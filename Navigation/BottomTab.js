import * as React from 'react';
import {
	BottomNavigation,
	BottomNavigationTab,
	Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const CogIcon = (props) => <Icon {...props} name="settings-outline" />;
const ServerIcon = (props) => <Icon {...props} name="bookmark-outline" />;

export const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={(index) => navigation.navigate(state.routeNames[index])}
	>
		<BottomNavigationTab title="Home" icon={PersonIcon} />
		<BottomNavigationTab title="Services" icon={ServerIcon} />
		<BottomNavigationTab title="Settings" icon={CogIcon} />
	</BottomNavigation>
);
