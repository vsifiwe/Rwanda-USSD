import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Airtel</Text>
    </View>
);

const CardHeader = () => (
    <React.Fragment>
        <Layout style={styles.topContainer} level='1'>
            <Card style={styles.card} header={Header} status='danger'>
                <Text>Click here to see airtel services</Text>
            </Card>
        </Layout>
    </React.Fragment>
);

export default CardHeader;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    image: {
        height: 80,
        width: 200,
    },
});
