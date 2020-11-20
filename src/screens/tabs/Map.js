import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/styles';
import api from '../../service/api'

const estilo = StyleSheet.create({
    button: {
        width: 150,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    }
})

class Map extends Component {

    send(event) {
        event.preventDefault();
        api.post('api/wifi/', {
            "signal": 4512,
            "latency": 465,
            "power": 312
        }).then(response => {
            alert("Cadastro feito!");
            console.log(response.data)
        })
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.center}>
                    <Text style={styles.title}>MAP</Text>
                    <TouchableOpacity style={estilo.button} onPress={(event) => this.send(event)} >
                        <Text style={estilo.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Map;