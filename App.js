import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Inici } from './components/Inici';
import { Contacte } from './components/Contacte';
import { Dades } from './components/Dades';
import {CustomDrawer} from './components/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Inici" component={Inici} options={{drawerIcon: () => <Icon name="home" size={20} color={"#3b3b3b"} />}}/>
        <Drawer.Screen name="Dades" component={Dades} options={{drawerIcon: () => <Icon name="globe-outline" size={20} color={"#3b3b3b"} />}}/>
        <Drawer.Screen name="Contacte" component={Contacte} options={{drawerIcon: () => <Icon name="person" size={20} color={"#3b3b3b"} />}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
