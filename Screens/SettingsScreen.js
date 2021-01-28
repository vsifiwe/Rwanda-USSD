import React from 'react';
import { SafeAreaView } from 'react-native';
import {
	Button,
	Divider,
	Icon,
	Layout,
	Menu,
	MenuItem,
	StyleService,
	Text,
	TopNavigation,
	TopNavigationAction,
	useStyleSheet,
} from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const SettingsScreen = ({ navigation }) => {
	const themeContext = React.useContext(ThemeContext);
	const styles = useStyleSheet(themedStyles);

	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);
	const ForwardIcon = (props) => (
		<Icon {...props} size="small" name="arrow-forward-outline" />
	);
	const DarkModeButton = (props) => (
		<Button size="small" onPress={themeContext.toggleTheme}>
			Switch Theme
		</Button>
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TopNavigation
				title="Settings"
				alignment="center"
				accessoryLeft={BackAction}
			/>
			<Divider />
			<Menu>
				<MenuItem
					title="Would you like Dark Mode?"
					accessoryRight={DarkModeButton}
				/>
				<MenuItem
					title="Watch Tutorial"
					accessoryRight={ForwardIcon}
					onPress={() => navigation.navigate('Onboard')}
				/>
			</Menu>
		</SafeAreaView>
	);
};

const themedStyles = StyleService.create({
	layout: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});
