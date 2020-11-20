import React, { Component } from 'react';
import { Text, PermissionsAndroid, ScrollView } from 'react-native';
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
        )
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Text style={styles.title}>HOME</Text>
            </ScrollView>
        )

    }
}

export default Home;