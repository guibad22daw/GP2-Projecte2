import { View, Text, Button } from 'react-native'

export function Contacte({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Inici')} title="Tornar a inici" />
        </View>
    )
}