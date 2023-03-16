import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenidor: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
      fontSize: 32,
      fontFamily:'PoppinsSemibold',
      color: '#fff',
      marginBottom: 20,
    },
    description: {
      fontFamily:'Poppins',
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 30,
    },
});

export default styles;
