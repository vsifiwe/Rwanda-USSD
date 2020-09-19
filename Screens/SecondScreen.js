import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Input, Button, Text, Modal, Card } from '@ui-kitten/components';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const width = Dimensions.get('screen').width * 0.8;

export default function SecondScreen({ route, navigation }) {
    const [number, setNumber] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const terminate = () => {
        setVisible(true);
        console.log(number);
        // come back {you can also use a library called react-native-send-intent}
        // RNImmediatePhoneCall.immediatePhoneCall(number);
    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/Onboarding/1.png')}
            />
            <Input
                value={number}
                label='Number'
                placeholder='Enter your phone number'
                caption='Should contain 10 Numbers'
                onChangeText={(nextValue) => setNumber(nextValue)}
                keyboardType='numeric'
            />
            <Input
                value={amount}
                label='Amount'
                placeholder='Enter the amount'
                caption='Discount starts from 200 RWF'
                onChangeText={(nextValue) => setAmount(nextValue)}
                keyboardType='numeric'
            />
            <Button style={styles.button} onPress={terminate}>
                SUCCESS
            </Button>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
            >
                <Card disabled={true}>
                    <Text>Thank you ❤</Text>
                    <Button status='success' onPress={() => setVisible(false)}>
                        Done
                    </Button>
                </Card>
            </Modal>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        height: width,
        width: width,
    },
    button: {
        margin: 5,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
