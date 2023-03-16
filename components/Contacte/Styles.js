import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1, 
        justifyContent: 'center',
        marginTop: -80,
        fontFamily:'Poppins'
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    missatgeInput: {
        height: 80,
    },
    titol: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 80,
        fontFamily:'PoppinsSemibold'
    }
});

export default styles;
