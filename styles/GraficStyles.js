import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    header: {
        height: 160,
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: 'PoppinsSemibold',
        color: 'black'
    },
    titol: {
        fontFamily: 'PoppinsSemibold',
        fontSize: 30,
        color: 'white'
    },
    subtitol: {
        fontFamily: 'PoppinsSemibold',
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },
    titolGrafic: {
        fontFamily: 'PoppinsSemibold',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    scroll: {
        textDecorationLine: 'none'
    },
    grafic1: {
        paddingRight: 40,
        marginLeft: 40,
        paddingTop: 30,
        borderRadius: 10
    },
    grafic2: {
        paddingRight: 55,
        marginLeft: 55,
        paddingTop: 30,
        borderRadius: 10
    }
});

export default styles;