import WifiManager from 'react-native-wifi-reborn'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { styles } from '../../styles/styles'

class Network extends Component {
    state = {
        networks: []
    };

    componentDidMount() {

        this.setState({ networks: [] })
        WifiManager.loadWifiList().then(
            WifiEntry => {
                this.setState({ networks: WifiEntry })
            }
        )
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

    distanciaRSSI(RSSI, frenq) {
        return Math.pow(10, ((parseInt(RSSI) * Math.log10(parseInt(frenq)) - 32.44) / 10 * 2.9))
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {
                    this.state.networks.map((element, index) => (
                        <Card key={index} width={'120%'} containerStyle={styles.card}>
                            <Card.Title style={styles.cardTitle}>
                                <Icon name='wifi' color="#006400" /> {element.SSID}
                            </Card.Title>
                            {/* <Card.Divider /> */}
                            <Text style={styles.cardText}>
                                RSSI: {element.level}, Frequência: {element.frequency}, Distancia: {this.distanciaRSSI(element.level, element.frequency)} m
                            </Text>
                        </Card>
                    ))
                }

                <View style={styles.center}>
                    <TouchableOpacity style={styles.button} onPress={(event) => this.loadingNetwork(event)} >
                        <Text style={styles.buttonText}>Loading</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}

export default Network;