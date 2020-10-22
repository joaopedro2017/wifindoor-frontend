import React from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import Styles from './styles'


const Form = () => {
    // const navigation = useNavigation();
    // const route = useRoute();

    const route = useRoute();
    const navigation = useNavigation();
    let detailResult = route.params;


    return (
        <View>
            <TextInput style={Styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='E-mail'
                placeholderTextColor='#FFF' />
            <TextInput style={Styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                placeholderTextColor='#FFF'
                secureTextEntry />
            <TouchableOpacity style={Styles.button} onPress={() => { navigation.navigate('BottomTabs') }}>
                <Text style={Styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Form;