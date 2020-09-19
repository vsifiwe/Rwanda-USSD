import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => (
    <View
        style={[
            styles.topContainer,
            { backgroundColor: props.color, elevation: 12 },
        ]}
    >
        <Text style={{ color: props.subColor, fontSize: 23 }}>
            {props.name}
        </Text>
    </View>
);
export default Card;

const styles = StyleSheet.create({
    topContainer: {
        height: 150,
        width: 150,
        borderRadius: 20,
        padding: 5,
        margin: 5,
    },
});
