import { Button, View } from 'react-native';

export function Dades({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Inici')} title="Tornar a inici" />
      </View>
    );
  }