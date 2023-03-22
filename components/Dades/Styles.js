import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#2196f3",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50
    },
    tableRow: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
    },
    columnHeader: {
        width: "18.5%",
        justifyContent: "center",
        alignItems: "center"
    },
    columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 11
    },
    columnRowTxt: {
        width: "20%",
        textAlign: "center",
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