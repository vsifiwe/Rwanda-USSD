import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { ThemeContext } from './theme-context';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Root from './Navigation/Root';

export default () => {
	const [theme, setTheme] = React.useState('light');

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<ApplicationProvider {...eva} theme={eva[theme]}>
					<Root />
				</ApplicationProvider>
			</ThemeContext.Provider>
		</>
	);
};
