import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ route, navigation }) {
    const Onboard = () => (
        <Onboarding
            onDone={() => {
                navigation.navigate('Home');
            }}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'The Title',
                    subtitle:
                        'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
        />
    );
    return (
        <View style={styles.container}>
            <Onboard />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
