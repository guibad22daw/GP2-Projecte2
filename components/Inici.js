import { Button, View } from 'react-native';

export function Inici({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Dades')}
        title="Go to Dades"
      />
    </View>
  );
}