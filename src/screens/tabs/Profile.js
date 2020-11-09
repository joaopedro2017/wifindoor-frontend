import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';

class Profile extends Component {

    render() {
        return <View style={styles.center}>
            <Text style={styles.title}>PROFILE</Text>
        </View>
    }
}

export default Profile;