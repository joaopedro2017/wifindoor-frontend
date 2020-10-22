import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import {
    useNavigation,
    useRoute,
    useFocusEffect,
    useNavigationState
} from '@react-navigation/native'
import { styles } from './styles/styles';

const Detail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const state = useNavigationState(state => state);

    useFocusEffect(
        React.useCallback(() => {
            fetch('https://restcountries.eu/rest/v2/capital/tallinn')
                .then(response => {
                    response.json().then((data) => {
                        console.log(data);
                    })
                })
        })
    )

    return (
        <View style={styles.center}>
            <Text style={styles.title}>{route.params.screenName}</Text>
            <Button
                title='View Botton Tabs'
                onPress={() => { navigation.navigate('Bottom Tabs', { name: "param 1" }) }}
            />
            <Button
                title='View Top Tabs'
                onPress={() => { navigation.navigate('Top Tabs', { name: "param 2" }) }}
            />
            <Button
                title='Pass Data Back'
                onPress={() => { navigation.navigate('Feed', { data: "=I!" }) }}
            />
        </View>
    )

}

export default Detail;