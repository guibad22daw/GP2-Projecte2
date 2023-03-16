import { Button, View } from 'react-native';
import estils from './Styles';

export function Inici({ navigation }) {
  return (
    <View style={estils.contenidor}>
      <Button
        onPress={() => navigation.navigate('Dades')}
        title="Veure dades"
      />
    </View>
  );
}