import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Inici } from './pages/IniciPage';
import { Contacte } from './pages/ContactePage';
import Dades from './pages/DadesPage';
import Icon from 'react-native-vector-icons/Ionicons';
import Grafic from './pages/GraficPage';
import * as SQLite from 'expo-sqlite';

const Drawer = createDrawerNavigator();
db = SQLite.openDatabase("db.db");
db.transaction(tx => {
  tx.executeSql("DROP TABLE IF EXISTS continents")
  tx.executeSql("CREATE TABLE  continents(continent TEXT,population INT, percPoverty REAL, literacyRate REAL, access2Electricity REAL, lifeExpectancy REAL, rentaPerCapita REAL);")
});

db.transaction(
  tx => {
    tx.executeSql("INSERT INTO continents VALUES('Unió Europea',446946712,21.7,90.98,100,80,38234)");
    tx.executeSql("INSERT INTO continents VALUES('Àfrica',1416625724,34,71,43,64.38,4121)");
    tx.executeSql("INSERT INTO continents VALUES('Àsia',4598168800,27.5,84,97,79,13037)");
    tx.executeSql("INSERT INTO continents VALUES('Àmerica del Nord',374241210,27.5,79,100,78,67514)");
    tx.executeSql("INSERT INTO continents VALUES('Àmerica del Sud',439176795,30,76,98.5,78,8340)");
    tx.executeSql("INSERT INTO continents VALUES('Oceania',44491724,26.9,98.44,99,83.2,48520)");
  }
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Inici">
        <Drawer.Screen name="Inici" component={Inici} options={{ drawerIcon: () => <Icon name="home" size={20} color={"#3b3b3b"} /> }} />
        <Drawer.Screen name="Dades" component={Dades} options={{ drawerIcon: () => <Icon name="globe-outline" size={20} color={"#3b3b3b"} /> }} />
        <Drawer.Screen name="Gràfic" component={Grafic} options={{ drawerIcon: () => <Icon name="analytics-outline" size={20} color={"#3b3b3b"} /> }} />
        <Drawer.Screen name="Contacte" component={Contacte} options={{ drawerIcon: () => <Icon name="person" size={20} color={"#3b3b3b"} /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
