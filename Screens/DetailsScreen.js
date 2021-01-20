import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from '@ui-kitten/components';
import {
	Divider,
	Icon,
	Layout,
	Text,
	TopNavigation,
	TopNavigationAction,
} from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ navigation }) => {
	const themeContext = React.useContext(ThemeContext);

	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TopNavigation
				title="MyApp"
				alignment="center"
				accessoryLeft={BackAction}
			/>
			<Divider />
			<Layout
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text category="h1">DETAILS</Text>
				<Button onPress={themeContext.toggleTheme}>Switch Theme</Button>
			</Layout>
		</SafeAreaView>
	);
};
