import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Styles from './styles';
import Form from '../../components/form'
import Logo from '../../components/logo'


const Login = () => {
    const route = useRoute();
    const navigation = useNavigation();
    let detailResult = route.params;
    return (
        <View style={Styles.container}>
            {/* <StatusBar backgroundColor="#1c313a" barStyle="light-content" />  */}
            <View >
                <Logo />
                <Form type="Login" />
                <View style={Styles.signupTextCont}>
                    <Text style={Styles.signupText}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('BottomTabs', { screenName: "My Detail Screen" }) }} >
                        <Text style={Styles.signupButton}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default Login;
// onPress={() => { navigation.navigate('Detail', { screenName: "My Detail Screen" }) }}