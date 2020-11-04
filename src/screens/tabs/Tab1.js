import WifiManager from 'react-native-wifi-reborn'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { styles } from '../../styles/styles'

const estilo = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AAA',
        textAlign: 'center'
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    title: {
        fontSize: 10,
        marginBottom: 5,
        color: "green"
    },
    signupButton: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
})

class Tab1 extends Component {
    state = {
        networks: [],
        text: '',
        level: ''
    };

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

        this.setState({ networks: [] })

        WifiManager.loadWifiList().then(
            WifiEntry => {
                this.setState({ networks: WifiEntry })

                let i = 1
                this.state.networks.forEach(element => {
                    console.log('Rede ', i++)
                    console.log(element.BSSID)
                    console.log(element.SSID)
                    console.log(element.capabilities)
                    console.log(element.frequency)
                    console.log(element.level)
                    console.log(element.timestamp)
                    console.log('----------------------------------------------------------------------')
                });
            }
        )

        WifiManager.getCurrentWifiSSID().then(
            ssid => {
                console.log("Your current connected wifi SSID is " + ssid);
            },
            () => {
                console.log("Cannot get current SSID!");
            }
        );
    }

    loadingNetwork(event) {
        event.preventDefault()

        this.setState({ networks: [] })
        WifiManager.loadWifiList().then(
            WifiEntry => {
                this.setState({ networks: WifiEntry })
            }
        )
    }

    render() {
        return (
            <View style={styles.center}>

                {
                    this.state.networks.map((element, index) => (
                        <Text key={index} style={estilo.title}>{element.SSID} - {element.BSSID} - {element.level}</Text>
                    ))
                }

                <TouchableOpacity style={estilo.button} onPress={(event) => this.loadingNetwork(event)} >
                    <Text style={estilo.buttonText}>Loading</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Tab1;