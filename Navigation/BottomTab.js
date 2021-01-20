import * as React from 'react';
import {
	BottomNavigation,
	BottomNavigationTab,
	Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

export const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={(index) => navigation.navigate(state.routeNames[index])}
	>
		<BottomNavigationTab title="Home" icon={PersonIcon} />
		<BottomNavigationTab title="Details" icon={SearchIcon} />
	</BottomNavigation>
);
