import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles';
import Form from '../../components/form'
import Logo from '../../components/logo'

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <View >
                <Logo />
                <Form type="Login" />
                <View style={Styles.signupTextCont}>
                    <Text style={Styles.signupText}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }} >
                        <Text style={Styles.signupButton}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;