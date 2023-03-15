import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ImageBackground } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export function CustomDrawer(props, navigation) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 0.5, borderTopColor: '#ccc', }}>
                {/* La següent linea llença un error no controlat de forma que un cop es posi en producció la app, es tancarà */}
                <TouchableOpacity onPress={() => {throw { }}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                    <Icon name="exit-outline" size={20} color={"#3b3b3b"} />
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'rgba(28, 28, 30, 0.68)', marginLeft: 25 }}>Sortir</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View >

    )
}