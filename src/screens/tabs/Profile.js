import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../styles/styles';

class Profile extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.center}>
                    <Text style={styles.title}>PROFILE</Text>
                </View>
            </ScrollView>
        )
    }
}

export default Profile;