import React from 'react';
import { SafeAreaView } from 'react-native';
import {
	Divider,
	Icon,
	List,
	ListItem,
	Avatar,
	TopNavigation,
	TopNavigationAction,
	StyleService,
	useStyleSheet,
} from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import { services } from '../Constants/services';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const ServicesScreen = ({ navigation }) => {
	const themeContext = React.useContext(ThemeContext);

	const styles = useStyleSheet(themedStyles);

	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	const renderItemAccessory = (props) => (
		<Icon {...props} name="arrow-forward-outline" />
	);
	const renderItemIcon = (props) => (
		<Avatar
			{...props}
			style={[props.style, { tintColor: null }]}
			source={require('../assets/1.jpg')}
		/>
	);

	const renderItem = ({ item, index }) => (
		<ListItem
			title={`${item.title}`}
			description={`${item.subtitle}`}
			accessoryLeft={renderItemIcon}
			accessoryRight={renderItemAccessory}
			onPress={() => console.log(item)}
		/>
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TopNavigation
				title="MyApp"
				alignment="center"
				accessoryLeft={BackAction}
			/>
			<Divider />
			<List
				data={services}
				renderItem={renderItem}
				contentContainerStyle={styles.contentContainer}
				ItemSeparatorComponent={Divider}
			/>
		</SafeAreaView>
	);
};

const themedStyles = StyleService.create({
	contentContainer: {
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
});
