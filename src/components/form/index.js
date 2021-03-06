import React from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Form = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TextInput style={Styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='E-mail'
                placeholderTextColor='#888' />
            <TextInput style={Styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                placeholderTextColor='#888'
                secureTextEntry />
            <TouchableOpacity style={Styles.button} onPress={() => { navigation.navigate('BottomTabs') }}>
                <Text style={Styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Form;