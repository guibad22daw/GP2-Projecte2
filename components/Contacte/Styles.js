import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1, 
        justifyContent: 'center',
        marginTop: -80,
        fontFamily:'Poppins',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    background: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    missatgeInput: {
        height: 80,
    },
    titol: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: -10,
        fontFamily:'PoppinsSemibold',
        color: '#fff'
    },
    description: {
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 40,
        color: '#fff'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        tintColor: 'rgba(0, 0, 0, 0.5)'
    }
});

export default styles;
