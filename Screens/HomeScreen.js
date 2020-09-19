import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import Card from '../Components/Card';
import cardNames from '../Constants/cards';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Second')}
                >
                    <Card color='#FF0000' subColor='#FFFFFF' name='Airtel' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Card color='#FFCC00' subColor='#000000' name='MTN' />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Card
                        color='#0015FF'
                        subColor='#FFFFFF'
                        name='Buy Electricity'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Card color='#10c935' subColor='#FFFFFF' name='Pay Water' />
                </TouchableOpacity>
            </View>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    opacity: {
        flex: 1,
    },
    button: {
        padding: 10,
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
    },
});
