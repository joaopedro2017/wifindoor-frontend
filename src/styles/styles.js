import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: 16
    },
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
    card: {
        backgroundColor: "#FFF",
        margin: 0,
        padding: 10,
        width: "100%",
        marginLeft: 0,
        borderRadius: 10
    },
    cardTitle: {
        margin: 0,
        color: '#006400',
        textAlign: "left"
    },
    cardText: {
        marginBottom: 10,
        marginLeft: 0
    },
    scrollView: {
        backgroundColor: "#FFF"
    }
})