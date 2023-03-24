import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        color: 'white'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        tintColor: 'rgba(0, 0, 0, 0.5)'
    }
});

export default styles;