import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: "center",
        fontFamily:'PoppinsSemibold',
        color: 'black'
    },
    titol: {
        fontFamily:'PoppinsSemibold',
        fontSize: 30,
        color: 'white'
    },
    subtitol: {
        fontFamily:'PoppinsSemibold',
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },
    titolGrafic: {
        fontFamily:'PoppinsSemibold',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    scroll : {
        backgroundColor: 'black'
    }
});

export default styles;