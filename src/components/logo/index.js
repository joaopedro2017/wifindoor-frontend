import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textLogo: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }
})

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 128, height: 128 }}
                    source={require('../../images/logo.png')} />
                <Text style={styles.textLogo}>Wifindoor</Text>
            </View>
        )
    }
}

