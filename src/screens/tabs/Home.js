import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import { styles } from '../../styles/styles';

class Home extends Component {

    componentDidMount() {
        const granted = PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location permission is required for WiFi connections',
                message:
                    'This app needs location permission as this is required  ' +
                    'to scan for wifi networks.',
                buttonNegative: 'DENY',
                buttonPositive: 'ALLOW',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Feito!')
        } else {
            console.log('Nope!')
        }
    }
    render() {
        return <View style={styles.center}>
            <Text style={styles.title}>HOME</Text>
        </View>
    }
}

export default Home;