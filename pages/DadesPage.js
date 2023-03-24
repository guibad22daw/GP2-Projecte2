import { View, Text, ImageBackground } from 'react-native'
import Taula from '../components/TaulaComponent';
import styles from '../styles/DadesStyles';

const Dades = () => {
    return (
        <ImageBackground
            source={require('../assets/img/barcelona.png')}
            style={styles.backgroundImage}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.titol}>Taula de dades</Text>
                    <Text style={styles.subtitol}>Mostrem diverses dades de les diferents regions del món.</Text>
                </View>
                <Taula />
            </View>
        </ImageBackground>
    )
}

export default Dades;