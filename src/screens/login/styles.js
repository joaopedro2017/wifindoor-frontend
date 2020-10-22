import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#698FA1',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default styles;