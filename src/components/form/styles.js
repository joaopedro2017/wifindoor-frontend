import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        color: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFF',
        textAlign: 'center'
    },
    button: {
        width: 300,
        backgroundColor: '#30454E',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    }
})

export default styles;