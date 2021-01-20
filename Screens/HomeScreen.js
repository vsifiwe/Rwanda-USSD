import React, { useState } from 'react';
import { Dimensions, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
	Button,
	Divider,
	Layout,
	StyleService,
	TopNavigation,
	useStyleSheet,
	Input,
	Sta,
} from '@ui-kitten/components';

const width = Dimensions.get('screen').width * 0.8;

export const HomeScreen = ({ navigation }) => {
	const [number, setNumber] = useState('');
	const [amount, setAmount] = useState('');

	const validateNumber = (n) => {
		let regex = /^07[238][0-9]{7}/;
		return regex.test(n);
	};

	const terminate = () => {
		if (validateNumber(number) == !true) {
			// TODO: Show an error message
			return;
		}
		console.log(number);
	};

	const styles = useStyleSheet(themedStyles);

	return (
		<SafeAreaView style={styles.container}>
			<TopNavigation title="MyApp" alignment="center" />
			<Divider />
			<Image
				style={styles.image}
				source={require('../assets/Onboarding/1.png')}
			/>
			<Input
				value={number}
				label="Number"
				placeholder="Enter your phone number"
				caption="E.g: 0712332112"
				maxLength={10}
				onChangeText={(nextValue) => setNumber(nextValue)}
				keyboardType="numeric"
			/>
			<Input
				value={amount}
				label="Amount"
				placeholder="Enter the amount"
				caption="Discount starts from 200 RWF"
				onChangeText={(nextValue) => setAmount(nextValue)}
				keyboardType="numeric"
			/>
			<Button style={styles.button} onPress={terminate}>
				Buy Airtime
			</Button>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const themedStyles = StyleService.create({
	layout: {
		flex: 1,
	},
	image: {
		height: width,
		width: width / 0.8,
		alignItems: 'center',
	},
	button: {
		margin: 5,
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'background-basic-color-2',
	},
});
